const gulp = require("gulp");
const sass = require("gulp-sass")(require('node-sass'));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const gcmq = require("gulp-group-css-media-queries");
const concat = require("gulp-concat");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const cleanCSS = require("gulp-clean-css");
const fileinclude = require("gulp-file-include");
const browserSync = require("browser-sync").create();

var paths = {
    styles: {
        src: "src/scss/*.scss",
        dest: "dist/css"
    },
    templates: {
        src: "src/templates/*.html",
        dest: "dist/"
    },
    js: {
        src: "src/js/*.js",
        dest: "dist/js/"
    },
    dist: "dist/"
};

/* javascripts tasks */
function js_libs() {
    return gulp.src([
        "node_modules/tiny-slider/dist/min/tiny-slider.js",
    ])
        .pipe(concat('lib.js'))
        .pipe(gulp.dest(paths.js.dest));
}

/* javascripts tasks */
function js() {
    return gulp.src(paths.js.src)
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest(paths.js.dest));
}

function style() {
    return (
        gulp.src(paths.styles.src)
            // .pipe(sourcemaps.init())
            .pipe(sass())
            .on("error", sass.logError)

            .pipe(postcss([autoprefixer(), cssnano()]))
            .pipe(gcmq())
            .pipe(cleanCSS())

            // .pipe(sourcemaps.write())
            .pipe(gulp.dest(paths.styles.dest))
            .pipe(browserSync.stream())
    );
}

function reload() {
    browserSync.reload();
}

function html() {
    return gulp.src(paths.templates.src)
        .pipe(fileinclude())
        .pipe(gulp.dest(paths.dist));
}

/*
  One task to rule them all, one task to find them,
  One task to bring them all and in the darkness bind them :)
*/
function watch() {
    browserSync.init({
        server: {
            baseDir: paths.dist,
        },
        port: 9000,
        open: false
    });

    gulp.watch(paths.styles.src, style);
    gulp.watch(paths.styles.src, reload);

    gulp.watch("src/scss/**/*.scss", style);
    gulp.watch("src/scss/**/*.scss", reload);

    gulp.watch(paths.js.src, js);
    gulp.watch(paths.js.src, reload);

    gulp.watch("./src/templates/**/*.html", html);
    gulp.watch("./src/templates/**/*.html", reload);

    gulp.watch(paths.templates.src, html);
    gulp.watch(paths.templates.src, reload);
}

exports.watch = watch;
exports.style = style;
exports.js_libs = js_libs;
exports.js = js;
exports.html = html;

var build = gulp.series(style, watch);
gulp.task('build', build);
gulp.task('default', build);
