'use strict';

var rtlcss = require('rtlcss');
var through = require('through2');
var gutil = require('gulp-util');

var PluginError = gutil.PluginError;

// consts
const PLUGIN_NAME = 'gulp-rtlcss';

// plugin level function (dealing with files)
function rtlCss(destName) {
    // creating a stream through which each file will pass
    // returning the file stream
    return through.obj(function (file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        if (file.isBuffer()) {
            file.contents = new Buffer(rtlcss.process(file.contents));
            file.name = destName ? destName : 'rtlcss';
        }

        // make sure the file goes through the next gulp plugin
        this.push(file);
        // tell the stream engine that we are done with this file
        cb();
    });
}


module.exports = rtlCss;