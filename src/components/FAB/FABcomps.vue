<template lang="pug">
  div#app
    FloatingButton(@click.native='FABready')
    div.modal-dark-bg(v-if='FABvalue' @click='FABfalse')
    div.modal-body(v-if='FABvalue')
      i.material-icons.md-close(@click='FABfalse') close
      form
        input.modal-input-title(placeholder='New event')
        textarea.modal-input-text(placeholder='Details about your task...')
        button.modal-save-btn(type='submit') Save
        button.modal-set-time Set time
</template>

<script>
import FloatingButton from './FloatingButton.vue'

// TODO by Hyouk
// Escape 키로 모달창 닫히도록
// Date Picker
// 모달창에 selected 날짜 가져오기 (selected 가 없으면 today)
// 가져온 날짜 표시

export default {
  data() {
    return{
      FABvalue: false,
      events: []
    }
  },
  methods: {
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
    'FloatingButton': FloatingButton
  },
}
</script>

<style lang="scss">
@import "../../assets/css/style.scss";

%modal-btns {
  float: right;
  border: none;
  color: white;
  height: $grid8x;
  font-weight: 900;
  width: ($grid * 24);
  background-color: $brand;
  @include font-size(($grid * 5));
  @include border-radius($grid);
  @include transition(background-color .25s ease);
  &:hover {
    background-color: $brand-hover;
  }
}

.modal-dark-bg{
  z-index: 3;
  width: 200vw;
  height: 200vh;
  position: fixed;
  @include set-center();
  background-color: $black38;
  @include keyframes(opct, 0.35s){
    0%   { @include opacity(0) }
    100% { @include opacity(1) }
  }
}
.modal-body {
  z-index: 5;
  width: $grid16x;
  position: fixed;
  padding: $grid4x;
  color: $textDark;
  background-color: white;
  max-width: 480px !important;
  min-width: 320px !important;
  @include set-center();
  @include box-sizing(border-box);
  @include border-radius($grid);
  @include keyframes(pos, 0.35s){
    0%   { @include opacity(0); top: 48%; }
    100% { @include opacity(1); top: 50%; }
  }
  > .md-close {
    top: 0;
    right: 0;
    position: fixed;
    cursor: pointer;
    padding: $grid4x;
    color: $textLightGrey;
    @include font-size(36px);
    @include transition(color .25s ease);
    &:hover {
      color: $textDark;
    }
  }
  @media #{$mobile} {
    min-width: 280px !important;
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
      height: ($grid * 20);
      margin: $grid2x 0 $grid4x;
      vertical-align: top;
      @include line-height(24px);
      @include font-size(($grid6x));
    }
    .modal-save-btn {
      @extend %modal-btns;
    }
    .modal-set-time {
      color: $textGrey;
      margin-right: $grid2x;
      background-color: white;
      @extend %modal-btns;
      &:hover{
        background-color: $white-hover;
      }
      @include transition(background-color .25s ease);
    }
  }
}

</style>
