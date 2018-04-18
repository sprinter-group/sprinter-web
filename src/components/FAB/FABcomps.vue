<template lang="pug">
  div#app
    FloatingButton(@click.native='FABready')
    div.modal-dark-bg(v-if='FABvalue' @click='FABfalse')
    div.modal-body(v-if='FABvalue')
      i.fa.fa-times(@click='FABfalse', style='padding:8px')
      br
      span.modal-title Hello
      br
      input(placeholder='Your todo')
</template>

<script>
import FloatingButton from './FloatingButton.vue'
// import FABmodal from './FABmodal.vue'
// import 'es6-promise/auto'

//나눠서 홀수면 show
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
    },
    FABfalse: function(){
      this.FABvalue = !this.FABvalue
      console.log('Modal ' + this.FABvalue)
    }
  },
  components: {
    'FloatingButton': FloatingButton,
    // 'FABmodal': FABmodal
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
    0%   { opacity: 0 }
    100% { opacity: 1 }
  }
  // @include transition(all, .35s, ease);
}
.modal-body {
  z-index: 5;
  @include border-radius($grid2x);
  @include keyframes(pos, 0.35s){
    0%   { opacity: 0; top: 48%; }
    100% { opacity: 1; top: 50%; }
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
  @include set-center();
  // @include transition(all, .35s, ease);
}

</style>
