<template>
  <div class="button-demo">
    <t-button size="large" theme="primary" block>强按钮</t-button>
    <t-button size="large" theme="primary" block variant="outline"> 弱按钮 </t-button>
    <t-button size="large" variant="outline" block>次按钮</t-button>
    <t-button size="large" theme="primary" variant="outline" :icon="iconFunc" block> 带图标按钮 </t-button>
    <t-button size="large" theme="danger" block>强警告按钮</t-button>
    <t-button size="large" theme="danger" variant="outline" block> 弱警告按钮 </t-button>
  </div>

  <div style="background: #a6a6a6; padding: 8px 16px; margin-bottom: 16px">
    <t-button size="large" variant="outline" ghost block> 幽灵按钮 </t-button>
  </div>
  <div class="margin-button">
    <t-button size="large" theme="primary" variant="text" block> 文字按钮 </t-button>
  </div>
  <div class="no-border-radius margin-button">
    <t-button size="large" theme="primary" block> 通栏按钮 </t-button>
  </div>
  <div class="no-border-radius no-border flex margin-button">
    <t-button size="large" variant="outline" block>次按钮</t-button>
    <t-button size="large" theme="primary" block>主按钮</t-button>
  </div>

  <div class="button-demo align-center margin-right">
    <div class="flex align-center margin-right">
      <t-button theme="primary" :icon="iconFunc">带图标按钮</t-button>
      <t-button theme="primary" shape="round" :icon="iconFunc">带图标按钮</t-button>
    </div>
    <div class="flex align-center margin-right">
      <t-button theme="primary" shape="square" :icon="iconFunc"></t-button>
      <t-button theme="primary" shape="circle" :icon="iconFunc"></t-button>
    </div>
  </div>

  <div class="flex align-center margin-right button-demo-loading">
    <div class="button-demo flex">
      <t-button size="large" shape="square" theme="primary" loading></t-button>
      <t-button size="large" theme="primary" loading>加载中...</t-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { h } from 'vue';
import { AppIcon as TIconApp } from 'tdesign-icons-vue-next';

const iconFunc = () => h(TIconApp);
</script>
