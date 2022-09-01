// -------------------------------------------------------------------
// :: SASS
// -------------------------------------------------------------------
// - https://www.npmjs.org/package/gulp-sass
// - https://www.npmjs.com/package/gulp-sourcemaps
// - https://www.npmjs.com/package/gulp-postcss
// - https://www.npmjs.com/package/autoprefixer
// - https://www.npmjs.com/package/cssnano
// - https://www.npmjs.com/package/gulp-rename
// - https://www.npmjs.com/package/gulp-css-url-adjuster
// - https://www.npmjs.com/package/gulp-header-license
// - https://www.npmjs.com/package/gulp-stylelint

var gulp = require('gulp'),
    fs = require('fs');

var sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    cssnano = require("cssnano"),
    rename = require('gulp-rename'),
    cssUrlAdjuster = require('gulp-css-url-adjuster'),
    license = require('gulp-header-license'),
    stylelint = require('gulp-stylelint'),
    browserSync = require('browser-sync');

sass.compiler = require('sass');

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
    sourceComments: false
}

var sourcemapOptions = {
    includeContent: false
};

gulp.task('sass', function () {
    return gulp.src('src/styles/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(postcss(autoPrefixer))
        .pipe(gulp.dest('.tmp/styles'))
        .pipe(browserSync.stream());
});


// -------------------------------------------------------------------
// :: SASS DIST
// -------------------------------------------------------------------

const { version, description } = JSON.parse(fs.readFileSync(__dirname + '/../package.json'));

const compileAndCopyStyles = (dest, cssUrl) => {
    return gulp.src(['src/styles/**/*.scss', '!src/styles/**/styleguide.scss'])
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(postcss(autoPrefixer))
        .pipe(license('/*\n' + fs.readFileSync('LICENSE.md', 'utf8') + '*/'))
        .pipe(cssUrlAdjuster({
            replace: ['../../fonts', 'assets/fonts'],
            prepend: 'https:///cdn.antwerpen.be/' + cssUrl + '/'
        }))
        .pipe(gulp.dest(dest))
        .pipe(sourcemaps.init())
        .pipe(gulp.dest(`./${dest}/`))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(postcss(cssNano))
        .pipe(license('/*\n' + fs.readFileSync('LICENSE.md', 'utf8') + '*/'))
        .pipe(sourcemaps.write("./", sourcemapOptions))
        .pipe(gulp.dest(dest));
}

gulp.task('sass:dist', () => compileAndCopyStyles('dist', `${description}/${version}`));
gulp.task('sass:aws:version', () => compileAndCopyStyles(`aws/${version}`, `${description}/${version}`));
gulp.task('sass:aws:latest', () => compileAndCopyStyles('aws/latest', `${description}/latest`));

gulp.task('stylelint', function () {
    return gulp
        .src('src/styles/**/*.scss')
        .pipe(stylelint({
            failAfterError: false,
            reporters: [
                { formatter: 'verbose', console: true },
            ]
        }));
});
