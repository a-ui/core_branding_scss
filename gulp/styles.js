// -------------------------------------------------------------------
// :: SASS
// -------------------------------------------------------------------

var gulp = require('gulp'),
    fs = require('fs');

var sass = require('gulp-sass')(require('sass')),
    sourcemaps = require('gulp-sourcemaps'),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    cssnano = require("cssnano"),
    rename = require('gulp-rename'),
    replace = require('gulp-replace'),
    stylelint = require('gulp-stylelint'),
    browserSync = require('browser-sync');

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
    silenceDeprecations: ['legacy-js-api'],
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

gulp.task('sass:dist', function () {

    return gulp.src(['src/styles/**/*.scss', '!src/styles/**/styleguide.scss'])
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(postcss(autoPrefixer))
        .pipe(gulp.dest('dist'))
        .pipe(sourcemaps.init())
        .pipe(gulp.dest('./dist/'))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(postcss(cssNano))
        .pipe(sourcemaps.write("./", sourcemapOptions))
        .pipe(gulp.dest('dist'));
});

gulp.task('stylelint', function () {
    return gulp
        .src('src/styles/**/*.scss')
        .pipe(stylelint({
            failAfterError: false,
            reporters: [
                { formatter: 'verbose', console: false },
            ]
        }));
});

gulp.task('add-license', () => {
    const license = '/*\n' + fs.readFileSync('LICENSE.md', 'utf8') + '*/\n';
    return gulp.src('dist/**/*.css')
      .pipe(replace(/^/, license))
      .pipe(gulp.dest('dist'));
});
