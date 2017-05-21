'use strict';

const gulp = require('gulp');

const kit = require('gulp-kit');
const htmlmin = require('gulp-htmlmin');

const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const sourcemaps = require('gulp-sourcemaps');

const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

const imagemin = require('gulp-imagemin');
const svgSprite = require("gulp-svg-sprite");

const browserSync = require('browser-sync').create();
const del = require('del');
const notify = require('gulp-notify');





// HTML публикация (htmlpub)
gulp.task('htmlpub', function(){
    return gulp.src('project/kit/**/*.kit')
    .pipe(kit())
    .on('error', notify.onError())
    .pipe(htmlmin({collapseWhitespace: true, removeComments: true}))
    .pipe(gulp.dest('public'));
});

// HTML разработка (htmldev)
gulp.task('htmldev', function(){
    return gulp.src('project/kit/**/*.kit')
    .pipe(kit())
    .on('error', notify.onError())
    .pipe(gulp.dest('public'));
});





// CSS публикация (csspub)
gulp.task('csspub', function () {
  return gulp.src('project/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .on('error', notify.onError())
    .pipe(autoprefixer({
      browsers: ['Chrome >= 35', 'Firefox >= 38', 'Edge >= 12', 'Explorer >= 10', 'iOS >= 8', 'Safari >= 8', 'Opera >= 12', 'Android 2.3', 'Android >= 4'],
      cascade: false
    }))
    .pipe(cssnano())
    .pipe(gulp.dest('public/css'));
});

// CSS разработка (cssdev)
gulp.task('cssdev', function () {
  return gulp.src('project/scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .on('error', notify.onError())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/css'));
});





// JS публикация (jspub)
gulp.task('jspub', function() {
  return gulp.src([
    'lib/jquery-3.2.1/jquery.slim.js',
    'lib/tether-1.4.0/tether.js',
    'lib/bootstrap-4.0.0-alpha.6/js/dist/util.js',
//    'lib/bootstrap-4.0.0-alpha.6/js/dist/alert.js',
    'lib/bootstrap-4.0.0-alpha.6/js/dist/button.js',
//    'lib/bootstrap-4.0.0-alpha.6/js/dist/carousel.js',
//    'lib/bootstrap-4.0.0-alpha.6/js/dist/collapse.js',
    'lib/bootstrap-4.0.0-alpha.6/js/dist/dropdown.js',
    'lib/bootstrap-4.0.0-alpha.6/js/dist/modal.js',
//    'lib/bootstrap-4.0.0-alpha.6/js/dist/scrollspy.js',
    'lib/bootstrap-4.0.0-alpha.6/js/dist/tab.js',
//    'lib/bootstrap-4.0.0-alpha.6/js/dist/tooltip.js',
//    'lib/bootstrap-4.0.0-alpha.6/js/dist/popover.js',
    'lib/WOW-1.1.2/wow.js',
    'project/js/main.js'
  ])
    .pipe(concat('main.js'))
    .on('error', notify.onError())
    .pipe(uglify())
    .pipe(gulp.dest('public/js'));
});

// JS разработка (jsdev)
gulp.task('jsdev', function() {
  return gulp.src([
    'lib/jquery-3.2.1/jquery.slim.js',
    'lib/tether-1.4.0/tether.js',
    'lib/bootstrap-4.0.0-alpha.6/js/dist/util.js',
//    'lib/bootstrap-4.0.0-alpha.6/js/dist/alert.js',
    'lib/bootstrap-4.0.0-alpha.6/js/dist/button.js',
//    'lib/bootstrap-4.0.0-alpha.6/js/dist/carousel.js',
//    'lib/bootstrap-4.0.0-alpha.6/js/dist/collapse.js',
    'lib/bootstrap-4.0.0-alpha.6/js/dist/dropdown.js',
    'lib/bootstrap-4.0.0-alpha.6/js/dist/modal.js',
//    'lib/bootstrap-4.0.0-alpha.6/js/dist/scrollspy.js',
    'lib/bootstrap-4.0.0-alpha.6/js/dist/tab.js',
//    'lib/bootstrap-4.0.0-alpha.6/js/dist/tooltip.js',
//    'lib/bootstrap-4.0.0-alpha.6/js/dist/popover.js',
    'lib/WOW-1.1.2/wow.js',
    'project/js/main.js'
  ])
    .pipe(sourcemaps.init())
    .pipe(concat('main.js'))
    .on('error', notify.onError())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/js'));
});





// Картинки публикация (imgpub)
gulp.task('imgpub', () =>
  gulp.src('project/img/**')
  .pipe(imagemin([
    imagemin.gifsicle({interlaced: true}),
    imagemin.jpegtran({progressive: true}),
//    imagemin.optipng({optimizationLevel: 5}),
    imagemin.svgo({plugins: [{removeViewBox: false}]})
]))
  .pipe(gulp.dest('public/img'))
);

// Картинки разработка (imgdev)
gulp.task('imgdev', function() {
  return gulp.src('project/img/**', {since: gulp.lastRun('imgdev')})
    .pipe(gulp.dest('public/img'));
})





// SVG спрайты
gulp.task('icons', function() {
  return gulp.src('project/sprite/icons/*.svg')
    .pipe(svgSprite({
      mode: {
        css: {
          dest: '.',
          bust: false,
          sprite: 'img/svg/social-icons.svg',
          layout: 'vertical',
//          prefix: "$",
          dimensions: true,
          render: {
            scss: {
              dest: 'scss/_social-icons.scss'
            }
          }
        }
      }
    }))
    .pipe(gulp.dest('project'));
});





// Копирование шрифтов в папку public
gulp.task('copyf', function() {
  return gulp.src('project/fonts/*.*', {since: gulp.lastRun('copyf')})
    .pipe(gulp.dest('public/fonts'));
})

// Копирование файлов в папку public
gulp.task('copyc', function() {
  return gulp.src('project/serv/*.*', {since: gulp.lastRun('copyc')})
    .pipe(gulp.dest('public'));
})

// Копирование файлов для загрузки в папку public
gulp.task('copyd', function() {
  return gulp.src('project/files/**/*.*', {since: gulp.lastRun('copyd')})
    .pipe(gulp.dest('public/files'));
})





// Удаление папки public
gulp.task('del', function () {
    return del('public');
});

// Таск browser-sync
gulp.task('browser-sync', function() {
    browserSync.init({
        server: 'public'
    });
    browserSync.watch('public/**/*.*').on('change', browserSync.reload);
});





// Сборка проекта для разработки dev
gulp.task('dev', gulp.series(
    'del', 'copyf', 'copyd', 'imgdev', 'icons',
    gulp.parallel('htmldev', 'cssdev', 'jsdev')
  )
);

// Сборка проекта для публикации pub
gulp.task('pub', gulp.series(
    'del', 'copyf', 'copyc', 'copyd', 'imgpub', 'icons',
    gulp.parallel('htmlpub', 'csspub', 'jspub')
  )
);





// Отслеживание изменений
gulp.task('watch', function() {
  gulp.watch('project/kit/**/*.kit', gulp.series('htmldev'));
  gulp.watch('project/scss/**/*.scss', gulp.series('cssdev'));
  gulp.watch('project/js/**/*.js', gulp.series('jsdev'));
});

// Запуск по команде gulp
gulp.task('default',
 gulp.series('dev', gulp.parallel('watch', 'browser-sync'))
);
