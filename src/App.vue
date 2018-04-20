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
// temp

// TODO by Hyouk
// 스타일 컴포넌트로 옮기기
// 행 높이 vh 단위로 맞추기
#app {
  margin-top: 0 !important;
  > .row {
    margin: 0;
    > .panel {
      border: none;
      margin-bottom: 0;
      > .panel-heading {
        border: none;
        padding: $grid4x;
      }
      > .panel-body {
        padding: $grid4x;
        > .row {
          .full-calendar-body {
            margin-top: $grid4x;
            @include inner-border(0.75px, $stroke);
            .weeks, .dates, .week, .week-row, .day-cell, .current-month {
              border: none;
              @include inner-border(0.5px, $stroke);
            }
          }
        }
      }
    }
  }
  // temp
  .week-num { display: none }
}
</style>
