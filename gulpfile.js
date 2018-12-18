// Gulp.js configuration
'use strict';

var
  // modules
  gulp = require('gulp'),
  newer = require('gulp-newer'),
  imagemin = require('gulp-imagemin'),
  browserSync = require('browser-sync'),
  htmlclean = require('gulp-htmlclean'),
  concat = require('gulp-concat'),
  deporder = require('gulp-deporder'),
  stripdebug = require('gulp-strip-debug'),
  uglify = require('gulp-uglify'),
  reload = browserSync.reload,
  replace = require('gulp-html-replace'),
  uglifycss = require('gulp-uglifycss'),
  cleancss = require('gulp-clean-css'),


  // folders
  folder = {
    src: 'src/',
    build: 'build/'
  }
;

// image processing
gulp.task('images', function() {
    var out = folder.build + 'images/';
    return gulp.src(folder.src + 'images/**/*')
      .pipe(newer(out))
      .pipe(imagemin({ optimizationLevel: 5 }))
      .pipe(gulp.dest(out));
  });

// Static server
gulp.task('serve-dev', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        startPath: "src/html/"
    });
    gulp.watch("src/**/*").on("change", reload);
});
gulp.task('serve-build', function() {
  browserSync.init({
      server: {
          baseDir: "./"
      },
      startPath: "build/html/"
  });
  gulp.watch("build/**/*").on("change", reload);
});

// HTML processing
gulp.task('html', gulp.series('images', function() {
    var
      out = folder.build + 'html/',
      page = gulp.src(folder.src + 'html/**/*')
        .pipe(newer(out));
    page = page.pipe(replace({
        'js': '../js/main.js',
        'css': '../css/main.css'
      }))
    page = page.pipe(htmlclean());



  
    return page.pipe(gulp.dest(out));
}));

// JavaScript processing
gulp.task('js', function() {

    var jsbuild = gulp.src([
      './node_modules/jquery/dist/jquery.js',
      './node_modules/angular/angular.js',
      './node_modules/angular-animate/angular-animate.js',
      './node_modules/angular-route/angular-route.js',
      './node_modules/bootstrap/dist/js/bootstrap.bundle.js',
      './node_modules/lodash/lodash.js',
      folder.src + 'js/**/*'
  ])
      .pipe(deporder())
      .pipe(concat('main.js'));
  
    
    jsbuild = jsbuild
      .pipe(stripdebug())
      .pipe(uglify());
    
  
    return jsbuild.pipe(gulp.dest(folder.build + 'js/'));
  
  });

  gulp.task('css', gulp.series('images', function() {
    var cssbuild =  gulp.src([
    './node_modules/bootstrap/dist/css/bootstrap.css',
    './node_modules/@fortawesome/fontawesome-free/css/all.css',
    folder.src + 'css/**/*'
    ]);
    cssbuild = cssbuild.pipe(concat('main.css')).pipe(cleancss()).pipe(uglifycss());
    return cssbuild.pipe(gulp.dest(folder.build + 'css/'));
  }));

  gulp.task('build', gulp.series(['html', 'css', 'js']));