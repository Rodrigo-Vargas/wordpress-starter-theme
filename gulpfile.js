const gulp           = require("gulp");
const plumber        = require("gulp-plumber");
const sass           = require("gulp-sass");

function css() {
    return gulp
       .src("./src/scss/style.scss")
       .pipe(plumber())
       .pipe(sass({ outputStyle: "expanded" }))
       .on("error", sass.logError)
       .pipe(gulp.dest("./"));
}

function watchFiles() {
    gulp.watch("src/scss/**/*.scss", css);
} 

const start = gulp.parallel(css, watchFiles);

exports.default = start;