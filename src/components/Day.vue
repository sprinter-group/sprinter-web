<template>
    <div class="day-cell" :class="{'today' : day.isToday, 'current-month' : day.isCurrentMon, 'weekend': day.isWeekEnd, 'selected-day': isDaySelected}"
         @click="showDayOptions">
      <div class="row">
        <div class="col-sm-6">
          <div v-show="isDaySelected">

          </div>
        </div>
        <div class="col-sm-6">
          <p class="day-number">{{day.date.format('D')}}</p>
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

  .day-cell{
    flex: 1;
    padding: $grid;
    background: $listBase;
    min-height: ($grid * 28);
    @include font-size(24px);
    border-right:1px solid $stroke;
    border-bottom:1px solid $stroke;
    &:hover {
      cursor: default;
      background-color: $listBase;
    }
  }
  .day-number {
    padding: $grid;
    color: $textDark;
    text-align: right;
    @include font-size(24px);
  }
  .current-month {
    background-color: white;
    &:hover {
      cursor: pointer;
    }
    p {
      color: black;
      @include font-size(24px);
    }
  }
  .weekend p {
    color: $textLightGrey;
  }
  .today {
    background-color: $listBase;
    p {
      color: $brand;
      font-weight: bolder;
      @include font-size(24px);
    }
  }
  .selected-day {
    p {
      font-weight: bolder;
      @include font-size(24px);
    }
  }
</style>
