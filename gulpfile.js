var gulp = require('gulp'),
    concat = require('gulp-concat'),
    prefix = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    beeper = require('beeper'),
    notifier = require('node-notifier'),
    cleanCSS = require('gulp-clean-css');


//Compile Scss Only
gulp.task('SassCompile', function () {

  return gulp.src(['Assets/SASS/main-rtl.scss','Assets/SASS/main-ltr.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error',function(err){
            console.log(`-----------------------------------------------------------------`);
            console.log(err.message);
            console.log(`-----------------------------------------------------------------`);
            beeper();
           
            notifier.notify(
                {
                  title: 'Sass Error Compiling',
                  message: `Error in File : ${err.relativePath} \nError in Line : ${err.line} , Column : ${err.column} `,
                  sound: false, 
                  wait: false,
                  timeout: 1
                },
                function(err, response) {
                  // Response is response from notification
                }
              );
            this.emit('end');
        }))
        .pipe(prefix('last 2 versions'))
        .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('Assets/CSS'));
});
gulp.task('concatMinifyAllRtlCss', function () {

  return gulp.src(['Assets/CSS/Vendor/rtl/bootstrapRTL.min.css', 'Assets/CSS/Vendor/*.css','Assets/CSS/main-rtl.css'])
      .pipe(sourcemaps.init())
      .pipe(concat('rtlMinStyle.min.css'))
      .pipe(cleanCSS())
      .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('Assets/CSS/MinifiedCss'));
});
gulp.task('concatMinifyAllLtrCss', function () {

  return gulp.src(['Assets/CSS/Vendor/ltr/bootstrapLTR.min.css', 'Assets/CSS/Vendor/*.css','Assets/CSS/main-ltr.css'])
  .pipe(sourcemaps.init())
      .pipe(concat('ltrMinStyle.min.css'))
      .pipe(cleanCSS())
      .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('Assets/CSS/MinifiedCss'));
});


 gulp.task('jsCompress', function () {

   return gulp.src(['Assets/Scripts/Vendor/jquery-3.1.1.min.js', 'Assets/Scripts/Vendor/bootstrap.min.js', 'Assets/Scripts/Vendor/*.js','Assets/Scripts/Pages/*.js'])
         .pipe(concat('scripts.min.js'))
         .pipe(uglify())
     .pipe(gulp.dest('Assets/Scripts/MinifiedJs'));
 });

gulp.task('watch', function () {
    // gulp.watch('Assets/SASS/*/*.scss', gulp.series(['SassCompile', 'concatMinifyAllRtlCss', 'concatMinifyAllLtrCss']));
    // gulp.watch('Assets/SASS/*.scss', gulp.series(['SassCompile', 'concatMinifyAllRtlCss', 'concatMinifyAllLtrCss']));

  gulp.watch('Assets/SASS/*/*.scss', gulp.series('SassCompile'));
  gulp.watch('Assets/SASS/*.scss', gulp.series('SassCompile'));

    // gulp.watch('Assets/Scripts/Pages/*.js', gulp.series('jsCompress'));
});