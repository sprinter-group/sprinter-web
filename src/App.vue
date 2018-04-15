<template>
  <div id="app">
    <Calendar :first-day="1" :all-events="events"></Calendar>
  </div>

</template>

<script>
 import Calendar from './components/Calendar.vue'

export default {
  name: 'app',
  data() {
    return {
      events: []  //i didn't make them.
    }
  },
  components: {
    'Calendar': Calendar
  },
  mounted() {

  }
}
</script>

<style lang="scss">
@import "../src/style.scss";
</style>
