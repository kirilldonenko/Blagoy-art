var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var mqpacker = require("css-mqpacker");
var browserSync = require("browser-sync");

gulp.task('sass', function() {
    return gulp.src('scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
        autoprefixer({browsers: [
            "last 2 versions"
        ]}),
        mqpacker({
            sort: true
        })
    ]))
    .pipe(gulp.dest('css'));
});
gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: 'css'
    },
    notify: false
  });  
});

gulp.task('watch', ['browser-sync', 'sass'], function() {
  gulp.watch('scss/**/*.scss', ['sass']);
  gulp.watch('*.html', browserSync.reload);
  gulp.watch('js/**/*.js', browserSync.reload);
});
