<template lang="pug">
  div#app
    Calendar(:first-day='1', :all-events='events')
    FloatingButton
    FABmodal
</template>

<script>
import Calendar from './components/Calendar.vue'
import FloatingButton from './components/FloatingButton.vue'
import FABmodal from './components/FABmodal.vue'

export default {
  name: 'app',
  data() {
    return {
      events: []  //i didn't make them.
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
