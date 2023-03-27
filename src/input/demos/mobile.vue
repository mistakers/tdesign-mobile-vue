<template>
  <div class="tdesign-mobile-demo">
    <h1 class="title">Input 输入框</h1>
    <p class="summary">用于单行文本信息输入。</p>
    <tdesign-demo-block title="01 类型">
      <typeDemo />
    </tdesign-demo-block>
    <tdesign-demo-block title="02 组件状态" summary="输入框状态">
      <statusDemo />
    </tdesign-demo-block>
    <tdesign-demo-block title="03 组件样式" summary="内容位置">
      <specialDemo />
    </tdesign-demo-block>
  </div>
</template>

<script lang="ts" setup>
import typeDemo from './type.vue';
import statusDemo from './status.vue';
import specialDemo from './special.vue';
</script>

<style lang="less">
.t-input + .t-input {
  margin-top: 16px;
}
</style>
