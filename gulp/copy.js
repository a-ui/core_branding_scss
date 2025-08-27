// -------------------------------------------------------------------
// :: COPY
// -------------------------------------------------------------------

var gulp = require('gulp');
const fs = require('fs-extra');
const path = require('path');

gulp.task('copy', async function() {
    const copyTasks = [
        fs.copy('src/fonts', 'dist/assets/fonts'),
        fs.copy('src/icons', 'dist/assets/icons'),
        fs.copy('src/images', 'dist/assets/images'),
        fs.copy('src/styles', 'dist/assets/styles', {
            filter: (src) => !src.endsWith('styleguide.scss'),
        }),
    ];

    await Promise.all(copyTasks);
});

gulp.task('copy:docs', async function() {
    await fs.copy('.tmp', 'docs', {
        filter: (src) => fs.lstatSync(src).isDirectory() || src.endsWith('.html'),
        overwrite: true
    });

    const copyDocsTasks = [
        fs.copy('src/images', 'docs/images'),
        fs.copy('src/fonts', 'docs/fonts'),
        fs.copy('src/scripts', 'docs/scripts'),
    ];

    await Promise.all(copyDocsTasks);
});

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
