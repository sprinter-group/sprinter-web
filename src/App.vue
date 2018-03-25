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
@import "../src/normalize.css";
@import url(https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css);
@import url(https://fonts.googleapis.com/icon?family=Material+Icons);

*{box-sizing:border-box}

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
$textDark:      #373746;
$textGrey:      #797980;
$textLightGrey: #9898A1;
$before:        #babac0;
$lightGrey:     #D0D0D7;
$whiteGrey:     #f4f4f4;
$listBase:      #F8F8F9;
$brand:         #327DE1;
$brand-hover:   #2968BC;
$white:         #ffffff;
$disabled:      rgba(55, 55, 70, 16);

// media query breakpoints
$tablet:       "only screen and (max-width : 768px)";
$landsc:       "only screen and (max-width : 600px)";
$middle:       "only screen and (max-width : 520px)";
$mobile:       "only screen and (max-width : 420px)";
$mobile-small: "only screen and (max-width : 360px)";

// 4px grid system
$defaultGrid: 4px;
$grid2x:     ($defaultGrid * 2 );
$grid4x:     ($defaultGrid * 4 );
$grid8x:     ($defaultGrid * 8 );
$grid16x:    ($defaultGrid * 16);

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

/* ===============
    pseudo class
=============== */

::selection {
    background-color: $brand;
    color: $white;
}
img::selection {
    visibility:hidden;
    background:transparent;
}
input[type=text]::-ms-clear {
    display: none;
}

/* ===============
    stylesheet
=============== */

#app {
  @include font-size(16px);
  @include line-height(16px);
  @include font-stack-html();
  @include font-settings();
  color: $textDark;
  text-align: center;
  margin-top: 60px;
}

// default font settings
body {
    outline: none;
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
  color: $brand;
  &:hover {
    color: $brand-hover;
  }
}
</style>
