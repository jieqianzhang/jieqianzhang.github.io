var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css'),
    sass = require('gulp-sass'),
    addsrc = require('gulp-add-src'),
    handlebars = require('gulp-compile-handlebars'),
    fs = require('fs'),
    rename = require('gulp-rename');


/**
 * Minify and combine JS files, including jQuery and Bootstrap
 */

const options = {
    ignorePartials: true,
    batch: ['src/index-partials'],
};

const data = JSON.parse(fs.readFileSync('src/data/data.json', 'utf8'));


const compileIndex = (done) => {
    gulp.src(['src/index.hbs'])
        .pipe(handlebars(data, options))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('./'));
    done();
};

const compileScript = (done) => {
    gulp.src([
            'node_modules/bootstrap/dist/js/bootstrap.js',
            'src/js/**/*.js'
        ])
        .pipe(uglify())
        .pipe(concat('script.js'))
        .pipe(gulp.dest('dist/js'));
    done();
}

const compileStyle = (done) => {
    gulp.src([
            'src/sass/main.scss'
        ])
        .pipe(sass().on('error', sass.logError))
        .pipe(addsrc.prepend('node_modules/bootstrap/dist/css/bootstrap.css'))
        .pipe(minifyCSS())
        .pipe(concat('style.css'))
        .pipe(gulp.dest('dist/css'));
    done()
}

/**
 * Move bootstrap and project font files into dist
 */
const compileFont = (done) => {
    gulp.src([
            'node_modules/bootstrap/dist/fonts/*',
            'src/fonts/*'
        ])
        .pipe(gulp.dest('dist/fonts'));
    done()
}

/**
 * Build individual pages based on the data.json file
 */
const buildPages = (done) => {
    const pages = data['projects'].map((d) => {
        // Right here, we return a function per country
        return () =>
            gulp.src(['src/page.hbs'])
            .pipe(handlebars(d, options))
            .pipe(rename('index.html'))
            .pipe(gulp.dest('pages/' + d.slug));
    });

    return gulp.series(...pages, (seriesDone) => {
        seriesDone();
        done();
    })();
}

/**
 * The default gulp task to build the pages
 */
gulp.task('default', gulp.series(compileScript, compileStyle, compileFont, compileIndex, buildPages))


/**
 * Watch asset files for changes. First runs default to prevent annoying issues.
 */
// gulp.task('watch', function() {
//     gulp.run('default');

//     gulp.watch('src/index.hbs', function(event) {
//         console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
//         gulp.run('compileIndex');
//     });

//     gulp.watch('src/sass/**/*.scss', function(event) {
//         console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
//         gulp.run('sass');
//     });

//     gulp.watch('src/js/**/*.js', function(event) {
//         console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
//         gulp.run('scripts');
//     });
// });