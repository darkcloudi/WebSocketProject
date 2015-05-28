var gulp = require('gulp');
var zip = require("gulp-zip");

gulp.task("war", function() {
    return gulp.src('src/main/webapp/**')
        .pipe(zip('archive.war'))
        .pipe(gulp.dest('./dist'));

})

gulp.task('default', ['war']);