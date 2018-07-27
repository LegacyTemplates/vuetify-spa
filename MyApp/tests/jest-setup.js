//
// package.json has a section that instructs jest to
// read this setup/startup file.
//

import Vue from 'vue';

// DON'T DO THIS or you'll have problems like <v-btn :to="..."> rendering
// as <router-link> instead of <a href="..."> on the unit tests.
// See tests/Foo.spec.js to learn how to use Vuetify in the unit tests.
//import Vuetify from 'vuetify';
//Vue.use(Vuetify); // NO, DON'T DO THIS.

// You may not need this. Uncomment only if you see some sort of
// regeneratorRuntime error.
//import 'babel-polyfill';

// So we don't see unnecessary Vue warnings about production.
Vue.config.productionTip = false;

Vue.config.silent = true; // https://github.com/vuejs/vue-test-utils/issues/532