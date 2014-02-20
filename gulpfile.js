var gulp = require('gulp');
var gutil = require('gulp-util');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var stylus = require('gulp-stylus');
var jade = require('gulp-jade');

// Lint Task
gulp.task('hint', function() {
  return gulp.src('source-files/scripts/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// Compile Jade templates
gulp.task('jade', function() {
  return gulp.src('source-files/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('compiled-site/pretty'));
});

// Compile Stylus to plain CSS
gulp.task('stylus', function() {
  return gulp.src('source-files/styles/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('compiled-site/pretty/styles'));
});

// Watch files for changes
gulp.task('watch', function() {
  gulp.watch('source-files/scripts/*.js', ['hint']);
  gulp.watch('source-files/*.jade', ['jade']);
});

gulp.task('default', function(){
  gulp.start('hint', 'jade', 'stylus', 'watch');
});
