/**
 * Created by Administrator on 2017/8/2 0002.
 */
var gulp= require('gulp'),
    uglify= require('gulp-uglify'),
    rename= require('gulp-rename'),
    concat= require('gulp-concat'),
    cssmin= require('gulp-clean-css'),
    htmlmin=require('gulp-htmlmin')
gulp.task('jsmin',function () {
    return gulp.src(['src/js/*.js','src/js/controller/*.js','src/js/service/*.js'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(uglify())
        .pipe(rename({
            suffix:'.min'
        }))
        .pipe(gulp.dest('dist/js'))
});





gulp.task('cssmin',function () {
    return gulp.src('src/css/*.css')
        .pipe(concat('all.css'))
        .pipe(gulp.dest('dist/css'))
        .pipe(cssmin())
        .pipe(rename({
            suffix:'.min'
        }))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('htmlmin',function () {
    return gulp.src('src/*.html')
        .pipe(htmlmin({
            collapseWhitespace:true
        }))
        .pipe(htmlmin())
        .pipe(gulp.dest('dist'));
});



gulp.task('htmlViewsmin', function(){
    return gulp.src('src/views/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('dist/views'));
});
gulp.task('lib',function () {
   return gulp.src("src/lib/**")
       .pipe(gulp.dest('dist/lib'));
});

gulp.task('default',function () {
    gulp.start('jsmin','cssmin','htmlmin','htmlViewsmin','lib');
});












