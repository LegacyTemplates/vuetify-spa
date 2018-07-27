import Vue from 'vue';
import { createLocalVue, shallowMount, mount } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';

import Home from '@/home/Home.vue';

describe('Home.vue', () => {
    var localVue;
    const router = new VueRouter({ routes: [{ path: '/', component: Home }] });

    beforeEach(() => {
        localVue = createLocalVue();
        localVue.use(VueRouter);
        localVue.use(Vuetify);
    });
      
    it ('should have correct data', () => {
        const wrapper = shallowMount(Home);
        expect(wrapper.vm.result).toBe('');
    });

    it ('should render correct contents', (done) => {
        const wrapper = mount(Home, {
            localVue,
            router,
            propsData: { name: 'Vue' },
        });
        const vm = wrapper.vm;
        expect(vm.name).toBe('Vue');
        expect(vm.$el.querySelector('input').type).toBe('text');
        expect(vm.$el.querySelector('h2.result').textContent).toBe('');

        vm.result = 'Bye Vue';

        expect(vm.$el.querySelector('h2.result').textContent).toBe('Bye Vue');
        done();
    });

});
