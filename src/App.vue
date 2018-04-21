<template lang="pug">
  //- div#app(@keydown.left="goPrev" @keydown.right="goNext")
  div#app(@keydown='watchKeydown')
    Calendar(:first-day='1', :all-events='events')
    FABcomps
</template>

<script>
import moment from 'moment'
import Calendar from './components/Calendar.vue'
import CalendarHeader from './components/CalendarHeader.vue'
import FABcomps from './components/FAB/FABcomps.vue'
import {CHANGE_MONTH} from "./actions"

export default {
  name: 'app',
  data: function() {
    return {
      currentMonth: {},
      events: []
    }
  },
  methods: {

  },
  components: {
    'Calendar': Calendar,
    'FABcomps': FABcomps,
    'CalendarHeader': CalendarHeader,
  },
  computed: {
    // TODO by Hyouk
    // 'left', 'right' 누를때 달력 넘기기
    watchKeydown: function(){
      window.addEventListener('keydown', function(e) {
        let thisMonth = moment(this.currentMonth)
        if (e.keyCode == 37){
          let pl = thisMonth.subtract(1, 'months')
          this.currentMonth = pl
          console.log('left ' + (pl.month() + 1))
        }
        else if (e.keyCode == 39){
          let pl = thisMonth.add(1, 'months')
          this.currentMonth = pl
          console.log('right ' + (pl.month() + 1))
        }
      })
    }
  }
}
</script>

<style lang="scss">
@import "./assets/css/style.scss";

// @import './assets/css/modules/timepicker';
</style>
