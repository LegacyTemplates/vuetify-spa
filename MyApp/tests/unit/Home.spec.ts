import Vue from 'vue';
import { createLocalVue, shallowMount, mount } from '@vue/test-utils';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';

import Home from '@/home/Home.vue';

describe('Home.vue', () => {
    let localVue = createLocalVue();
    const vuetify = new Vuetify();
    const router = new VueRouter({ routes: [{ path: '/', component: Home }] });

    it ('should have correct data', () => {
        const wrapper = shallowMount<Home>(Home);
        expect(wrapper.vm.result).toBe('');
    });

    it ('should render correct contents', async () => {
        const wrapper = mount<Home>(Home, {
            localVue,
            vuetify,
            router,
            propsData: { name: 'Vue' },
        });
        const vm = wrapper.vm;
        expect(vm.name).toBe('Vue');
        expect(vm.$el.querySelector('input')!.type).toBe('text');
        expect(vm.$el.querySelector('h2.result')!.textContent).toBe('');

        vm.result = 'Bye Vue';
        await Vue.nextTick()

        expect(vm.$el.querySelector('h2.result')!.textContent).toBe('Bye Vue');
    });

});
