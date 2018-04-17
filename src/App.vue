<template lang="pug">
  div#app
    Calendar(:first-day='1', :all-events='events')
    FloatingButton(@click.native='FABready')
    FABmodal(v-if='FABvalue')
</template>

<script>
import Calendar from './components/Calendar.vue'
import FloatingButton from './components/FloatingButton.vue'
import FABmodal from './components/FABmodal.vue'

export default {
  name: 'app',
  data() {
    return {
      FABvalue: false,
      events: []
    }
  },
  methods: {
    FABready: function(){
      this.FABvalue = !this.FABvalue
      console.log(this.FABvalue)
      return this.FABvalue
    }
  },
  components: {
    'Calendar': Calendar,
    'FloatingButton':FloatingButton,
    'FABmodal': FABmodal
  }
}
</script>

<style lang="scss">
@import "./assets/css/style.scss";

// TODO by Hyouk
// 전체 선택자 사용 금지
// 양쪽 패딩 맞추기
*{
  max-width: 100vw !important;
  // max-height: 100vh !important;
}
</style>
