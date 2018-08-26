var gulp = require("gulp");
var ts = require("gulp-typescript");
 
gulp.task("default", function () {
    return gulp.src("src/**/*.ts")
        .pipe(ts({
            noImplicitAny: true,
            outFile: "build.js"
        }))
        .pipe(gulp.dest("dist"));
});

gulp.task("scripts", function () {
    return gulp.src("src/**/*.ts")
        .pipe(ts({
            noImplicitAny: true,
            outDir: "./dist"
        }))
        .pipe(gulp.dest("dist"));
});

gulp.task("watch", function () {
    gulp.watch("src/**/*.ts", gulp.series("scripts"));
});