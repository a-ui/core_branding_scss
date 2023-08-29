'use strict';

require('./gulp/build'),
require('./gulp/iconsprite'),
require('./gulp/styles'),
require('./gulp/templates');

var gulp = require('gulp');

// Start a development server
gulp.task('templates', gulp.series('render-templates'));

// Create a build
gulp.task('build', gulp.parallel('sass:dist'));

// Build documentation
gulp.task('docs', gulp.parallel('templates', 'readme'));
