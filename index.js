'use strict';

var Pattern = require('hexo-util').Pattern;
hexo.extend.processor.register('_metas/*path', require('./lib/processor.js')(hexo));