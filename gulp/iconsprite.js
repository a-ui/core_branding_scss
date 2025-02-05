// -------------------------------------------------------------------
// :: ICONFONT
// -------------------------------------------------------------------

var gulp = require('gulp');
var svgSprite = require('gulp-svg-sprite');

gulp.task('icon-sprite', function () {
    return gulp.src('src/icons/*.svg')
        .pipe(svgSprite({
            dest: 'styles',
            shape: {
                dimension: {
                    maxWidth: 24,
                    maxHeight: 24
                },
                id: {
                    generator: 'ai-%s'
                },
                spacing: {
                    padding: 1
                }
            },
            mode: {
                symbol: {
                    dest: '',
                    sprite: '../images/ai.svg',
                    common: 'ai',
                    inline: true,
                    prefix: '.ai-'
                },
            },
            svg: {
                transform: [
                    {
                        svgo: {
                            plugins: [
                                {
                                    mergePaths: false
                                }
                            ]
                        }
                    },
                    function(svg) {
                        return svg
                            .replace(/(<style.*?<\/style>)/g, "")
                            .replace(/( fill=\"#([0-9a-fA-F]{3,6})\")/g, "")
                            .replace(/( fill=\"none")/g, "")
                            .replace(/( stroke=\"#([0-9a-fA-F]{3,6})\")/g, "")
                            .replace(/( xmlns=\"http:\/\/www.w3.org\/2000\/svg\")/g, "")
                            .replace(/(style=\"position:absolute\")/g, "style=\"position:absolute\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\"")
                            .replace(/(  )/g, " ");

                    }
                ]
            }
        }))
        .pipe(gulp.dest('src/styles/'));
});
