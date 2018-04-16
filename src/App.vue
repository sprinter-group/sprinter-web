<template lang="pug">
  <div id="app">
    <Calendar :first-day="1" :all-events="events"></Calendar>
    FloatingButton
  </div>

</template>

<script>
import Calendar from './components/Calendar.vue'
import FloatingButton from './components/FloatingButton.vue'

export default {
  name: 'app',
  data() {
    return {
      events: []  //i didn't make them.
    }
  },
  components: {
    'Calendar': Calendar,
    // 'FABModal':FABModal,
    'FloatingButton':FloatingButton
  },
  mounted() {

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
