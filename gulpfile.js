var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var mqpacker = require("css-mqpacker");

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
    .pipe(gulp.dest('build/css'));
});