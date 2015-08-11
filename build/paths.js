var path = require('path');
var fs = require('fs');

var appRoot = 'src/';
var pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));

var bundleOptions = {
    //mangle: false
};

module.exports = {
    root: appRoot,
    source: appRoot + '**/*.js',
    html: appRoot + '**/*.html',
    style: 'styles/**/*.css',
    output: 'dist2/',
    doc: './doc',
    e2eSpecsSrc: 'test/e2e/src/*.js',
    e2eSpecsDist: 'test/e2e/dist/',
    packageName: pkg.name,
    bundles: {
        asan: {
            expr: 'asan',
            out: 'asan.js',
            options: bundleOptions
        },
        examples: {
            expr: 'examples/my-input - asan',
            out: 'examples/my-input.js',
            options: bundleOptions
        }
    }
};
