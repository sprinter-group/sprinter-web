<template lang="pug">
    <div class="row">
      <div class="col-sm-4">
        <div class="form-group">
        </div>
      </div>
      <div class="col-sm-4 header-center">
        <div class="btn-gourp">
          <button @click.stop="goPrev" class="btn btn-outline btn-primary" :title="$t('generic.previous')"> <i class="fa fa-chevron-left"></i> {{ $t('generic.previous') }}</button>
          <button @click.stop="goToday" class="btn btn-outline btn-default today-button" :title="$t('generic.today')"> <i class="fa fa-calendar-o"></i> {{ $t('generic.today') }}</button>
          <button @click.stop="goNext" class="btn btn-outline btn-primary" :title="$t('generic.next')">{{ $t('generic.next') }} <i class="fa fa-chevron-right"></i> </button>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="show-year"> {{nowYear}} &nbsp;<i class="fa fa-calendar-o"></i></div>
      </div>
    </div>
</template>

<script>
  import moment from 'moment';
  import {CHANGE_MONTH} from "../actions";

  export default {
      data() {
          return {
            localeSelect: 'en'
          }
      },
      props: {
          currentMonth: {},
          locale: {
            type: String,
          }
      },
      computed: {
        nowYear() {
          if( !this.currentMonth) return;
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
          goToday(){
            this.$root.$emit(CHANGE_MONTH, moment());
          }

      }
    }
</script>

<style lang="scss" scoped>
@import "../assets/css/style.scss";

.header-center {
  .btn-gourp {
    .btn {
      width: ($grid * 24);
      background-color: white;
      @include transition(background-color .25s ease);
      &:focus{
        outline: none;
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
.show-year {
  float: right;
  color: $textDark;
  font-weight: 900;
  @include font-size(24px);
  @include line-height(32px);
}
</style>
