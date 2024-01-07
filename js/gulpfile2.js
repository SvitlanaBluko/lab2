const { src, dest, series, parallel } = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");

function buildDev() {
  return src('style2.scss')
    .pipe(sourcemaps.init()) 
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(dest('dev'));
}

function buildProd() {
  return src('style2.scss')
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(dest('prod'));  
}

exports.default = series(parallel(buildDev, buildProd));