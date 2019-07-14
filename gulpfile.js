const browsersync    = require("browser-sync").create();
const gulp           = require("gulp");
const plumber        = require("gulp-plumber");
const sass           = require("gulp-sass");

function browserSync(done) {
    browsersync.init({
       proxy: "uphealth.test"
    });
    done();
 }

function css() {
    return gulp
       .src("./src/scss/style.scss")
       .pipe(plumber())
       .pipe(sass({ outputStyle: "expanded" }))
       .on("error", sass.logError)
       .pipe(gulp.dest("./"))
       .pipe(browsersync.stream());
}

function watchFiles() {
    gulp.watch("src/scss/**/*.scss", css);
} 

const start = gulp.parallel(css, watchFiles, browserSync);

exports.default = start;