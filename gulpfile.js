const gulp         = require('gulp');
const browserSync  = require('browser-sync');
const sass         = require('gulp-sass')(require('sass'));
const cleanCSS     = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
// const terser       = require('gulp-terser');
const concat       = require('gulp-concat');
const rename       = require("gulp-rename");
const imagemin     = require('gulp-imagemin');
// const htmlmin      = require('gulp-htmlmin');

gulp.task('server', function() {

    browserSync.init({
        proxy: "quiziz",
    });

    gulp.watch("src/*.php").on('change', function () {
        browserSync.reload();
      });

    // gulp.watch("src/actions/*.php").on('change', function () {
    //     browserSync.reload();
    // });
});

gulp.task('styles', function() {
    return gulp.src("src/sass/**/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch("src/sass/**/*.+(scss|sass|css)", gulp.parallel('styles'));
    gulp.watch("src/*.php").on('change', gulp.parallel('php'));
});

// gulp.task('html', function () {
//     return gulp.src('src/*.html')
//         .pipe(htmlmin({ collapseWhitespace: true }))
//         .pipe(gulp.dest('dist'));
// });


// не работает
// gulp.task('phpActions', function () {
//     console.log('Start copying PHP files...');
//     return gulp.src("src/actions/*.php")
//         .pipe(gulp.dest("dist/actions"))
//         .on('end', function () {
//             console.log('PHP files copied successfully.');
//         });
// });

gulp.task('uploads', function () {
    return gulp.src('src/uploads/*.*')
        .pipe(gulp.dest("dist/uploads"));
})

gulp.task('php', function () {
    return gulp.src('src/*.php')
        // .pipe(concat('index.php'))
        .pipe(gulp.dest('dist'));
});


// gulp.task('scripts', function () {
//     return gulp.src("src/js/*.js")
//         // .pipe(concat('quiz.min.js'))
//         // .pipe(phpmin({ collapseWhitespace: true }))
//         .pipe(gulp.dest('dist'));
// });

gulp.task('scripts', function () {
    return gulp.src("src/js/*.js")
        // .pipe(concat('quiz.min.js'))
        // .pipe(terser())
        .pipe(gulp.dest("dist/js"));
});

gulp.task('fonts', function () {
    return gulp.src("src/fonts/**/*")
        .pipe(gulp.dest("dist/fonts"));
});

gulp.task('icons', function () {
    return gulp.src("src/icons/**/*")
        .pipe(gulp.dest("dist/icons"));
});

gulp.task('mailer', function () {
    return gulp.src("src/mailer/**/*")
        .pipe(gulp.dest("dist/mailer"));
});

gulp.task('images', function () {
    return gulp.src("src/images/**/*")
        .pipe(imagemin())
        .pipe(gulp.dest("dist/images"));
});

gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'uploads', 'php', 'scripts', 'fonts', 'icons', 'mailer', 'images'));