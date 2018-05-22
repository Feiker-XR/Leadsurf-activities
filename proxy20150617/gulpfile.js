


var gulp = require('gulp'),
	minifyHTML = require('gulp-minify-html'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),    
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    del = require('del');

//压缩合并html
gulp.task('minifyhtml', function() {
    return gulp.src('html/*.html')//文件源
    .pipe(minifyHTML())//执行压缩
    .pipe(concat("main.html"))//执行合并
    .pipe(rename({suffix: '.min'}))//重命名
    .pipe(gulp.dest('desthtml'))//输出文件夹
});

//压缩合并css
gulp.task('minifycss', function() {
    return gulp.src('css/*.css')//文件源
    .pipe(minifycss())//执行压缩
    .pipe(concat("main.css"))//执行合并
    .pipe(rename({suffix: '.min'}))//重命名
    .pipe(gulp.dest('destcss'))//输出文件夹
});
//压缩合并js
gulp.task('minifyjs', function() {
	return gulp.src('src/*.js')
		.pipe(concat('main.js')) //合并所有js到main.js //.pipe(gulp.dest('dest')) //输出main.js到文件夹													
		.pipe(rename({suffix: '.min'}))////rename压缩后的文件名
		.pipe(uglify()) //压缩
		.pipe(gulp.dest('destjs')); //输出
});


gulp.task('default',['minifyjs','minifycss','minifyhtml']);
