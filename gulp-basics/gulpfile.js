// Top Level Function [task - src  - dest - watch]

const gulp = require('gulp');
const gulpSass = require('gulp-sass');
const sass  = gulpSass(require('sass'));
// task('name',func())

gulp.task('sass',async function(){
    gulp.src('index.scss').pipe(sass()).pipe(gulp.dest('css'))
});
// gulp.task('log',function(){
//        console.log("lllllllllll");
// });

// gulp.task('move',function () {
//     //    move file from src to dest

//     gulp.src('css1/*.css').pipe(gulp.dest('css2'));
// })


// gulp.task('watching',function(){
//      gulp.watch('css1/*.css',async function(){
//              gulp.src('css1/*.css').pipe(gulp.dest('css2'));
             
//      })
// });