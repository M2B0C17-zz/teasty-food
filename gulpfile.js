var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var webserver = require('gulp-webserver');

/*
La tarea script concatena los archivos js convirtiendolo en script.js
El que guardara en una carpeta dist, sera el que linkeamos
*/

gulp.task('script', function() {
    gulp.src(['node_modules/jquery/dist/jquery.js', 'node_modules/materialize-css/dist/js/materialize.js', 'assets/js/*.js'])
        .pipe(concat('script.js'))
        //carpeta dist
        .pipe(gulp.dest('dist/js/'))
});

/**
 * Esta tarea concatena y minifica el archivo main.scss, convirtiendolo en style.min.css,
 * lo guardara en una carpeta llamada dist y sera el que linkearemos
 */

gulp.task('style', function() {
    gulp.src(['node_modules/materialize-css/dist/css/materialize.css', 'assets/sass/main.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCSS())
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('dist/css/'));
});

/**
 * Configuramos el webserver que se ejecutara en el localhost puerto 8000
 */

gulp.task('webserver', function() {
    gulp.src('../teasty-food/')
        .pipe(webserver({
            fallback: 'index.html',
            livereload: true,
            directoryListing: false,
            open: true,
            port: 8081
        }));
});

/**
 * task para el sass -> cambios de estilos
 */

gulp.task('watch', function() {
    gulp.watch('assets/sass/*.scss', ['style']);
});

gulp.task('watchjs', function() {
    gulp.watch('assets/js/*.js', ['script']);
});

/**
 * Le indicamos a gulp cuales son las tareas a ejecutar al correr el comando gulp
 */

gulp.task('default', ['script', 'style', 'webserver', 'watch', 'watchjs']);

