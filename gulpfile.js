var gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	minifycss = require('gulp-minify-css'),
	jshint = require('gulp-jshint'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	concat = require('gulp-concat'),
	notify = require('gulp-notify'),
	livereload = require('gulp-livereload');

var paths = {
	css: 	['./assets/styles/theme.css'],
	scss: 	'./assets/scss/**/*.scss',
	js: 	['assets/scripts/rearrange.js']
};

gulp.task('styles', function() {
	return sass('./assets/scss/theme.scss', { style: 'expanded' })
    	.pipe(autoprefixer('last 2 version'))
    	.pipe(gulp.dest('assets/styles/'))
    	// .pipe(rename({suffix: '.min'}))
    	// .pipe(minifycss())
    	.pipe(gulp.dest('assets/styles/'))
    	.pipe(notify({ message: 'finished: styles' }));
});

gulp.task('scripts', function() {
	// 
});

gulp.task('watch', function() {
	gulp.watch(paths.scss, ['styles']);
	// gulp.watch(paths.js, ['scripts']);

	// livereload.listen();
	// gulp.watch(['dist/**']).on('change', livereload.changed);
});

gulp.task('clean', function(cb) {
	// del(['dist/assets/css', 'dist/assets/js', 'dist/assets/img'], cb)
});

gulp.task('default', ['clean'], function() {
	// gulp.start('styles', 'scripts');
});