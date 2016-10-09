/**
 * Created by yotam on 10/6/16.
 */
'use strict';

var gulp    = require('gulp');
var util    = require('gulp-util');
var rename  = require('gulp-rename');
var rtl     = require('./rtlcss-engine');

/**
 * source - the file name to process
 * dest - the output folder
 * postfix - will be added to the output file name, i.e default.css will be default-{postfix}.css
 */
gulp.task('cssrtl', function() {
    process(util.env.source, util.env.dest, util.env.postfix);
});


function process(source, dest, postfix) {
    source  = source ? source : 'default.css';
    dest    = dest ? dest : './';

    if(typeof postfix === 'undefined') {
        postfix = '-rtl';
    }
    else {
        postfix = postfix.length ? '-' + postfix : postfix;
    }

    return gulp.src(source)
        .pipe( rtl() )
        .pipe(rename(function (path) {
            path.basename += postfix;
        }))
        .pipe( gulp.dest(dest) );
}

module.exports = process;