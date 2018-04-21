<template lang="pug">
  div#app
    Calendar(:first-day='1', :all-events='events')
    FABcomps
</template>

<script>
import moment from 'moment'
import Vue from 'vue'
import Calendar from './components/Calendar.vue'
import CalendarHeader from './components/CalendarHeader.vue'
import FABcomps from './components/FAB/FABcomps.vue'
import {CHANGE_MONTH} from "./actions"

export default {
  name: 'app',
  data: function() {
    return {
      selectedMonth: moment(),
      currentMonth: {},
      events: []
    }
  },
  created: function(){

  },
  methods: {

  },
  components: {
    'Calendar': Calendar,
    'FABcomps': FABcomps,
    'CalendarHeader': CalendarHeader,
  },
  computed: {
    watchKeyDown: function(){

    }
  }
}
</script>

<style lang="scss">
@import "./assets/css/style.scss";

// TODO by Hyouk
// 행 높이 vh 단위로 맞추기
#app {
  text-align: center;
  margin-top: 0 !important;
  > .row {
    margin: 0;
    @include render-hack(margin);
    > .panel {
      border: none;
      margin-bottom: 0;
      > .panel-heading {
        border: none;
        padding: $grid4x;
        @include render-hack(padding);
      }
      > .panel-body {
        padding: $grid4x;
        @include render-hack(padding);
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
