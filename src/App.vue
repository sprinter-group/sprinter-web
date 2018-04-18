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
body { height: 100vh !important }
#app {
  margin-top: 0 !important;
  > .row {
    margin: 0;
    > .panel {
      border: none;
      margin-bottom: 0;
      > .panel-heading {
        border: none;
      }
      > .panel-body {
        > .row {
          .full-calendar-body {
            @include inner-border(0.75px, $stroke);
              .weeks, .dates, .week, .week-row, .day-cell {
              border: none;
              @include box-sizing(border-box);
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
