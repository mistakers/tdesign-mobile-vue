/**
 * 该文件为由脚本 `npm run test:demo` 自动生成，如需修改，执行脚本命令即可。请勿手写直接修改，否则会被覆盖
 */

import { mount } from '@vue/test-utils';
import baseVue from '@/badge/demos/base.vue';
import mobileVue from '@/badge/demos/mobile.vue';
import sizeVue from '@/badge/demos/size.vue';
import themeVue from '@/badge/demos/theme.vue';

const mapper = {
  baseVue,
  mobileVue,
  sizeVue,
  themeVue,
};

describe('Badge', () => {
  Object.keys(mapper).forEach((demoName) => {
    it(`Badge ${demoName} demo works fine`, () => {
      const wrapper = mount(mapper[demoName]);
      expect(wrapper.element).toMatchSnapshot();
    });
  });
});
