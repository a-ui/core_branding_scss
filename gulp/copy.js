// -------------------------------------------------------------------
// :: COPY
// -------------------------------------------------------------------
// - https://www.npmjs.org/package/gulp-rename
// - https://www.npmjs.com/package/merge-stream

var gulp = require('gulp');
var merge = require('merge-stream');
var fs = require('fs');

const copyStylesAndAssets = (dest) => {
    var fontsStream = gulp.src('src/fonts/**/*')
        .pipe(gulp.dest(`${dest}/fonts`));

    var iconsStream = gulp.src('src/icons/**/*')
        .pipe(gulp.dest(`${dest}/icons`));

    var stylesStream = gulp.src(['src/styles/**/*', '!src/styles/**/styleguide.scss'])
        .pipe(gulp.dest(`${dest}/styles`));

    var imagesStream = gulp.src('src/images/**/*')
        .pipe(gulp.dest(`${dest}/images`));

    return merge(fontsStream, iconsStream, stylesStream, imagesStream);
}

gulp.task('copy', () => copyStylesAndAssets('dist/assets'));

gulp.task('copy:aws:version', () => {
    const { version } = JSON.parse(fs.readFileSync(__dirname + '/../package.json'));

    return copyStylesAndAssets(`aws/${version}/assets`);
});

gulp.task('copy:aws:latest', () => copyStylesAndAssets('aws/latest/assets'));

gulp.task('copy:docs', function () {

    var tmpStream = gulp.src('.tmp/**/*.html')
        .pipe(gulp.dest('docs'));

    var imagesStream = gulp.src('src/images/**/*')
        .pipe(gulp.dest('docs/images'));

    var fontsStream = gulp.src('src/fonts/**/*')
        .pipe(gulp.dest('docs/fonts'));

    var scriptsStream = gulp.src('src/scripts/**/*')
        .pipe(gulp.dest('docs/scripts'));

    return merge(tmpStream, imagesStream, fontsStream, scriptsStream);

});
