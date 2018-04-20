<template lang="pug">
  div#app
    FloatingButton(@click.native='FABready')
    div.modal-dark-bg(v-if='FABvalue' @click='FABfalse')
    div.modal-body(v-if='FABvalue')
      i.material-icons.md-close(@click='FABfalse') close
      form
        input.modal-input-title(placeholder='New event')
        input.modal-input-text(:type='textfield')
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
  width: 64vw;
  position: fixed;
  padding: $grid4x;
  color: $textDark;
  background-color: white;
  @include box-sizing(border-box);
  @include border-radius($grid2x);
  @include keyframes(pos, 0.35s){
    0%   { @include opacity(0); top: 48%; }
    100% { @include opacity(1); top: 50%; }
  }
  max-width: 480px !important;
  min-width: 320px !important;
  height: 320px;
  min-height: 240px;
  @include set-center();
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
  form{
    .modal-input-title {
      float: left;
      width: 100%;
      border: none;
      color: $textDark;
      height: $grid10x;
      margin-top: $grid8x;
      @include font-size(($grid8x));
    }
    .modal-input-text {
      @include font-size(($grid4x));
    }
  }
}

</style>
