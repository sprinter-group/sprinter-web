<template lang="pug">
  div#modal-body(v-if='FABtoggle')
    input
    button(type='submit')
</template>

<script>
import FloatingButton from './FloatingButton.vue'

export default {
  data(){
    return{
      FABtoggle: false
    }
  }
}
</script>

<style lang="scss">
@import "../assets/css/style.scss";

#modal-body {
  background-color: black;
  color: white;
  position: fixed;
  display: block;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
</style>
