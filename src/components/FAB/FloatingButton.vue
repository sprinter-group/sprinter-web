<template lang="pug">
  FAB
</template>

<script>
var FAB = {
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
    'FAB': FAB
  }
}
</script>

<style lang="scss">
@import "../../assets/css/style.scss";

#floating-button-body {
  z-index: 2;
  border: none;
  right: $grid6x;
  bottom: $grid6x;
  position: fixed;
  width: $grid14x;
  height: $grid14x;
  background-color: $brand;
  @include border-radius($grid16x);
  @include transition(all .25s ease);
  .plus {
    color: white;
    vertical-align: middle;
    @include font-size($grid12x);
  }
  box-shadow: 0px $grid $grid $lightGrey;
  &:hover {
    background-color: $brand-hover;
    box-shadow: 0px $grid2x $grid2x $before;
  }
  @include render-hack(transition, background-color, box-shadow, width, height);
}
</style>
