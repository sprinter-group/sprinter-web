<template lang="pug">
  div#app
    Calendar(:first-day='1', :all-events='events')
    FABcomps
</template>

<script>
import Calendar from './components/Calendar.vue'
import FABcomps from './components/FAB/FABcomps.vue'

export default {
  name: 'app',
  data() {
    return {
      events: []
    }
  },
  methods: {

  },
  components: {
    'Calendar': Calendar,
    'FABcomps':FABcomps
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
