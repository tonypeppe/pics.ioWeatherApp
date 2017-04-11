
var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('node-notifier');
var notifier = require('node-notifier');
var server = require('gul-server-livereload');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var watch = require('gulp-watch');


//error messages

var notify = function (error) {
    var message = 'In: ';
    var title = 'Error: ';
    
    if (error.description) {
        title += error.description;
    } else if (error.message) {
        title += error.message;
    }
    
    if (error.filename) {
        var file = error.filename.split('/');
        message += file[file.length - 1];
    }
    
    if (error.lineNumber) {
        message += '\nOn Line: ' + error.lineNumber;
    }
    
    notifier.notify({title: title, message: message})
};