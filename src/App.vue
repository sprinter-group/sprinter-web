<template>
  <div id="app">
    <Calendar></Calendar>
  </div>

</template>

<script>
import Calendar from './components/Calendar.vue'

export default {
  name: 'app',
  components: {
    'Calendar': Calendar
  }
}
</script>

<style lang="scss">
@import "../src/style.scss";
</style>
