<template lang="pug">
  div#modal-bground(v-if='FABvalue')
    div.modal-dark-bg(@click='FABfalse')
    div.modal-body
      i.fa.fa-times(@click='FABfalse', style='padding:8px')
      br
      span.modal-title Hello
      br
      input(placeholder='Your todo')
</template>

<script>
// TODO by Hyouk
// 모달창 본체를 클릭했을때도 모달창이 닫히는 문제 해결
import FloatingButton from './FloatingButton.vue'

export default {
  data(){
    return{
      FABvalue: true,
      events: []
    }
  },
  components: {
    'FloatingButton':FloatingButton
  },
  methods: {
    FABfalse: function(){
      this.FABvalue = !this.FABvalue
      console.log(this.FABvalue + ' !--modal off--!')
      FloatingButton.FABvalue = !FloatingButton.FABvalue
    }
  }
}
</script>

<style lang="scss">
@import "../assets/css/style.scss";

.modal-dark-bg{
  z-index: 3;
  width: 200vw;
  height: 200vh;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  background-color: $black38;
  @include keyframes(opct, 0.35s){
    0%   { opacity: 0 }
    100% { opacity: 1 }
  }
}
.modal-body {
  z-index: 4;
  @include border-radius($grid2x);
  @include keyframes(pos, 0.35s){
    0%   { opacity: 0; top: 48% }
    100% { opacity: 1; top: 50% }
  }
  background-color: white;
  color: $textDark;
  position: fixed;
  width: 64vw;
  max-width: 480px !important;
  min-width: 320px !important;
  height: 320px;
  // height: auto;
  min-height: 240px;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
</style>
