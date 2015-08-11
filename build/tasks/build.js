var gulp = require('gulp');
var jspm = require('jspm');
var runSequence = require('run-sequence');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var to5 = require('gulp-babel');
var paths = require('../paths');
var compilerOptions = require('../babel-options');
var assign = Object.assign || require('object.assign');
//var through2 = require('through2');
//var concat = require('gulp-concat');
//var insert = require('gulp-insert');
//var rename = require('gulp-rename');
//var tools = require('aurelia-tools');
var less = require('gulp-less');

/*gulp.task('build-index', function () {
    var importsToAdd = [];
    var files = ['index.js'].map(function (file) {
        return paths.root + file;
    });

    return gulp.src(files)
        .pipe(through2.obj(function (file, enc, callback) {
            file.contents = new Buffer(tools.extractImports(file.contents.toString("utf8"), importsToAdd));
            this.push(file);
            return callback();
        }))
        .pipe(concat('index.js'))
        .pipe(insert.transform(function (contents) {
            return tools.createImportBlock(importsToAdd) + contents;
        }))
        .pipe(gulp.dest(paths.output));
});*/

gulp.task('build-es6', function () {
    return gulp.src(paths.output + 'index.js')
        .pipe(gulp.dest(paths.output + 'es6'));
});

gulp.task('build-commonjs', function () {
    return gulp.src(paths.output + 'index.js')
        .pipe(to5(assign({}, compilerOptions, {
            modules: 'common'
        })))
        .pipe(gulp.dest(paths.output + 'commonjs'));
});

gulp.task('build-amd', function () {
    return gulp.src(paths.output + 'index.js')
        .pipe(to5(assign({}, compilerOptions, {
            modules: 'amd'
        })))
        .pipe(gulp.dest(paths.output + 'amd'));
});

// transpiles changed es6 files to SystemJS format
// the plumber() call prevents 'pipe breaking' caused
// by errors from other gulp plugins
// https://www.npmjs.com/package/gulp-plumber
gulp.task('build-system', function () {
    return gulp.src(paths.source)
        .pipe(plumber())
        .pipe(changed(paths.output, {
            extension: '.js'
        }))
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        .pipe(to5(assign({}, compilerOptions, {
            modules: 'system'
        })))
        .pipe(sourcemaps.write({
            includeContent: false,
            sourceRoot: paths.sourceMapRelativePath
        }))
        .pipe(gulp.dest(paths.output));
});

// copies changed html files to the output directory
gulp.task('build-html', function () {
    return gulp.src(paths.html)
        .pipe(changed(paths.output, {
            extension: '.html'
        }))
        .pipe(gulp.dest(paths.output));
});

gulp.task('copy-test-html', function () {
    return gulp.src('examples/test.html')
        .pipe(changed(paths.output, {
            extension: '.html'
        }))
        .pipe(gulp.dest(paths.output));
});




gulp.task('build-less', function () {
    return gulp.src('./src/less/components/*.less')
        .pipe(less())
        .pipe(gulp.dest('./styles/components'));
});


gulp.task('bundle-jspm', function () {

    var bundles = paths.bundles;

    var running = Object.keys(bundles).map(function (key) {
        var bundle = bundles[key];
        return jspm.bundle(bundle.expr, paths.output + bundle.out, bundle.options);
    });

    return Promise.all(running);
});


/*gulp.task('build-dts', function () {
    return gulp.src(paths.output + 'index.d.ts')
        .pipe(rename(paths.packageName + '.d.ts'))
        .pipe(gulp.dest(paths.output + 'es6'))
        .pipe(gulp.dest(paths.output + 'commonjs'))
        .pipe(gulp.dest(paths.output + 'amd'))
        .pipe(gulp.dest(paths.output + 'system'));
});*/

gulp.task('build', function (callback) {
    return runSequence(
        'clean',
        /*'build-index',*/
        [ /*'build-es6', 'build-commonjs', 'build-amd',*/ 'bundle-jspm', 'copy-test-html'],
        /*'build-dts',*/
        callback
    );
});
