// -------------------------------------------------------------------
// :: BUILD
// -------------------------------------------------------------------
// - https://www.npmjs.com/package/gulp-replace

var gulp = require('gulp');
var fs = require('fs');

var replace = require('gulp-replace');

gulp.task('replace', function() {
    return gulp.src(['.tmp/**/main.css', '.tmp/**/styleguide.css'])
        .pipe(replace('../../', '../'))
        .pipe(gulp.dest('docs'));
});

gulp.task('readme', function() {
    var nodePackageFile = JSON.parse(fs.readFileSync('./package.json'));
    var version = nodePackageFile.version;

    return gulp.src(['README.md'])
        .pipe(replace(/core_branding_scss\/[0-9]\.[0-9]\.[0-9]\/main.min.css/g, 'core_branding_scss/' + version + '/main.min.css'))
        .pipe(gulp.dest('./'));
});
