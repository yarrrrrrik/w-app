const gulp = require('gulp')
const rename = require('gulp-rename')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const sourcemaps = require('gulp-sourcemaps')
const browserSync = require('browser-sync').create()


function convert(done) {
  gulp.src('./scss/**/*')
  .pipe(sourcemaps.init())
  .pipe(sass({
    errorLogToConsole:true,
    // outputStyle:'compressed'
  }).on('error', sass.logError))
  .pipe(rename('style.css'))
  .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('./css/'))
  .pipe(browserSync.stream())
  .pipe(browserSync.reload)
  done()
}


function reload(done) {

  browserSync.reload()

  done()
}


function sync(done) {

  browserSync.init({
    server:{
      baseDir:'./'
    },
    port:4000
  })

  done()
}


function watch() {
  gulp.watch('./scss/**/*',convert)// можно пути массивом сделать
  gulp.watch(['./**/*.html','./**/*.js','./**/*.scss'],reload)
}

gulp.task('default',gulp.parallel(sync,watch))





// function name(done) {
//   console.log('Yes')
//
//   done()
// }

// gulp.task('default',name)
// exports.default = name
