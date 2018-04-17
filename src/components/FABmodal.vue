<template lang="pug">
  div#modal-bground(v-if='FABvalue')
    div.modal-body
      span.modal-title(@click='FABfalse') Hello
      br
      input(placeholder='Your todo')
</template>

<script>
// TODO by Hyouk
// FAB 클릭시 true 값 두번 반환하는 오류 해결
export default {
  data(){
    return{
      FABvalue: true,
      events: []
    }
  },
  methods: {
    FABfalse: function(){
      this.FABvalue = !this.FABvalue
      console.log(this.FABvalue)
      return this.FABvalue
    }
  }
}
</script>

<style lang="scss">
@import "../assets/css/style.scss";

#modal-bground{
  z-index: 3;
  width: 200vw;
  height: 200vh;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  background-color: $black38;
  .modal-body {
    @include border-radius($grid2x);
    background-color: white;
    color: black;
    position: relative;
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
}
</style>
