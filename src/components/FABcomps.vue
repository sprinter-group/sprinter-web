<template lang="pug">
  div#app
    FloatingButton(@click.native='FABready')
    FABmodal(v-if='FABvalue' @click.native='FABready')
</template>

<script>
import FloatingButton from './FloatingButton.vue'
import FABmodal from './FABmodal.vue'

export default {
  data() {
    return{
      FABvalue: false,
      events: []
    }
  },
  methods: {
    FABready: function(){
      this.FABvalue = !this.FABvalue
      return this.FABvalue
    }
  },
  components: {
    'FloatingButton': FloatingButton,
    'FABmodal': FABmodal
  }
}
</script>

<style lang="scss">
@import "../assets/css/style.scss";

</style>
