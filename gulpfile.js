
var gulp = require('gulp'),
 uglify = require('gulp-uglify'),
 pump = require('pump'),
 csscomb = require('gulp-csscomb');
 
gulp.task('compress', function (cb) {
  pump([
        gulp.src('js/*.js'),
        uglify(),
        gulp.dest('min-js')
    ],
    cb
  );
});


 
gulp.task('styles', function() {
  return gulp.src('src/style/style.css')
    .pipe(csscomb())
    .pipe(gulp.dest('./min-js'));
});