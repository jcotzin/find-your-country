/*
Install:
$ npm install babel babel-register babel-plugin-transform-es2015-arrow-functions babel-plugin-transform-es2015-block-scoped-functions babel-plugin-transform-es2015-block-scoping babel-plugin-transform-es2015-classes babel-plugin-transform-es2015-destructuring babel-plugin-transform-es2015-template-literals babel-plugin-transform-es2015-parameters babel-plugin-transform-es2015-shorthand-properties babel-plugin-transform-es2015-spread babel-plugin-transform-es2015-modules-commonjs babel-preset-es2015
$ npm install gulp gulp-sass gulp-babel gulp-notify gulp-minify gulp-clean-css
*/

var gulp = require('gulp');
var sass = require('gulp-sass');

const babel = require('gulp-babel');
const notify = require("gulp-notify");

var babelify = require('babelify');
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var minify = require('gulp-minify');
var cleanCSS = require('gulp-clean-css');

const sassPaths = {
  src: './style.scss',
  dest: 'style'
};

gulp.task('watch', () => {
    gulp.watch('./style.scss',['sass']);
    // gulp.watch('etc/designs/fca-brands/clientlibs/chrysler/*.css',['minify-css']);
    
});


gulp.task('sass', () => {
    //return gulp.src(sassPaths.src)
    return gulp
    //Find all `.scss` files from the `stylesheets/` folder
    .src(sassPaths.src)
    //Run Sass on those files
    .pipe(sass({
      includePaths: ['scss'],
      outputStyle: 'compressed',
      errLogToConsole: true
    } ))
     //Write the resulting CSS in the output folder
    .pipe(gulp.dest(sassPaths.dest))
    .pipe(notify("SASS Conversion Completed!"));
   

});
