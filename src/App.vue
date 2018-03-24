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
@import url(https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css);

// mixin default font
@mixin font-stack-html() {
    font-family: 'Spoqa Han Sans', 'Source Sans Pro', 'Apple SD Gothic Neo', 'Nanum Barun Gothic', 'Nanum Gothic', '돋움', 'Dotum', 'Verdana', 'Arial', 'sans-serif';
    -webkit-font-family: 'Spoqa Han Sans', 'Source Sans Pro', 'Apple SD Gothic Neo', 'Nanum Barun Gothic', 'Nanum Gothic', '돋움', 'Dotum', 'Verdana', 'Arial', 'sans-serif';
}

// text rendering
@mixin font-settings() {
    direction: ltr;
    font-feature-settings: 'liga';
    -moz-font-feature-settings: 'liga';
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -webkit-text-decoration-skip: ink;
}

// color stack
$black87:     rgba(0,0,0,0.87);
$black78:     rgba(0,0,0,0.78);
$black54:     rgba(0,0,0,0.54);
$black38:     rgba(0,0,0,0.38);
$black16:     rgba(0,0,0,0.16);
$lightgrey:   #f4f4f4;
$brand:       #327DE1;
$brand-hover: #327DE1;

// media query breakpoints
$tablet:       "only screen and (max-width : 768px)";
$landsc:       "only screen and (max-width : 600px)";
$middle:       "only screen and (max-width : 520px)";
$mobile:       "only screen and (max-width : 420px)";
$mobile-small: "only screen and (max-width : 360px)";

// default font-size, line-height
@function calculateRem($size) {
    $remSize: $size / 16px;
    @return $remSize * 1rem;
}
@mixin font-size($size) {
    font-size: $size;
    font-size: calculateRem($size);
}
@mixin line-height($size) {
    line-height: $size * 1.6;
    line-height: calculateRem($size) * 1.6;
}

// opacity
@mixin opacity($opacity) {
    opacity: $opacity;
    $opacity-ie: $opacity * 100;
    filter: alpha(opacity=$opacity-ie);
}

#app {
  @include font-size(16px);
  @include line-height(16px);
  @include font-stack-html();
  @include font-settings();
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

// fonts
body {
    @include font-size(16px);
    @include line-height(16px);
    @include font-stack-html();
    @include font-settings();
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
