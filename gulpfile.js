var gulp   = require('gulp'),
    sass   = require('gulp-sass'),
    uglify = require('gulp-uglify');

gulp.task('sass', function () {
  return gulp.src('app/assets/scss/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/assets/css'))
});

gulp.task('uglify', function () {
  gulp.src('app/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('app/scripts/min'))
});
