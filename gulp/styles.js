// -------------------------------------------------------------------
// :: SASS
// -------------------------------------------------------------------

var gulp = require('gulp');
var fs = require('fs');
var sass = require('gulp-sass')(require('sass'));
var sourcemaps = require('gulp-sourcemaps');
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var cssnano = require("cssnano");
var rename = require('gulp-rename');
var replace = require('gulp-replace');
var browserSync = require('browser-sync');

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

gulp.task('add-license', () => {
    const license = '/*\n' + fs.readFileSync('LICENSE.md', 'utf8') + '*/\n';
    return gulp.src('dist/**/*.css')
      .pipe(replace(/^/, license))
      .pipe(gulp.dest('dist'));
});
