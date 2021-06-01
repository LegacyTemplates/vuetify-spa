import { shallowMount, mount } from '@vue/test-utils';

import View1 from '@/view1/View1.vue';

describe('/view1 View.vue', () => {

    it ('should render correct contents', () => {
        const wrapper = shallowMount(View1);
        expect(wrapper.vm.$el.querySelector('.title')!.textContent).toBe('This is View 1');
    });

});
