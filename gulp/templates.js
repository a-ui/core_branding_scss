// -------------------------------------------------------------------
// :: TEMPLATES
// -------------------------------------------------------------------

var gulp = require('gulp');
var glob = require('glob');
var fs = require('fs');

var listSelectors = require('list-selectors'),
    nunjucks = require('gulp-nunjucks'),
    rename = require('gulp-rename'),
    exporter = require('sass-export').exporter;

gulp.task('render-templates', function () {
    return gulp.src(['src/**/index.njk'])
        .pipe(nunjucks.compile(getTemplateData()))
        .pipe(rename({ extname: ".html" }))
        .pipe(gulp.dest('.tmp'));
});

function getTemplateData(){
	var data = {
        ICONS: []
    };

    data.VERSION_INFO = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    data.COLORS = exporter({inputFiles: ['src/styles/quarks/_quarks.colors.scss'],includePaths: ['src/styles/quarks/']}).getArray();
    data.VARIABLES = exporter({inputFiles: ['src/styles/quarks/_quarks.variables.scss'],includePaths: ['src/styles/quarks/']}).getArray();

    var icons = glob.sync("src/icons/*.svg");
	for(var i in icons) {
		var filename = icons[i].split('/');
		filename = filename[filename.length-1];
		filename = filename.split('.')[0];
		data.ICONS.push(filename);
	}

    listSelectors(['src/styles/utilities/_utilities.background.scss'],
        { include: ['classes'] },
        function(bgUtilities) {
            for(var bgU in bgUtilities['classes']) {
                bgUtilities['classes'][bgU] = bgUtilities['classes'][bgU].substring(1);
            }
            data.BGUTILITIES = bgUtilities['classes'];
        }
    );

    listSelectors(['src/styles/utilities/_utilities.spacing.scss'],
        { include: ['classes'] },
        function(spacingUtilities) {
            for(var spU in spacingUtilities['classes']) {
                spacingUtilities['classes'][spU] = spacingUtilities['classes'][spU].substring(1);
            }
            data.SPACINGUTILITIES = spacingUtilities['classes'];
        }
    );

    listSelectors(['src/styles/utilities/_utilities.text.scss'],
        { include: ['classes'] },
        function(textUtilities) {
            for(var txtU in textUtilities['classes']) {
                textUtilities['classes'][txtU] = textUtilities['classes'][txtU].substring(1);
            }
            data.TEXTUTILITIES = textUtilities['classes'];
        }
    );

    return data;
}
