<template lang="pug">
    <div class="row main-div-header" tabindex="0">
      <div class="col-sm-2 hide-me">
        <div class="form-group">
        </div>
      </div>

      <div class="col-sm-8 header-center">
        <div class="btn-gourp">
          button.btn-ripple(@click.stop="goPrev" class="btn btn-outline btn-primary" v-tooltip.bottom="{content: getPrevMonth, delay: { show: 500, hide: 100 }}")
            i.fa.fa-chevron-left
            span &nbsp;{{ $t('generic.previous') }}

          button.btn-ripple(@click.stop="goToday" class="btn btn-outline btn-default today-button" v-tooltip.bottom="{content: getToday, delay: { show: 500, hide: 100 }}")
            i.fa.fa-calendar-o
            span &nbsp;{{ $t('generic.today') }}

          button.btn-ripple(@click.stop="goNext" class="btn btn-outline btn-primary" v-tooltip.bottom="{content: getNextMonth, delay: { show: 500, hide: 100 }}")
            span {{ $t('generic.next') }}&nbsp;
            i.fa.fa-chevron-right
        </div>
      </div>

      <div class="col-sm-2 year-bound">
        //- vue-monthly-picker.show-year(v-tooltip.top='{content: nowYear, delay: { show: 500, hide: 100 }}',
        vue-monthly-picker.show-year(
                          :title='keyupEvents',
                          v-model='selectedMonth',
                          @selected='handleSelect',
                          :dateFormat='dateFormat',
                          )
      </div>
    </div>
</template>

<script>
import Vue from 'vue'
import moment from 'moment'
import {CHANGE_MONTH} from '../actions'
import {EventBus} from '../event-bus.js'
import VueMonthlyPicker from 'vue-monthly-picker'
// https://github.com/ittus/vue-monthly-picker
// http://momentjs.com/docs/#/displaying/format/

export default {
  data: function() {
    return {
      dat: 0,
      localeSelect: 'en',
      selectedMonth: moment(),
    }
  },
  props: {
    currentMonth: {},
    locale: {
      type: String,
    },
    dateFormat: {
      type: String,
      default: 'MMMM YYYY'
    },
  },
  computed: {
    nowYear() {
      if(!this.currentMonth) return;
      return this.currentMonth.locale(this.locale).format('MMMM YYYY')
    },
    getNextMonth() {
      let nm = moment(this.currentMonth).add(1, 'months').startOf('month')
      return nm.locale(this.locale).format('MMMM YYYY')
    },
    getPrevMonth() {
      let pm = moment(this.currentMonth).subtract(1, 'months').startOf('month')
      return pm.locale(this.locale).format('MMMM YYYY')
    },
    getToday() {
      let d = moment(new Date()).format("MMMM Do YYYY")
      return d
    },
    keyupEvents(){
      EventBus.$on('selected-month', selectedMonth => {
        console.log('keyup: ' + selectedMonth.format('MMMM YYYY'));
        return this.selectedMonth = selectedMonth;
      })
    }
  },
  methods: {
    setLocale: function(){
      if(i18n) {
        i18n.locale = this.localeSelect;
      } else {
        console.warn('Plz define global vue locale value')
      }
    },
    goPrev: function() {
      let pl = moment(this.currentMonth).subtract(1, 'months').startOf('month')
      this.$root.$emit(CHANGE_MONTH, pl)
      console.log('[Prev] pressed: ' + pl.month())
      this.selectedMonth = pl
    },
    goNext: function() {
      let pl = moment(this.currentMonth).add(1, 'months').startOf('month')
      this.$root.$emit(CHANGE_MONTH, pl)
      console.log('[Next] pressed: ' + pl.month())
      this.selectedMonth = pl
    },
    goToday: function() {
      let pl = (CHANGE_MONTH, moment())
      this.$root.$emit(CHANGE_MONTH, moment())
      console.log('[Today] pressed: ' + this.currentMonth.locale(this.locale).format('MMMM YYYY'))
      this.selectedMonth = pl
    },
    events: function() {
      return this.currentMonth;
    },
    handleSelect: function(value) {
      this.$root.$emit(CHANGE_MONTH, value)
      console.log('Selected: ' + this.selectedMonth.locale(this.locale).format('MMMM YYYY'))
    },
    // TODO by Hyouk
    // escape 로 monthlyPicker 닫기
    EscapeMonthlyPicker: function(e){
      if (e.keyCode === 27){
        console.log(e.keyCode)
      }
    }
  },
  components: {
    VueMonthlyPicker
  },
  created: function(){
    document.addEventListener('keyup', this.EscapeMonthlyPicker)
  },
  destroyed: function(){
    document.removeEventListener('keyup', this.EscapeMonthlyPicker)
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/css/style.scss";

.hide-me{ display: none; }

.header-center {
  z-index: 15;
  .btn-gourp {
    float: left;
    .btn {
      padding: 0;
      width: $grid24x;
      height: $grid10x;
      @extend %global-btns;
      @include render-hack(padding);

      &:nth-child(2){
        margin: auto $grid;
        width: $grid24x;
        height: $grid10x;
        @extend %global-btns-white;
        @include render-hack(margin);
      }

      @media #{$middle}{
        width: $grid16x;
        @include render-hack(width);

        span {
          display: none;
        }

        &:nth-child(2){
          width: $grid16x;
          margin: auto ($grid / 2);
          @include render-hack(width, margin);
        }
      }

      @include render-hack(transition);
      @media #{$mobile}{ width: $grid12x }
      @media #{$mobile-small}{ width: $grid10x }
      @include transition(background-color .25s ease);

      &:focus{
        outline: 0; // 무쓸모
      }

      &:hover{
        background-color: $white-hover;
      }

      &:not(:nth-child(2)){
        background-color: $brand;

        &:hover{
          background-color: $brand-hover;
        }
      }
    }
  }
}

.year-bound {
  padding: 0;
  float: right;
  padding-top: $grid;
  @include render-hack(padding);

  .show-year {
    color: $textDark;
    text-align: right;
    @include font-size($grid8x);
    @include line-height($grid8x);
  }
}

.main-div-header {
  &:focus {
    outline: 0;
  }
}

</style>
