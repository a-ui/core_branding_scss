// -------------------------------------------------------------------
// :: WATCH
// -------------------------------------------------------------------
// - https://www.npmjs.com/package/browser-sync

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
    gulp.watch('src/icons/*.*', gulp.series('icon-sprite', 'sass', 'render-templates', 'stylelint'));
    gulp.watch('src/styles/**/*.scss', gulp.series('sass', 'stylelint'));
    gulp.watch('src/**/*.njk', gulp.task('render-templates'));
    gulp.watch(['.tmp/**/*.css']).on('change', browserSync.reload);
    gulp.watch(['.tmp/**/*.html']).on('change', browserSync.reload);
});
