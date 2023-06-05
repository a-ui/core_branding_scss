// -------------------------------------------------------------------
// :: BUILD
// -------------------------------------------------------------------
// - https://www.npmjs.com/package/gulp-replace

var gulp = require('gulp');
var fs = require('fs');

var replace = require('gulp-replace');

gulp.task('cdn', function (callback) {
    var nodePackageFile = JSON.parse(fs.readFileSync('./package.json'));
    var version = nodePackageFile.version;

    fs.rename('dist/aws', 'dist/' + version, function (err) {
        if (err) {
            throw err;
        } else {
            console.log('\n----++++ https://cdn.antwerpen.be/core_branding_scss/' + version + '/main.min.css ++++----\n');
            callback();
        }
    });
});

gulp.task('replace', function() {
    return gulp.src(['.tmp/**/main.css', '.tmp/**/styleguide.css'])
        .pipe(replace('../../', '../'))
        .pipe(gulp.dest('docs'));
});

gulp.task('replace:dist', function() {
    // Get package version to generate correct font url
    var nodePackageFile = JSON.parse(fs.readFileSync(__dirname + '/../package.json'));
    var nodePackageVersion = nodePackageFile.version;
    var nodePackageDescription = nodePackageFile.description;
    return gulp.src(['dist/**/*.css'])
        .pipe(replace('../../', 'https://cdn.antwerpen.be/' + nodePackageDescription + '/' + nodePackageVersion + '/assets/'))
        .pipe(gulp.dest('dist'));
});

gulp.task('readme', function() {
    var nodePackageFile = JSON.parse(fs.readFileSync('./package.json'));
    var version = nodePackageFile.version;

    return gulp.src(['README.md'])
        .pipe(replace(/core_branding_scss\/[0-9]\.[0-9]\.[0-9]\/main.min.css/g, 'core_branding_scss/' + version + '/main.min.css'))
        .pipe(gulp.dest('./'));
});
