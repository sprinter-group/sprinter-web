<template lang="pug">
    div.day-cell(:class="{'today' : day.isToday, 'current-month' : day.isCurrentMon, 'weekend': day.isWeekEnd, 'selected-day': isDaySelected}" @click="showDayOptions")
      div.row
        div.col-sm-6
          div(v-show='isDaySelected')

        div.col-sm-6
          div.today-circle
            p.day-number(:title="day.date.format('D')") {{ day.date.format('D') }}

      //- div.event-list-wrapper(v-if='eventList')
      //-   div.event-list-item(v-for='event in eventList' v-tooltip.top='{content: event.eventName, delay: { show: 500, hide: 100 }}') {{ event.eventName }}
</template>

<script>
import moment from 'moment';
import {EventBus} from '../event-bus.js'
import {DAY_SELECTED, CHANGE_MONTH} from '../actions';

// TODO by Hyouk
// 리스트 생성

export default {
  data: function() {
    return {
      isDaySelected: false,
      // eventList: [
      //   { eventName: 'Event', eventDetails: 'Dt', eventDate: 'Ed' },
      //   { eventName: 'Task', eventDetails: 'Dt', eventDate: 'Ed' },
      //   { eventName: 'New', eventDetails: 'Dt', eventDate: 'Ed' },
      // ]
    }
  },
  props: {
    day: {
      type: Object
    },
    firstDay: {
      type: String
    }
  },
  methods: {
    showDayOptions() {
      let me = this;
      let startOfToday = moment().startOf('D');
      if(this.day.date.isAfter(startOfToday) || this.day.date.isSame(startOfToday)) {
        this.isDaySelected = true;
        this.$root.$emit(DAY_SELECTED, {dayDate:me.day.date});
      }
    }
  },
  created() {
    let me = this;
    this.$root.$on(DAY_SELECTED, function (pl) {
      if (pl.dayDate != me.day.date) {
        //console.log("day : "+ me.day.date);
        me.isDaySelected = false;
      }
    })

    this.$root.$on(CHANGE_MONTH, function(pl){
      me.isDaySelected = false;
    })
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/css/style.scss";

@mixin border-ways($val, $line, $color){
  border-top:      $val $line $color;
  border-left:     $val $line $color;
  border-right:    $val $line $color;
  border-bottom:   $val $line $color;
}

.day-cell {
  flex: 1;
  padding: $grid;
  background: $listBase;
  min-height: ($grid28x);
  @include font-size($grid6x);
  @include render-hack(border, flex);
  // @include border-ways(1px, solid, $stroke !important);

  &:hover {
    cursor: pointer;
    background-color: $brand-op;
  }

  .row {
    @media #{$tablet-min} {
      width: 0;
    }

    .col-sm-6 {
      .today-circle{
        position: absolute;
      }
    }
  }
}

.day-number {
  z-index: 2;
  font-weight: 900;
  text-align: center;
  color: $before !important;
  padding: $grid2x ($grid * 1.8);
  @include font-size($grid6x);
}

.current-month {
  background-color: white;

  &:hover {
    cursor: pointer;
  }

  p {
    color: $textDark !important;
    @include font-size($grid6x);
  }
}

.weekend {
  p {
    color: $textLightGrey !important;
  }
}

.today {
  background-color: $brand-op;

  .today-circle {
    visibility: hidden;
    @include border-radius($grid8x);
    background-color: $brand !important;

    p {
      visibility: visible;
      font-weight: bolder;
      color: white !important;
      @include font-size($grid6x);
    }
  }
}

.selected-day {
  .today-circle {
    visibility: visible;
    background-color: transparent;
    @include border-radius($grid8x);
    @include render-hack(border, border-radius);
    @include inner-border(($grid / 2), $brand !important);
  }

  p {
    color: $brand !important;
    font-weight: bolder;
    @include font-size($grid6x);
  }
}

// global
.today-circle {
  width:  $grid8x;
  height: $grid8x;
  @include render-hack(width, height);
}
</style>
