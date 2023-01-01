import { shallowMount } from '@vue/test-utils';
import Test from '../src/components/Test.vue';

test('Test', () => {
  // render the component
  const wrapper = shallowMount(Test);
  // should not allow for `username` less than 7 characters, excludes whitespace
  wrapper.setData({ username: ' '.repeat(7) });

  // assert the error is rendered
  expect(wrapper.find('.error').exists()).toBe(true);
});
