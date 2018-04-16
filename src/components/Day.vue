<template>
    <div class="day-cell" :class="{'today' : day.isToday, 'current-month' : day.isCurrentMon, 'weekend': day.isWeekEnd, 'selected-day': isDaySelected}"
         @click="showDayOptions">
      <div class="row">
        <div class="col-sm-6">
          <div v-show="isDaySelected">

          </div>
        </div>
        <div class="col-sm-6">
          <div class="today-circle">
            <p class="day-number" :title="day.date.format('D')">{{ day.date.format('D') }}</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import moment from 'moment';
  import {DAY_SELECTED, CHANGE_MONTH} from '../actions';
    export default {
      data() {
          return {
            isDaySelected: false,
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

<style lang="scss">
@import "../assets/css/style.scss";
// 9564
@mixin border-ways($val, $line, $color){
  // border-top: $val $line $color;
  // border-left: $val $line $color;
  border-right: $val $line $color;
  border-bottom: $val $line $color;
}

  .day-cell{
    flex: 1;
    padding: $grid;
    background: $listBase;
    min-height: ($grid * 28);
    @include font-size(24px);
    @include border-ways(1px, solid, $stroke);
    &:hover {
      cursor: pointer;
      background-color: $listBase;
    }
    .row {
      .col-sm-6{
        float: right;
        @media #{$mobile}{
          float: none;
        }
        .today-circle{
          position: absolute;
        }
      }
    }
  }
  .day-number {
    z-index: 2;
    padding: $grid2x;
    text-align: center;
    @include font-size(24px);
    color: $before !important;
  }
  .current-month {
    background-color: white;
    &:hover {
      cursor: pointer;
    }
    p {
      color: $textDark !important;
      @include font-size(24px);
    }
  }
  .weekend {
    p{
      color: $textLightGrey !important;
    }
  }
  .today {
    background-color: $listBase;
    .today-circle {
      visibility: hidden;
      border-radius: $grid8x;
      background-color: $brand !important;
      p {
        color: white !important;
        font-weight: bolder;
        @include font-size(24px);
        visibility: visible;
      }
    }
  }
  .selected-day {
    .today-circle {
      visibility: visible;
      border-radius: $grid8x;
      background-color: transparent;
      box-shadow:0px 0px 0px 2px $brand inset;
    }
    p {
      color: $brand !important;
      font-weight: bolder;
      @include font-size(24px);
    }
  }

// global
  .today-circle {
    width: $grid8x;
    height: $grid8x;
  }
</style>
