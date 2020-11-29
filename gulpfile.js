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

gulp.task('compileIndex', function() {
    gulp.src(['src/index.hbs'])
        .pipe(handlebars(data, options))
        .pipe(rename('index.html'))
        .pipe(gulp.dest(''));
});



gulp.task('scripts', function() {
    gulp.src([
            'node_modules/jquery/dist/jquery.js',
            'node_modules/bootstrap/dist/js/bootstrap.js',
            'src/js/**/*.js'
        ])
        .pipe(uglify())
        .pipe(concat('script.js'))
        .pipe(gulp.dest('dist/js'));
});

/**
 * Build SASS, combine with Bootstrap CSS and minify
 */
gulp.task('sass', function() {
    gulp.src([
            'src/sass/main.scss'
        ])
        .pipe(sass().on('error', sass.logError))
        .pipe(addsrc.prepend('node_modules/bootstrap/dist/css/bootstrap.css'))
        .pipe(minifyCSS())
        .pipe(concat('style.css'))
        .pipe(gulp.dest('dist/css'));
});

/**
 * Move bootstrap and project font files into dist
 */
gulp.task('fonts', function() {
    gulp.src([
            'node_modules/bootstrap/dist/fonts/*',
            'src/fonts/*'
        ])
        .pipe(gulp.dest('dist/fonts'));
});

/**
 * The default gulp task
 */
gulp.task('default', function() {
    gulp.run('scripts', 'sass', 'fonts', 'compileIndex');
});

/**
 * Watch asset files for changes. First runs default to prevent annoying issues.
 */
gulp.task('watch', function() {
    gulp.run('default');

    gulp.watch('src/index.hbs', function(event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        gulp.run('compileIndex');
    });

    gulp.watch('src/sass/**/*.scss', function(event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        gulp.run('sass');
    });

    gulp.watch('src/js/**/*.js', function(event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        gulp.run('scripts');
    });
});