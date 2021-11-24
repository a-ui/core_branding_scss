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

sass.compiler = require('dart-sass');

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

gulp.task('sass:dist', function () {
    // Get package version to generate correct font url
    var nodePackageFile = JSON.parse(fs.readFileSync(__dirname + '/../package.json'));
    var nodePackageVersion = nodePackageFile.version;
    var nodePackageDescription = nodePackageFile.description;

    return gulp.src(['src/styles/**/*.scss', '!src/styles/**/styleguide.scss'])
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(postcss(autoPrefixer))
        .pipe(license('/*\n' + fs.readFileSync('LICENSE.md', 'utf8') + '*/'))
        .pipe(cssUrlAdjuster({
            replace: ['../../fonts', 'assets/fonts'],
            prepend: 'https:///cdn.antwerpen.be/' + nodePackageDescription + '/' + nodePackageVersion + '/'
        }))
        .pipe(gulp.dest('dist'))
        .pipe(sourcemaps.init())
        .pipe(gulp.dest('./dist/'))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(postcss(cssNano))
        .pipe(license('/*\n' + fs.readFileSync('LICENSE.md', 'utf8') + '*/'))
        .pipe(sourcemaps.write("./", sourcemapOptions))
        .pipe(gulp.dest('dist'));
});

gulp.task('sass:aws:version', function () {
    // Get package version to generate correct font url
    var nodePackageFile = JSON.parse(fs.readFileSync(__dirname + '/../package.json'));
    var nodePackageVersion = nodePackageFile.version;
    var nodePackageDescription = nodePackageFile.description;

    return gulp.src(['src/styles/**/*.scss', '!src/styles/**/styleguide.scss'])
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(postcss(autoPrefixer))
        .pipe(license('/*\n' + fs.readFileSync('LICENSE.md', 'utf8') + '*/'))
        .pipe(cssUrlAdjuster({
            replace: ['../../fonts', 'assets/fonts'],
            prepend: `https:///cdn.antwerpen.be/${nodePackageDescription}/${nodePackageVersion}/`
        }))
        .pipe(gulp.dest(`aws/${nodePackageVersion}`))
        .pipe(sourcemaps.init())
        .pipe(gulp.dest(`./aws/${nodePackageVersion}/`))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(postcss(cssNano))
        .pipe(license('/*\n' + fs.readFileSync('LICENSE.md', 'utf8') + '*/'))
        .pipe(sourcemaps.write("./", sourcemapOptions))
        .pipe(gulp.dest(`aws/${nodePackageVersion}`));
});

gulp.task('sass:aws:latest', function () {
    var nodePackageFile = JSON.parse(fs.readFileSync(__dirname + '/../package.json'));
    var nodePackageDescription = nodePackageFile.description;

    return gulp.src(['src/styles/**/*.scss', '!src/styles/**/styleguide.scss'])
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(postcss(autoPrefixer))
        .pipe(license('/*\n' + fs.readFileSync('LICENSE.md', 'utf8') + '*/'))
        .pipe(cssUrlAdjuster({
            replace: ['../../fonts', 'assets/fonts'],
            prepend: 'https:///cdn.antwerpen.be/' + nodePackageDescription + '/latest/'
        }))
        .pipe(gulp.dest('aws/latest'))
        .pipe(sourcemaps.init())
        .pipe(gulp.dest('./aws/latest/'))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(postcss(cssNano))
        .pipe(license('/*\n' + fs.readFileSync('LICENSE.md', 'utf8') + '*/'))
        .pipe(sourcemaps.write("./", sourcemapOptions))
        .pipe(gulp.dest('aws/latest'));
});

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
