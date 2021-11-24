'use strict';

require('./gulp/build'),
require('./gulp/clean'),
require('./gulp/copy'),
require('./gulp/iconsprite'),
require('./gulp/styles'),
require('./gulp/templates'),
require('./gulp/watch');

var gulp = require('gulp');

// Start a development server
gulp.task('server', gulp.series('clean:tmp', gulp.parallel('icon-sprite', 'sass', 'render-templates', 'stylelint'), 'watch'));

// Create a build
gulp.task('build', gulp.series('clean:dist', gulp.parallel('icon-sprite', 'sass:dist'), 'copy'));

// Build documentation
gulp.task('docs', gulp.series('clean:docs', gulp.parallel('icon-sprite', 'sass', 'render-templates', 'readme'), 'copy:docs', 'replace'));

// Run AWS task: publish to CDN
gulp.task('aws:version', gulp.series(gulp.parallel('icon-sprite', 'sass:aws:version'), 'copy:aws:version'));
gulp.task('aws:latest', gulp.series(gulp.parallel('icon-sprite', 'sass:aws:latest'), 'copy:aws:latest'));
gulp.task('aws', gulp.series('clean:aws', 'aws:version', 'aws:latest'));

// Default task
gulp.task('default', gulp.series('server'));
