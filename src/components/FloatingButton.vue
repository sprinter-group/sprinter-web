<template lang="pug">
  button#floating-button-body(@click='FABready')
    span.plus +
</template>

<script>
import FABmodal from './FABmodal.vue'

// TODO by Hyouk
// FABtoggle 이 true 일 경우 모달창 display: block;
// 모달창이 열려있는 동안 FABtoggle 은 true 유지
// 모달창이 닫힐때는 FABtoggle 에서 false 를 반환
export default {
  data() {
    return{

    }
  },
  methods: {
    FABready: function(){
      this.FABtoggle = true
      console.log(this.FABtoggle)
      return this.FABtoggle
    }
  }
}
</script>

<style lang="scss">
@import "../assets/css/style.scss";

@mixin border-radius($val){
  -webkit-border-radius: $val;
  -khtml-border-radius: $val;
  -moz-border-radius: $val;
  -ms-border-radius: $val;
  -o-border-radius: $val;
  border-radius: $val;
}

#floating-button-body {
  border: none;
  position: fixed;
  right: $grid6x;
  width: $grid * 14;
  bottom: $grid6x;
  height: $grid * 14;
  background-color: $brand;
  @include border-radius($grid16x);
  @include transition(all .25s ease);
  .plus {
    color: white;
    vertical-align: middle;
    @include font-size($grid12x);
  }
  &:hover {
    box-shadow: 0px $grid2x $grid2x $textLightGrey;
    background-color: $brand-hover;
  }
}
</style>
