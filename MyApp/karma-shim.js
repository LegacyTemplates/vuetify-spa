Error.stackTraceLimit = Infinity;
import Vue from 'vue';
import 'es6-shim';
import 'babel-polyfill';
import Vuetify from 'vuetify';

import config from './package.json';

for (var k in config.karma.globals) {
    global[k] = config.karma.globals[k];
}

Vue.use(Vuetify);
Vue.config.productionTip = false;
Vue.config.ignoredElements = ['router-link'];

// require all test files (files that ends with .spec.ts)
var testsContext = require.context('./src', true, /\.spec\.ts/);
testsContext.keys().forEach(testsContext);
