<template lang="pug">
  button#floating-button-body(@click='FABready')
    span.plus +
    FABmodal.modal-before
</template>

<script>
import FABmodal from './FABmodal.vue'

export default {
  data() {
    return{

    }
  },
  components: {
    'FABmodal': FABmodal
  },
  methods: {
    FABready: function(){
      console.log('Haywe')
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

.modal-before {
  visibility: hidden;
}
</style>
