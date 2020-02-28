var gulp = require('gulp'),
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
gulp.task(sync);