<template lang="pug">
  //- div#app(@keydown='watchKeydown')
  div#app
    FloatingButton(@click.native='FABready')
    div.modal-dark-bg(v-if='FABvalue' @click='FABfalse')
    div.modal-body(v-if='FABvalue')
      i.material-icons.md-close(@click='FABfalse', title='Exit') close
      form
        input.modal-input-title(v-model='TitleData' placeholder='New event')
        textarea.modal-input-text(v-model='DetailsData' placeholder='Details about your task...')
        button.modal-submit-btn(@click='ClearData' type='submit', :title='Submit') {{Submit}}
        div.modal-set-time(:title='SetTime' @click='STMreverse') {{SetTime}}
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
      events: [],
      Exit: 'Exit',
      Submit: 'Submit',
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
    }
  },
  components: {
    'moment': moment,
    'Calendar': Calendar,
    'FloatingButton': FloatingButton,
    'sub-set-time': SubSetTime
  },
  destroyed: {

  }
}
</script>

<style lang="scss">
@import "../../assets/css/style.scss";

.modal-dark-bg{
  z-index: 11;
  width: 200vw;
  height: 200vh;
  position: fixed;
  @include set-center();
  background-color: $black38;
  @include keyframes(opct, 0.25s){
    0%   { @include opacity(0) }
    100% { @include opacity(1) }
  }
}
.modal-body {
  z-index: 12;
  width: $grid16x;
  position: fixed;
  padding: $grid4x;
  color: $textDark;
  background-color: white;
  max-width: 560px;
  min-width: 296px;
  width: 64%;
  @include set-center();
  @include border-radius($grid);
  @include box-shadow($grid4x, $grid8x, $color:$textGrey);
  @include keyframes(pos, 0.25s){
    0%   { @include opacity(0); top: 47.5%; }
    100% { @include opacity(1); top: 50.0%; }
  }
  @media #{$mobile-small} {
    min-width: 280px !important;
  }
  > .md-close {
    top: 0;
    right: 0;
    position: fixed;
    cursor: pointer;
    padding: $grid4x;
    color: $textLightGrey;
    @include font-size($grid8x + $grid);
    @include transition(color .25s ease);
    &:hover {
      color: $textDark;
    }
  }
  form {
    width: 100%;
    color: $textDark;
    .modal-input-title {
      float: left;
      width: 100%;
      border: none;
      height: $grid10x;
      font-weight: 900;
      margin-top: $grid4x;
      @include font-size(($grid8x));
    }
    .modal-input-text {
      width: 100%;
      border: none;
      resize: none;
      outline: none;
      height: $grid20x;
      margin: $grid2x 0 $grid4x;
      vertical-align: top;
      @include font-size($grid6x);
      @include line-height($grid6x);
      @media #{$mobile-small}{
        margin: $grid 0 $grid4x;
      }
    }
    .modal-submit-btn {
      float: right;
      @extend %global-btns;
    }
    .modal-set-time {
      float: right;
      margin-right: $grid2x;
      @extend %global-btns-white;
    }
  }
  .sub-set-time {
    position: absolute;
    background-color: black;
    @include set-center();
    @include border-radius($grid);
    @include keyframes(posi, 0.25s){
      0%   { @include opacity(0); }
      100% { @include opacity(1); }
    }
  }
}

</style>
