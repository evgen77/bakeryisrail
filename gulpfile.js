var gulp = require('gulp'),
    imageMin = require('gulp-imagemin')

browserSync = require('browser-sync').create();

function sync(done){
   browserSync.init({
       server:{
           baseDir: './',
       },
       port:3000,
       online: true
       
       
   })
    done();
}
gulp.task('compress', function() {
    gulp.src('img/*')
    .pipe(imageMin({
        progressive: true
      }))
    .pipe(gulp.dest('img'))
  });
gulp.task(sync);