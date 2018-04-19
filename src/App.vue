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
    'FABcomps': FABcomps
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
