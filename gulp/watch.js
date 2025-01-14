// -------------------------------------------------------------------
// :: WATCH
// -------------------------------------------------------------------

var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('watch', function () {
    browserSync.init({
        notify: false,
        server: {
            baseDir: ['.tmp', 'src'],
        },
        port: 9000
    });
    gulp.watch('src/icons/*.*', gulp.series('icon-sprite', 'sass', 'render-templates'));
    gulp.watch('src/styles/**/*.scss', gulp.series('sass'));
    gulp.watch('src/**/*.njk', gulp.series('render-templates'));
    gulp.watch([
        '.tmp/**/*.css',
        'src/scripts/**/*.js',
        '.tmp/**/*.html'
    ]).on('change', browserSync.reload);
});
