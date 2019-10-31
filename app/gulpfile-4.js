const gulp = require('gulp');
const gutil = require('gulp-util');
// const sass           = require('gulp-sass');
const browserync = require('browser-sync').create();
const conct = require('gulp-concat');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const notify = require("gulp-notify");
const bourbon = require("bourbon").includePaths;

// Сервер и автообновление страницы Browsersync
function browserSync(done) {
    browserync({
        server: {
        	baseDir: '/app'
        },
        proxy: "Simple-Gulp-Start-master",
        notify: false,
        // tunnel: true,
        // tunnel: "projectmane", //Demonstration page: http://projectmane.localtunnel.me
    });
    done();
}

// Минификация пользовательских скриптов проекта и JS библиотек в один файл
function js() {
    return gulp.src([
        // 'app/libs/jquery/dist/jquery.min.js',
        'app/js/common.js', // Всегда в конце
    ])
        .pipe(concat('scripts.min.js'))
        .pipe(uglify()) // Минимизировать весь js (на выбор)
        .pipe(gulp.dest('app/js'))
        .pipe(browserSync.reload({stream: true}));
    // done();
}
/* scss   or sass */
function sass() {
    return gulp.src('app/sass/**/main.sass')
        .pipe(sass({outputStyle: 'expand'}).on("error", notify.onError()))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(sass({
            sourcemaps: true,
            includePaths: [bourbon]
        }))
        .pipe(autoprefixer(['last 15 versions']))
        .pipe(cleanCSS()) // Опционально, закомментировать при отладке
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}));
    // done();
}
function scss() {
    return gulp.src('app/scss/**/style.scss')
        .pipe(sass({outputStyle: 'expand'}).on("error", notify.onError()))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(sass({
            sourcemaps: true,
            includePaths: [bourbon]
        }))
        .pipe(autoprefixer(['last 15 versions']))
        .pipe(cleanCSS()) // Опционально, закомментировать при отладке
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}));
    // done();
}
/* compressing images */
function compressImg() {
    return gulp.src('app/img/*')
        .pipe(imagemin(''))
    // .pipe(gulp.dest('./img/imgmin/'));
    // done();
}
/*watch */

// define complex tasks
const seriel = gulp.series(sass, scss, js, browserSync);

function watch() {
    browserync.init({
        // server: {
        // 	baseDir: 'app'
        // },
         proxy: "Simple-Gulp-Start-master",
        notify: true
    });
    gulp.watch('app/sass/**/*.sass', sass);
    gulp.watch('app/scss/**/*.scss', scss);
    gulp.watch(['libs/**/*.js', 'app/js/common.js'], js);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/*.php', browserSync.reload);
}
const def = gulp.series(compressImg, watch);


// exports.clean = clean;
// exports.build = build;
exports.watch = watch;
exports.default = def;
