/**
 * Created by yotam on 10/6/16.
 */
'use strict';

var gulp    = require('gulp');
var elixir  = require('laravel-elixir');
var css     = require('./gulpfile');

var Task = elixir.Task;

elixir.extend('cssrtl', function(source, dest, postfix) {

    var config = elixir.config;

    source = source || config.publicPath + '/assets/styles/default.css';
    dest = dest || config.publicPath + '/assets/styles';

    new Task('css-rtl', function() {
        css(source, dest, postfix);
    })
    .watch(source);

});


/**
 * usage:
 *
    elixir(function(mix) {
        mix.cssrtl('css.css', 'public/assets/styles');
    });
 *
 */
