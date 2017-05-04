
let gulp = require('gulp');

/**
 * GULP MAIN TASKS :
 *     - $gulp css (compiles scss and beautifies output)
 *     - $gulp js (compiles all js files, templates and uglifies)
 *     - $gulp dev (compiles scss, js and watches for changes)
 */

let tasks = {
    concat:   require('./gulp-tasks/concat.js'),
    css:      require('./gulp-tasks/css.js'),
    dev:      require('./gulp-tasks/dev.js'),
    js:       require('./gulp-tasks/js.js'),
    babelify: require('./gulp-tasks/babelify.js'),
    watch:    require('./gulp-tasks/watch.js'),
    font:     require('./gulp-tasks/icons.js')
};


gulp.task('babelify', tasks.babelify);
gulp.task('concat', tasks.concat);



/**
 * ======== css ========
 * compass
 * cssbeautify
 */
gulp.task('css',  tasks.css);

/**
 * ======== js ========
 * concat
 * babelify
 * uglify
 */
gulp.task('js',  tasks.js);

/**
 * ======== dev ========
 * css
 * concat
 * babelify
 * watch
 */
gulp.task('dev', tasks.dev);


/**
 * ======== font ========
 * iconfont
 * css
 */
gulp.task('font', tasks.font);


gulp.task("watch", tasks.watch);
gulp.task("default", tasks.dev);