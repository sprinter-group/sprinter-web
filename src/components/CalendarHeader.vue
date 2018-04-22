<template lang="pug">
    <div class="row main-div-header" tabindex="0">
      <div class="col-sm-2 hide-me">
        <div class="form-group">
        </div>
      </div>
      <div class="col-sm-8 header-center">
        <div class="btn-gourp">
          <button @click.stop="goPrev" class="btn btn-outline btn-primary" :title="$t('generic.previous')"> <i class="fa fa-chevron-left"></i> <span>{{ $t('generic.previous') }}</span></button>
          <button @click.stop="goToday" class="btn btn-outline btn-default today-button" :title="$t('generic.today')"> <i class="fa fa-calendar-o"></i> <span>{{ $t('generic.today') }}</span></button>
          <button @click.stop="goNext" class="btn btn-outline btn-primary" :title="$t('generic.next')"><span>{{ $t('generic.next') }}</span> <i class="fa fa-chevron-right"></i> </button>
        </div>
      </div>
      <div class="col-sm-2 year-bound">
        vue-monthly-picker.show-year(v-model='selectedMonth', :title='nowYear', @selected='handleSelect', :dateFormat='dateFormat')
      </div>
    </div>
</template>

<script>
import Vue from 'vue'
import moment from 'moment'
import {CHANGE_MONTH} from "../actions"
import VueMonthlyPicker from 'vue-monthly-picker'
// https://github.com/ittus/vue-monthly-picker
// http://momentjs.com/docs/#/displaying/format/

// TODO by Hyouk
// Today 누르면 바로 날짜 레이블 변경되도록 수정
export default {
  data: function() {
    return {
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
    }
  },
  computed: {
    nowYear() {
      if(!this.currentMonth) return;
      return this.currentMonth.locale(this.locale).format('MMMM YYYY');
    },
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
      console.log('[goPrev] pressed: ' + pl.month())
      this.selectedMonth = pl
    },
    goNext: function() {
      let pl = moment(this.currentMonth).add(1, 'months').startOf('month')
      this.$root.$emit(CHANGE_MONTH, pl)
      console.log('[Next] pressed: ' + pl.month())
      this.selectedMonth = pl
    },
    goToday: function() {
      let pl = moment(this.currentMonth)
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
    document.addEventListener('keyup', this.EscapeMonthlyPicker);
  },
  destroyed: function(){
    document.removeEventListener('keyup', this.EscapeMonthlyPicker);
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/css/style.scss";
.hide-me{ display:none }

.header-center {
  .btn-gourp {
    float: left;
    .btn {
      padding: 0;
      width: ($grid * 24);
      height: ($grid * 10);
      @include render-hack(padding);
      @extend %global-btns;
      &:nth-child(2){
        margin: auto $grid;
        width: ($grid * 24);
        height: ($grid * 10);
        @extend %global-btns-white;
        @include render-hack(margin);
      }
      @media #{$middle}{
        width: ($grid * 16);
        @include render-hack(width);
        span {
          display: none;
        }
        &:nth-child(2){
          width: ($grid * 16);
          margin: auto ($grid / 2);
          @include render-hack(width, margin);
        }
      }
      @media #{$mobile}{ width: ($grid * 12) }
      @media #{$mobile-small}{ width: ($grid * 10); }
      @include transition(background-color .25s ease);
      @include render-hack(transition);
      &:focus{
        outline: none; // 무쓸모
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
    outline: none;
  }
}

</style>
