var fs = require('fs');
var packageJSON = require('./package.json');
var gulp = require('gulp');
var stylus = require('gulp-stylus');
var jade = require('gulp-jade');
var jshint = require('gulp-jshint');
var gulpif = require('gulp-if');
var rename = require("gulp-rename");

// stylus
gulp.task('stylus', function() {
  return gulp.src('src/stylus/*.styl')
    .pipe(stylus())
    .pipe(rename(function(path) {
      path.basename += '-' + packageJSON.version;
    }))
    .pipe(gulp.dest('./examples/css/'));
});

// jade
gulp.task('jade', function() {
  return gulp.src(['src/jade/*.jade', 'src/jade/**/*.jade'])
    .pipe(jade({
      locals: {
        version: packageJSON.version
      }
    }))
    .pipe(gulp.dest('./'));
});

// jshint
gulp.task('jshint', function() {
  return gulp.src('*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// watch
gulp.task('watch', function() {
  gulp.watch('*.js', ['jshint']);
  gulp.watch('src/jade/**', ['jade']);
  gulp.watch('src/stylus/**', ['stylus']);
});
