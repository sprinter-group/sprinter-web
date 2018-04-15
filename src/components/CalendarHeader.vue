<template>
    <div class="row">
      <div class="col-sm-4">
        <div class="form-group">
        </div>
      </div>
      <div class="col-sm-4 header-center">
        <div class="btn-gourp">
          <button @click.stop="goPrev" class="btn btn-outline btn-primary">{{$t('generic.previous')}}</button>
          <button @click.stop="goToday" class="btn btn-outline btn-default today-button">&dArr; {{ $t('generic.today')}}</button>
          <button @click.stop="goNext" class="btn btn-outline btn-primary">{{ $t('generic.next')}} &rArr;</button>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="show-year">{{nowYear}}</div>
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

<style scoped>

</style>
