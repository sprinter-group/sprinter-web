<template>
    <div class="week-row" @click="showWeekNum">
      <div class="week-num" v-if="showWeekNumFlag">
        {{ $t('generic.week')}} {{week[0].date.format('w')}}
      </div>
      <day v-for="(day, idx) in week" :day="day" :key="idx"></day>
    </div>
</template>

<script>
  import {WEEK_SELECTED} from "../actions";
  import Day from './Day';

  export default {
      data() {
          return {
            showWeekNumFlag: false,
          }
      },
      props: {
          week: {
            type: Array
          }
      },
      methods: {
          showWeekNum() {
            let me = this;
            me.showWeekNumFlag = true;
            // 콘솔창에서 띄워주는 메세지
            console.log("SELECTED week num : " + {weekDate:me.week[0].date});
            this.$root.$emit(WEEK_SELECTED, {weekDate:me.week[0].date});
          }
      },
      components: {
          'Day': Day,
      },
      created() {
        let me = this;
        this.$root.$on(WEEK_SELECTED, function (pl) {
          if (pl.weekDate != me.week[0].date) {
            me.showWeekNumFlag = false;
            //console.log("week : " + me.week[0].date);
          }
        })

      }
    }
</script>

<style lang="scss" scoped>
@import "../assets/css/style.scss";

  .week-row {
    width: 100%;
    display: flex;
    cursor:pointer;
  }
  .week-num {
    border-radius: $grid 0 0 $grid;
    background-color: white;
    text-align: right;
    position: absolute;
    width: 70px;
    left: -70px;
  }
  .weeks {
    vertical-align: middle;
    .week{
      color: $textDark;
      @include font-size(21px);
    }
  }
</style>
