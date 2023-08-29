// -------------------------------------------------------------------
// :: SASS
// -------------------------------------------------------------------
// - https://www.npmjs.org/package/gulp-sass
// - https://www.npmjs.com/package/gulp-sourcemaps
// - https://www.npmjs.com/package/gulp-postcss
// - https://www.npmjs.com/package/autoprefixer
// - https://www.npmjs.com/package/cssnano
// - https://www.npmjs.com/package/gulp-rename
// - https://www.npmjs.com/package/gulp-header-license

var gulp = require('gulp'),
    fs = require('fs');

var sass = require('gulp-sass')(require('sass')),
    sourcemaps = require('gulp-sourcemaps'),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    cssnano = require("cssnano"),
    rename = require('gulp-rename'),
    license = require('gulp-header-license');

var cssNano = [
    cssnano({
        discardComments: {
            removeAllButFirst: true
        },
        discardUnused: false
    })
];

var autoPrefixer = [
    autoprefixer()
];

var sassOptions = {
    outputStyle: 'expanded',
    sourceComments: false,
}

var sourcemapOptions = {
    includeContent: false
};


// -------------------------------------------------------------------
// :: SASS DIST
// -------------------------------------------------------------------

gulp.task('sass:dist', function () {

    return gulp.src(['src/styles/**/*.scss', '!src/styles/**/styleguide.scss'])
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(postcss(autoPrefixer))
        .pipe(license('/*\n' + fs.readFileSync('LICENSE.md', 'utf8') + '*/'))
        .pipe(gulp.dest('dist'))
        .pipe(sourcemaps.init())
        .pipe(gulp.dest('./dist/'))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(postcss(cssNano))
        .pipe(license('/*\n' + fs.readFileSync('LICENSE.md', 'utf8') + '*/'))
        .pipe(sourcemaps.write("./", sourcemapOptions))
        .pipe(gulp.dest('dist'));
});
