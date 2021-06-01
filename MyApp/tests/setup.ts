//
// package.json has a section that instructs jest to
// read this setup/startup file.
//

import Vue from 'vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify);

// So we don't see unnecessary Vue warnings about production.
Vue.config.productionTip = false;

Vue.config.silent = true; // https://github.com/vuejs/vue-test-utils/issues/532