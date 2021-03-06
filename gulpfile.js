var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    jshint = require('gulp-jshint');

var paths = {
  scripts: ['public/js/**/*.js']
};

gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
});

gulp.task('lint', function () {
  gulp.src(paths.scripts)
    .pipe(jshint())
})

gulp.task('develop', function () {
  nodemon({ script: 'server.js', ext: 'html js', ignore: ['ignored.js'] })
    .on('start', ['lint'])
    .on('restart', ['lint'])
});

gulp.task('default', ['develop']);
