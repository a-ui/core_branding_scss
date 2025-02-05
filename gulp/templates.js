// -------------------------------------------------------------------
// :: TEMPLATES
// -------------------------------------------------------------------

var gulp = require('gulp');
var glob = require('glob');
var fs = require('fs');
var postcss = require('postcss');
var selectorParser = require('postcss-selector-parser');
var nunjucks = require('gulp-nunjucks');
var rename = require('gulp-rename');
// var exporter = require('sass-export').exporter;

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
    // data.COLORS = exporter({inputFiles: ['src/styles/quarks/_quarks.colors.scss'],includePaths: ['src/styles/quarks/']}).getArray();
    // data.VARIABLES = exporter({inputFiles: ['src/styles/quarks/_quarks.variables.scss'],includePaths: ['src/styles/quarks/']}).getArray();
    // console.log(data);

    var icons = glob.sync("src/icons/*.svg");
	for(var i in icons) {
		var filename = icons[i].split('/');
		filename = filename[filename.length-1];
		filename = filename.split('.')[0];
		data.ICONS.push(filename);
	}

    extractClassSelectors('src/styles/utilities/_utilities.background.scss', (bgUtilities) => {
        data.BGUTILITIES = bgUtilities.classes;
    });

    extractClassSelectors('src/styles/utilities/_utilities.spacing.scss', (spUtilities) => {
        data.SPACINGUTILITIES = spUtilities.classes;
    });

    extractClassSelectors('src/styles/utilities/_utilities.text.scss', (textUtilities) => {
        data.TEXTUTILITIES = textUtilities.classes;
    });

    return data;
}

function extractClassSelectors(filePath, callback) {
    const cssContent = fs.readFileSync(filePath, 'utf-8'); // CSS inlezen
    
    const classSelectors = [];

    // PostCSS plugin om selectors te analyseren
    const plugin = (root) => {
        root.walkRules((rule) => {
            // Verwerk elke selector met postcss-selector-parser
            selectorParser((selectors) => {
                selectors.walkClasses((classSelector) => {
                    // Verwijder de "." en voeg toe aan de lijst
                    classSelectors.push(classSelector.value);
                });
            }).processSync(rule.selector);
        });
    };

    // Verwerk CSS met de PostCSS pipeline
    postcss([plugin])
        .process(cssContent, { from: filePath })
        .then(() => {
            callback({ classes: classSelectors });
        })
        .catch((err) => {
            console.error(err);
        });
}
