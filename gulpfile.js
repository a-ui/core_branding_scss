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
gulp.task('build', gulp.series('clean:dist', gulp.parallel('icon-sprite', 'sass:dist'), 'copy', 'replace:dist'));

// Build documentation
gulp.task('docs', gulp.series('clean:docs', gulp.parallel('icon-sprite', 'sass', 'render-templates', 'readme'), 'copy:docs', 'replace'));

// Run AWS task: publish to CDN
gulp.task('aws', gulp.series('build', 'copy:aws', 'clean:aws', 'cdn'));

// Default task
gulp.task('default', gulp.series('server'));
