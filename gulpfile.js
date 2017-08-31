var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('sass', function() {
    gulp.src('assets/scss/styles.scss')
        .pipe(sass({ includePaths: ['assets/scss'] }))
        .pipe(gulp.dest('assets/css'));
});

gulp.task('browser-sync', function() {
    browserSync.init(["assets/css/*.css", "assets/js/*.js"], {
        server: {
            baseDir: "./"
        }
    });
});

/* Reload task */
gulp.task('bs-reload', function() {
    browserSync.reload();
});

gulp.task('default', ['sass', 'browser-sync'], function() {
    gulp.watch("assets/scss/*.scss", ['sass']);
    /* Watch.html files, run the bs - reload task on change.*/
    gulp.watch(['*.html'], ['bs-reload']);
});