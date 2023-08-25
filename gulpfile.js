'use strict';

require('./gulp/build'),
require('./gulp/copy'),
require('./gulp/iconsprite'),
require('./gulp/styles'),
require('./gulp/templates'),
require('./gulp/watch');

var gulp = require('gulp');

// Start a development server
gulp.task('server', gulp.series(gulp.parallel('icon-sprite', 'sass', 'render-templates', 'stylelint'), 'watch'));

// Create a build
gulp.task('build', gulp.series(gulp.parallel('icon-sprite', 'sass:dist'), 'copy', 'replace:dist'));

// Build documentation
gulp.task('docs', gulp.series(gulp.parallel('icon-sprite', 'sass', 'render-templates', 'readme'), 'copy:docs', 'replace'));

// Default task
gulp.task('default', gulp.series('server'));
