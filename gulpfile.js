"use strict";
var gulp = require('gulp'),
    watch = require('gulp-watch'),
    inject = require('gulp-inject'),
    postcss = require('gulp-postcss'),
    imagemin = require('gulp-imagemin'),
    minifyjs = require('gulp-js-minify'),
    cleanCSS = require('gulp-clean-css'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer');


/* ==============================
  css autoprefixer & minify -> src to dist
============================== */
gulp.task('prefix-css', function () {
  return watch('./src/assets/css/src/*.css', { ignoreInitial: false })
      .pipe(autoprefixer({
          browsers: ['cover 99.5%'],
          cascade: false
      }))
      .pipe(cleanCSS())
      .pipe(gulp.dest('./src/assets/css/dist'));
});


/* ==============================
  minify js
============================== */
gulp.task('jsmin', function () {
  return watch('./src/assets/js/src/*.js', function () {
      gulp.src('./src/assets/js/src/*.js')
          .pipe(minifyjs())
          .pipe(gulp.dest('./src/assets/js/dist'));
  });
});


/* ==============================
  image resizer
============================== */
gulp.task('img-resize', () =>
	gulp.src('./src/assets/images/src/*')
		.pipe(imagemin())
		.pipe(gulp.dest('./src/assets/images/dist'))
);


/* ==============================
  inject css/js
============================== */
gulp.task('inject', function () {
  var target = gulp.src('./index.html');
  var sources = gulp.src(['./src/assets/js/dist/*.js', './src/assets/css/dist/*.css'], {read: false});

  return target.pipe(inject(sources))
    .pipe(gulp.dest('./'));
});


/* ==============================
  gulp watch
============================== */
gulp.task('watch', ['prefix-css',
                    'jsmin',
                    'inject',
                    'img-resize',])
