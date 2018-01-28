import { expect } from 'chai';
import Vue from 'vue';
import { shallow } from '@vue/test-utils'

import Home from './Home.vue';

shallow(Home, {
  stubs: ['router-link', 'router-view']
})

const ctor = (propsData = null) => new Home({ propsData }).$mount() as Home;

describe('Home.vue', () => {

    it ('should have correct data', function () {
        const vm = ctor();
        expect(vm.result).undefined;
    })

    it ('should render correct contents', done => {
        const vm = ctor({ name: 'Vue' });
        expect(vm.name).eq('Vue');
        expect(vm.$el.querySelector('input').type).eq('text');
        expect(vm.$el.querySelector('h2.result').textContent).eq('');

        vm.result = "Bye Vue";

        Vue.nextTick(() => {
            expect(vm.$el.querySelector('h2.result').textContent).eq('Bye Vue');
            done();
        });
    })

})
