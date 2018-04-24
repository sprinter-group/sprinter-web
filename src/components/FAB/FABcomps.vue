<template lang="pug">
  div#app
    FloatingButton(@click.native='FABready')
    div.modal-dark-bg(v-if='FABvalue' @click='FABfalse')
    div.modal-body(v-if='FABvalue')
      i.material-icons.md-close(
        @click='FABfalse'
        v-tooltip.bottom='{content: Close, delay: { show: 500, hide: 100 }}') close

      form
        input.modal-input-title(v-model='TitleData' placeholder='New event')
        textarea.modal-input-text(v-model='DetailsData' placeholder='Details about your task...')
        div.modal-input-date(:title='SetTime' @click='STMreverse') {{ selectedMonth }}
        button.modal-submit-btn(v-tooltip.top='{content: Save, delay: { show: 500, hide: 100 }}' @click='ClearData' type='submit') {{ Save }}

      sub-set-time(v-if='ShowTimeModal')
</template>

<script>
import moment from 'moment';
import Calendar from '../Calendar.vue';
import FloatingButton from './FloatingButton.vue';

// TODO by Hyouk
// Escape 키로 모달창 닫히도록
// Date Picker
// 모달창에 selected 날짜 가져오기 (selected 가 없으면 today)
// 가져온 날짜 표시

let SubSetTime = {
  template: '<div class="sub-set-time">Hello</div>'
}

export default {
  data() {
    return{
      FABvalue: false,
      currentMonth: {},
      selectedMonth: moment().format("MMMM Do YYYY"),
      events: [],
      Close: 'Close',
      Save: 'Save',
      SetTime: 'Set Time',
      ShowTimeModal: false,
      TitleData: '',
      DetailsData: '',
    }
  },
  methods: {
    ClearData: function(){
      this.TitleData = ''
      this.DetailsData = ''
    },
    STMreverse: function(){
      if (this.FABvalue === true){
        this.ShowTimeModal = !this.ShowTimeModal
        console.log('SubModal ' + this.ShowTimeModal)
      }
      else if (this.FABvalue === false){
        this.ShowTimeModal = false
        console.log('SubModal ' + this.ShowTimeModal)
      }
      return this.ShowTimeModal
    },
    FABready: function(){
      if (this.FABvalue === false){
        this.FABvalue = !this.FABvalue
      }
      console.log('Modal ' + this.FABvalue)
      return this.FABvalue
    },
    FABfalse: function(){
      this.FABvalue = !this.FABvalue
      console.log('Modal ' + this.FABvalue)
      return this.FABvalue
    },
    // 모달창 닫기
    EscapeModal: function(e){
      if (e.keyCode === 27 && this.FABvalue === true){
        this.FABvalue = !this.FABvalue
        console.log('Modal ' + this.FABvalue + ' by ' + e.keyCode)
      }
    },
  },
  components: {
    'moment': moment,
    'Calendar': Calendar,
    'FloatingButton': FloatingButton,
    'sub-set-time': SubSetTime,
  },
  created: function(){
    document.addEventListener('keyup', this.EscapeModal);
  },
  destroyed: function(){
    document.removeEventListener('keyup', this.EscapeModal);
  }
}
</script>

<style lang="scss">
@import "../../assets/css/style.scss";

.modal-dark-bg{
  z-index: 100;
  width: 200vw;
  height: 200vh;
  position: fixed;
  @include set-center();
  background-color: $black38;
  @include render-hack(width, height);

  @include keyframes(opct, 0.25s){
    0%   { @include opacity(0) }
    100% { @include opacity(1) }
  }
}

.modal-body {
  width: 64%;
  z-index: 101;
  position: fixed;
  padding: $grid4x;
  color: $textDark;
  max-width: 480px;
  min-width: 296px;
  @include set-center();
  background-color: white;
  @include border-radius($grid);
  @include box-shadow($grid4x, $grid8x, $color:$textGrey);
  @include render-hack(width, transform, opacity, padding, keyframes);

  @include keyframes(pos, 0.25s){
    0%   { @include opacity(0); @include transform(translate(-50%, -50%) scale(0.9)); }
    100% { @include opacity(1); @include transform(translate(-50%, -50%) scale(1.0)); }
  }

  @media #{$mobile-small} {
    min-width: 280px !important;
    @include render-hack(width);
  }

  > .md-close {
    top: 0;
    right: 0;
    position: fixed;
    cursor: pointer;
    color: $textLightGrey;
    padding: $grid4x $grid4x 0 $grid4x;
    @include font-size($grid8x + $grid);
    @include transition(color .25s ease);
    @include render-hack(width, top, right, transition);

    &:hover {
      color: $textDark;
    }
  }

  form {
    width: 100%;
    color: $textDark;

    .modal-input-title {
      border: 0;
      float: left;
      width: 100%;
      height: $grid10x;
      font-weight: 900;
      margin-top: $grid4x;
      @include font-size($grid8x);
      @include render-hack(width);
    }

    .modal-input-text {
      border: 0;
      outline: 0;
      width: 100%;
      resize: none;
      height: $grid20x;
      margin: 0 0 $grid;
      vertical-align: top;
      @include font-size($grid6x);
      @include line-height($grid6x);
      @include render-hack(width, margin);
    }

    .modal-input-date {
      cursor: pointer;
      height: $grid8x;
      color: $textDark;
      text-align: left;
      font-weight: 900;
      margin: 0 0 $grid4x;
      @include font-size($grid6x);
      @include line-height($grid8x);
    }

    .modal-submit-btn {
      float: right;
      @extend %global-btns;
      @include line-height($grid6x);
    }
  }

  .sub-set-time {
    position: absolute;
    @include set-center();
    background-color: black;
    @include render-hack(opacity);
    @include border-radius($grid);

    @include keyframes(posi, 0.25s){
      0%   { @include opacity(0); }
      100% { @include opacity(1); }
    }
  }
}

</style>
