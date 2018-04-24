<template lang="pug">
  FAB(v-tooltip.left='{content: title, delay: { show: 500, hide: 100 }}')
</template>

<script>
var FAB = {
  template: '<button id="floating-button-body"><span class="plus">+</span></button>'
}

export default {
  data() {
    return{
      events: [],
      title: 'New event'
    }
  },
  methods: {

  },
  components: {
    'FAB': FAB,
  }
}
</script>

<style lang="scss">
@import "../../assets/css/style.scss";

#floating-button-body {
  border: 0;
  z-index: 2;
  right: $grid6x;
  bottom: $grid6x;
  position: fixed;
  width: $grid14x;
  height: $grid14x;
  background-color: $brand;
  @include border-radius($grid16x);
  @include transition(all .25s ease);
  box-shadow: 0 $grid $grid $lightGrey;
  @include render-hack(transition, background-color, box-shadow, width, height);

  .plus {
    color: white;
    vertical-align: middle;
    @include font-size($grid12x);
  }

  &:hover {
    background-color: $brand-hover;
    box-shadow: 0 $grid2x $grid2x $before;
  }

}
</style>
