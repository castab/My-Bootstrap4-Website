const { src, dest, series, watch } = require('gulp')
const htmlclean = require('gulp-htmlclean')
const newer = require('gulp-newer')
const replace = require('gulp-html-replace')
const concat = require('gulp-concat')
const cleancss = require('gulp-clean-css')
const uglifycss = require('gulp-uglifycss')
const uglify = require ('gulp-uglify')
const imagemin = require('gulp-imagemin')
const deporder = require('gulp-deporder')
const stripdebug = require('gulp-strip-debug')
const browserSync = require('browser-sync')

const folder = {
    src: 'src/',
    build: 'build/'
}

function servebuild() {
    browserSync.init({
        server: {
            baseDir: './'
        },
        startPath: 'build/'
    })
    watch('build/**/*').on('change', browserSync.reload)
}

function json(cb) {
    src(folder.src + 'data/**/*')
    .pipe(dest(folder.build + 'data/'))
    cb()
}

function fonts(cb) {
    src('./node_modules/@fortawesome/fontawesome-free/webfonts/**/*')
    .pipe(dest(folder.build + 'webfonts/'))
    cb()
}

function images(cb) {
    src(folder.src + 'images/**/*')
    .pipe(newer(folder.build + 'images/'))
    .pipe(imagemin({ optimizationlevel: 5 }))
    .pipe(dest(folder.build + 'images/'))
    cb()
}

function css(cb) {
    src([
        './node_modules/bootstrap/dist/css/bootstrap.css',
        './node_modules/@fortawesome/fontawesome-free/css/all.css',
        folder.src + 'css/**/*'
    ])
    .pipe(concat('main.css'))
    .pipe(cleancss())
    .pipe(uglifycss())
    .pipe(dest(folder.build + 'css/'))
    cb()
}

function html(cb) {
    src(folder.src + '*.html')
    .pipe(newer(folder.build))
    .pipe(replace({
        'js': './js/main.js',
        'css': './css/main.css'
    }))
    .pipe(htmlclean())
    .pipe(dest(folder.build))
    cb()
}

function js(cb) {
    src([
        './node_modules/jquery/dist/jquery.js',
      './node_modules/angular/angular.js',
      './node_modules/angular-animate/angular-animate.js',
      './node_modules/angular-route/angular-route.js',
      './node_modules/bootstrap/dist/js/bootstrap.bundle.js',
      './node_modules/lodash/lodash.js',
      folder.src + 'js/**/*'
    ])
    .pipe(deporder())
    .pipe(concat('main.js'))
    .pipe(stripdebug())
    .pipe(uglify())
    .pipe(dest(folder.build + 'js/'))
    cb()
}

exports.build = series(images, html, css, js, json, fonts)
exports.servebuild = servebuild