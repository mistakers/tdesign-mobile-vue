import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import TabBar from '../tab-bar.vue';
import TabBarItem from '../tab-bar-item.vue';
import { nextTick, ref } from 'vue';

const transitionStub = () => ({
  render() {
    return this.$options._renderChildren;
  },
});

const list = [
  {
    name: 'label_1',
    text: '标签一',
    icon: undefined,
    value: '1',
  },
  {
    name: 'label_2',
    text: '标签二',
    icon: undefined,
    value: '2',
  },
  {
    name: 'label_3',
    text: '此处展开',
    icon: undefined,
    value: '3',
    subTabBar: [
      {
        name: 'spread_1',
        text: '展开项一',
        icon: undefined,
        value: '3-1',
      },
      {
        name: 'spread_2',
        text: '展开项二',
        icon: undefined,
        value: '3-2',
      },
      {
        name: 'spread_3',
        text: '展开项三',
        icon: undefined,
        value: '3-3',
      },
    ],
  },
];

describe('TabBar', () => {
  describe('props', () => {
    it('bordered', async () => {
      const wrapper = mount(TabBar, {
        shallow: true,
      });
      expect(wrapper.classes()).toContain('t-tab-bar--bordered');

      await wrapper.setProps({ bordered: false });
      expect(wrapper.classes()).not.toContain('t-tab-bar--bordered');
    });

    it('fixed', async () => {
      const wrapper = mount(TabBar, {
        shallow: true,
      });
      expect(wrapper.classes()).toContain('t-tab-bar--fixed');

      await wrapper.setProps({ fixed: false });
      expect(wrapper.classes()).not.toContain('t-tab-bar--fixed');
    });

    it('defaultValue', async () => {
      const wrapper = mount({
        render: () => (
          <TabBar defaultValue={'2'}>
            {list.map((item) => {
              return <TabBarItem {...item}>{item.text}</TabBarItem>;
            })}
          </TabBar>
        ),
      });

      expect(wrapper.findAll('.t-tab-bar-item')).toHaveLength(list.length);
      expect(wrapper.find('[aria-selected="true"]').attributes('text')).toEqual('标签二');
    });

    // it('snapshot', () => {
    //   const icon = () => <TIconApp />;
    //   const wrapper = mount({
    //     render: () => (
    //       <TabBar>
    //         {list.map((item) => {
    //           return <TabBarItem {...item} icon={icon} badgeProps={{ count: 1 }} />;
    //         })}
    //       </TabBar>
    //     ),
    //   });
    //   expect(wrapper.element).toMatchSnapshot();
    // });
  });

  describe('events', () => {
    it('click to change', async () => {
      const onChange = vi.fn();
      const value = ref('1');
      const wrapper = mount({
        render: () => (
          <TabBar v-model={value.value} onChange={onChange}>
            {list.map((item) => {
              return <TabBarItem {...item} />;
            })}
          </TabBar>
        ),
      }, {
        global: {
          stubs: {
            transition: transitionStub
          }
        }
      });

      // 从 bar1 切到 bar2
      const bar2 = wrapper.find('[name="label_2"] > .t-tab-bar-item__content');
      expect(onChange).toHaveBeenCalledTimes(0);
      await bar2.trigger('click');
      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenLastCalledWith('2');

      // 从 bar2 切到 bar3
      const bar3 = wrapper.find('[name="label_3"] > .t-tab-bar-item__content');
      await bar3.trigger('click');
      expect(onChange).toHaveBeenCalledTimes(2);
      expect(onChange).toHaveBeenLastCalledWith(['3']);

      // 点击 spread
      const bar3_1 = wrapper.find('[name="label_3"] .t-tab-bar-item__spread-item');
      await bar3_1.trigger('click');
      expect(onChange).toHaveBeenCalledTimes(3);
      expect(onChange).toHaveBeenLastCalledWith(['3', '3-1']);
      expect(wrapper.find('[name="label_3"]').find('.t-tab-bar-item__spread-item').exists()).toBe(false);
    });
  });
});
