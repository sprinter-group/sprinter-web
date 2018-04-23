<template>
  <div class="row">
    <div v-if="loading">{{ $t('generic.loading')}}</div>
    <div v-if="error" class="error"></div>
    <div class="panel panel-default">
      <!-- <div class="panel-heading">
        <h2>{{$t('generic.calender')}}</h2>
      </div> -->
      <div class="panel-body">
        <div class="row">
          <div class="col-sm-12">
            <calendar-header :current-month="currentMonth" :firstDay="firstDay" :locale="appLocale"></calendar-header>
            <div class="full-calendar-body">
              <div class="weeks">
                <strong class="week" v-for="idxDay in 7">{{ (idxDay -1 ) | weekDayName(firstDay, appLocale)}}</strong>
              </div>

              <div class="dates" ref="dates">
                <week v-for="(week, idx) in Weeks" :firstDay="firstDay" :key="idx" :week="week">
                </week>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import Week from './Week.vue'
import CalendarHeader from './CalendarHeader'
import {CHANGE_MONTH} from '../actions'

// TODO by Hyouk
// 키보드로 달력 넘겨도 날짜 표시 반영되도록 수정
export default {
  name: 'calendar',
  components: {
    'moment': moment,
    'week' : Week,
    'CalendarHeader' : CalendarHeader,
  },

  data: function() {
    return {
      loading: false,
      error: null,
      currentMonth: moment().startOf('month'),
    }
  },
  props: {
    allEvents: {
      selectedMonth: moment(),
      type: Array,
      default: function(){
        return [];
      }
    },
    firstDay: {
      type: Number | String,
      validator (val){
        let res = parseInt(val);
        return res >= 0 && res <= 6
      },
      default: 0
    },
  },
  filters: {
    weekDayName(weekday, firstDay, locale) {
      firstDay = parseInt(firstDay);
      const localMoment = moment().locale(locale);
      return localMoment.localeData().weekdaysShort()[(weekday + firstDay) % 7];
    },
  },
  computed: {
    appLocale: function(){
      return i18n.locale;
    },
    Weeks() {
      let monthMoment = this.getMonthViewStartDate(this.currentMonth, this.firstDay);

      let daysOfCurrentMon = this.currentMonth.daysInMonth();

      let weeks=[];
      let week=[];
      for( let weekIndex=0; weekIndex < 5; weekIndex++) {
        week = [];
        for( let dayIndex=0; dayIndex < 7; dayIndex++) {
          week.push(this.getDayObject(monthMoment, dayIndex));
          monthMoment.add(1,'day');
        }
        weeks.push(week);
      }

      let diff = daysOfCurrentMon-weeks[4][6].date.format("D");

      if(diff > 0 && diff < 3) {
        week=[];
        for( let idx=0; idx<7;idx++){
          week.push(this.getDayObject(monthMoment, idx));
          monthMoment.add(1,'day');
        }
        weeks.push(week);
      }
      return weeks;
    },
    events: function() {
      return this.allEvents;
    },
  },
  methods: {
    changeMonthKeyup(event) {
      if (event.keyCode === 37) {
        let pl = moment(this.currentMonth).subtract(1, 'months').startOf('month')
        this.$root.$emit(CHANGE_MONTH, pl)
        console.log('[goPrev] pressed: ' + pl.month())
        this.selectedMonth = pl
      }
      else if (event.keyCode === 39) {
        let pl = moment(this.currentMonth).add(1, 'months').startOf('month')
        this.$root.$emit(CHANGE_MONTH, pl)
        console.log('[Next] pressed: ' + pl.month())
        this.selectedMonth = pl
      }
    },
    getMonthViewStartDate(date, firstDay){
      firstDay = parseInt(firstDay);
      let start = moment(date).local(this.appLocale);
      let startOfMon = moment(start.startOf('month'));
      console.log("start : " + start);
      console.log("startOfMonth : " + startOfMon);

      start.subtract(startOfMon.day(), 'days');

      if(startOfMon.day() < firstDay) {
        start.subtract(7, 'days');

      }
      start.add(firstDay, 'days');
      return start;
    },
    getDayObject(mm, dayIndex) {
      return {
        isToday: mm.isSame(moment(), 'day'),
        isCurrentMon: mm.isSame(this.currentMonth, 'month'),
        weekDay: dayIndex,
        isWeekEnd: ( dayIndex == 5 || dayIndex == 6),
        date: moment(mm),
        events: this.getEvents(mm)
      }
    },
    getEvents(date) {
      return this.events.filter(event => {
        return date.isSame(event.date, 'day') ? event : null;
      });
    },
  },
  created: function() {
    let me = this;
    this.$root.$on(CHANGE_MONTH, function(pl){
      me.currentMonth = pl;
      console.log("now CM : " + this.currentMonth);
    })

    // 키보드 이벤트리스너
    document.addEventListener('keyup', this.changeMonthKeyup);
  },
  destroyed: function() {
    document.removeEventListener('keyup', this.changeMonthKeyup);
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/css/style.scss";

h1, h2 {
  font-weight: normal;
}
.full-calendar-body {
  margin-top: $grid5x;
  @include render-hack(margin-top);
}
.weeks {
  display: flex;
  height: $grid8x;
  @include render-hack(display);
  .week {
    flex: 1;
    color: $textDark;
    padding: $grid2x;
    font-weight: 400;
    text-align: center;
    @include render-hack(flex);
    @include font-size($grid5x);
  }
}

.dates {
  position: relative;
}
</style>
