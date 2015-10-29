var gulp = require('gulp');
var del = require('del');
var runSequence = require('run-sequence');
var webpack = require('webpack-stream');
var webpack_config = require('./webpack.config.js');

gulp.task('clean', function () {
    return del([
        'dist/**/*.js*'
    ]);
});

gulp.task('build', function () {
    return gulp.src('./main/app.ts')
        .pipe(webpack(webpack_config))
        .pipe(gulp.dest('dist/'));
});

gulp.task('clean-build', function(callback) {
    runSequence('clean', 'build', callback);
});

gulp.task('default', ['clean-build']);
