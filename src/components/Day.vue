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

<style scoped>
  .day-cell{
    flex: 1;
    min-height: 110px;
    padding: 4px;
    border-right:1px solid ghostwhite;
    border-bottom:1px solid ghostwhite;
    background: lightgray;

  }
  .day-number {
    text-align: right;
    color: black;
    font-size: 1em;
    padding: 5px;
  }
  .current-month {
    background-color: white;
  }
  .current-month p{
    color: black;
    font-size: 1.5em;
  }
  .weekend p {
    color: mediumvioletred;
  }
  .today{
    background-color: floralwhite;
  }
  .today p{
    font-size: 2em;
    font-weight: bolder;
    color: black;
  }
  .selected-day{

  }
  .selected-day p{
    font-size: 2em;
    font-weight: bold;
  }
</style>
