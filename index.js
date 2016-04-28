'use strict';

hexo.extend.processor.register('_meta/*path', require('./lib/processor.js')(hexo));