const gulp = require("gulp");
const browserSync = require("browser-sync");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const autoprefixer = require("gulp-autoprefixer");
// const terser       = require('gulp-terser');
const concat = require("gulp-concat");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const imagemin = require("gulp-imagemin");
// const htmlmin      = require('gulp-htmlmin');

gulp.task("server", function () {
  browserSync.init({
    proxy: "quiziz",
  });

  gulp.watch("src/*.php").on("change", function () {
    browserSync.reload();
  });

  gulp.watch("src/js/*.js").on("change", function () {
    browserSync.reload();
  });
  // gulp.watch("src/actions/*.php").on('change', function () {
  //     browserSync.reload();
  // });
});

gulp.task("styles", function () {
  return gulp
    .src("src/sass/**/*.+(scss|sass)")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(rename({ suffix: ".min", prefix: "" }))
    .pipe(autoprefixer())
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("dist/css"))
    .pipe(browserSync.stream());
});

gulp.task("watch", function () {
  gulp.watch("src/sass/**/*.+(scss|sass|css)", gulp.parallel("styles"));
  gulp.watch("src/*.php").on("change", gulp.parallel("php"));
  gulp.watch("src/js/*.js").on("change", gulp.parallel("scripts"));
});

// gulp.task('html', function () {
//     return gulp.src('src/*.html')
//         .pipe(htmlmin({ collapseWhitespace: true }))
//         .pipe(gulp.dest('dist'));
// });

gulp.task("phpActions", function () {
  return gulp.src("src/actions/*.*").pipe(gulp.dest("dist/actions")).on("error", console.error);
});

gulp.task("uploads", function () {
  return gulp.src("src/uploads/*.*").pipe(gulp.dest("dist/uploads"));
});

gulp.task("quizBuild", function () {
  return gulp.src("src/quizBuild/*.*").pipe(gulp.dest("dist/quizBuild"));
});

gulp.task("php", function () {
  return (
    gulp
      .src("src/*.php")
      // .pipe(concat('index.php'))
      .pipe(gulp.dest("dist"))
  );
});

// gulp.task('scripts', function () {
//     return gulp.src("src/js/*.js")
//         // .pipe(concat('quiz.min.js'))
//         // .pipe(phpmin({ collapseWhitespace: true }))
//         .pipe(gulp.dest('dist'));
// });

gulp.task("scripts", function () {
  return (
    gulp
      .src("src/js/*.js")
      .pipe(babel())
      // .pipe(concat('quiz.min.js'))
      .pipe(uglify())
      .on("error", function (err) {
        console.error("Error in concatenating or transpiling:", err.toString());
      })
      .pipe(gulp.dest("dist/js"))
  );
});

gulp.task("fonts", function () {
  return gulp.src("src/fonts/**/*").pipe(gulp.dest("dist/fonts"));
});

gulp.task("icons", function () {
  return gulp.src("src/icons/**/*").pipe(gulp.dest("dist/icons"));
});

gulp.task("mailer", function () {
  return gulp.src("src/mailer/**/*").pipe(gulp.dest("dist/mailer"));
});

gulp.task("images", function () {
  return gulp.src("src/images/**/*").pipe(imagemin()).pipe(gulp.dest("dist/images"));
});

gulp.task(
  "default",
  gulp.parallel(
    "watch",
    "server",
    "styles",
    "phpActions",
    "uploads",
    "quizBuild",
    "php",
    "scripts",
    "fonts",
    "icons",
    "mailer",
    "images"
  )
);
