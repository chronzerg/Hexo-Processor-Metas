'use strict';

var Promise = require('bluebird');
var pathFn = require('path');

module.exports = function (ctx) {
    return function processor (file) {
        file.read().then(function(content) {
            var metas = ctx.locals.get('metas') || {};
            var path = file.path;
            var name = pathFn.basename(path, pathFn.extname(path));
            metas[name] = content;
            ctx.locals.set('metas', metas);
        });
    }
};