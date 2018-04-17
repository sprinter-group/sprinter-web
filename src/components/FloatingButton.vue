<template lang="pug">
  FBA
</template>

<script>
var FBA = {
  template: '<button id="floating-button-body"><span class="plus">+</span></button>'
}

export default {
  data() {
    return{
      events: []
    }
  },
  methods: {

  },
  components: {
    'FBA': FBA
  }
}
</script>

<style lang="scss">
@import "../assets/css/style.scss";

#floating-button-body {
  z-index: 2;
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
