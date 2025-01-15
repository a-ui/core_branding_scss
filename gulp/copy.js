// -------------------------------------------------------------------
// :: COPY
// -------------------------------------------------------------------

var gulp = require('gulp');
var merge = require('ordered-read-streams');
const fs = require('fs-extra');
const path = require('path');

gulp.task('copy', async function() {
    const tasks = [
        gulp.src('src/fonts/**/*')
            .pipe(gulp.dest('dist/assets/fonts')),
        gulp.src('src/icons/**/*')
            .pipe(gulp.dest('dist/assets/icons')),
        gulp.src(['src/styles/**/*', '!src/styles/**/styleguide.scss'])
            .pipe(gulp.dest('dist/assets/styles')),
        gulp.src('src/images/**/*')
            .pipe(gulp.dest('dist/assets/images'))
    ];

    await Promise.all(tasks.map(streamToPromise));
});

gulp.task('copy:docs', async function() {
    const tasks = [
        gulp.src('.tmp/**/*.html')
            .pipe(gulp.dest('docs')),
        gulp.src('src/images/**/*')
            .pipe(gulp.dest('docs/images')),
        gulp.src('src/fonts/**/*')
            .pipe(gulp.dest('docs/fonts')),
        gulp.src('src/scripts/**/*')
            .pipe(gulp.dest('docs/scripts'))
    ]

    await Promise.all(tasks.map(streamToPromise));
});

// Helper function to convert streams to promises
function streamToPromise(stream) {
    return new Promise((resolve, reject) => {
        stream.on('end', resolve);
        stream.on('error', reject);
    });
}

gulp.task('move:aws', async function() {
    const distPath = 'dist';
    const awsPath = path.join(distPath, 'aws');

    try {
        // Ensure 'aws' folder exists
        await fs.ensureDir(awsPath);

        // Read all files in the 'dist' folder
        const files = await fs.readdir(distPath);

        // Move files to 'aws', skipping the 'aws' folder itself
        for (const file of files) {
            const filePath = path.join(distPath, file);

            if (file !== 'aws') {
                const targetPath = path.join(awsPath, file);
                await fs.move(filePath, targetPath);
            }
        }
    } catch (error) {
        console.error('Error during move:', error);
    }
});
