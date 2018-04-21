<template lang="pug">
    <div class="row main-div-header" tabindex="0" @keydown.left="goPrev" @keydown.right="goNext">
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
        //- <div class="show-year"> {{nowYear}} &nbsp;<i class="fa fa-calendar-o"></i></div>
        <vue-monthly-picker class="show-year" v-model="selectedMonth"> <i class="fa fa-calendar-o"></i> </vue-monthly-picker>
      </div>
    </div>
</template>

<script>
import Vue from 'vue'
import moment from 'moment'
import {CHANGE_MONTH} from "../actions"

import VueMonthlyPicker from 'vue-monthly-picker'
// https://github.com/ittus/vue-monthly-picker

Vue.component('my-component', {
  components: {
    VueMonthlyPicker
  }
})

// TODO by Hyouk
// 바운드 누르기 전에도 @keydown 적용 가능하도록 수정

  export default {
    data: function() {
        return {
          localeSelect: 'en',
          selectedMonth: this.currentMonth
        }
    },
    components: {
      'VueMonthlyPicker': VueMonthlyPicker
    },
    props: {
        currentMonth: {},
        locale: {
          type: String,
        }
    },
    computed: {
      nowYear() {
        if(!this.currentMonth) return;
        return this.currentMonth.locale(this.locale).format('MMMM YYYY');
      }
    },
    methods: {
      setLocale(){
        if(i18n) {
          i18n.locale = this.localeSelect;
        } else {
          console.warn('Plz define global vue locale value');
        }
      },
      goPrev() {
        let pl = moment(this.currentMonth).subtract(1, 'months').startOf('month');
        this.$root.$emit(CHANGE_MONTH, pl);
        console.log(pl.month());
      },
      goNext() {
        let pl = moment(this.currentMonth).add(1, 'months').startOf('month');
        this.$root.$emit(CHANGE_MONTH, pl);
        console.log(pl.month());
      },
      goToday() {
        this.$root.$emit(CHANGE_MONTH, moment());
      },
      events: function() {
        return this.currentMonth;
      }
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
      text-align: center;
      width: ($grid * 24);
      height: ($grid * 10);
      vertical-align: middle;
      &:nth-child(2){
        margin: auto $grid;
      }
      @media #{$middle}{
        width: ($grid * 16);
        span {
          display: none;
        }
        &:nth-child(2){
          margin: auto ($grid / 2);
        }
      }
      @media #{$mobile}{ width: ($grid * 12) }
      @media #{$mobile-small}{ width: ($grid * 10); }
      @include transition(background-color .25s ease);
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
  .show-year {
    color: $textDark;
    font-weight: 900;
    text-align: right;
    @include font-size($grid6x);
    @include line-height($grid8x);
  }
}
.main-div-header {
  &:focus {
    outline: none;
  }
}

</style>
