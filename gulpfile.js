var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass');
    concat = require('gulp-concat');


// Files
var dist = 'app/dist/';

gulp.task('sass', function() {
    return gulp.src(['app/scss/**/*.scss', 'app/scss/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('main.css'))
        .pipe(gulp.dest(dist));
});


gulp.task('watch', function(){
    gulp.watch(['app/scss/**/*','app/scss/*'], ['sass']);
});

gulp.task('default', ['sass', 'watch'], function(){
    console.log('Building and watching.')
});
