<template>
  <t-input label="左对齐" placeholder="请输入文字" />
  <t-input label="居中" placeholder="请输入文字" align="center" />
  <t-input label="右对齐" placeholder="请输入文字" align="right" />
  <tdesign-demo-block summary="竖排样式">
    <t-input label="标签文字" layout="vertical" placeholder="请输入文字">
      <template #suffixIcon>
        <error-circle-filled-icon />
      </template>
    </t-input>
  </tdesign-demo-block>
  <tdesign-demo-block summary="非通栏样式">
    <t-input :style="style" label="标签文字" placeholder="请输入文字" />
  </tdesign-demo-block>
  <tdesign-demo-block summary="标签外置样式">
    <div :style="style2">
      <div class="input-example__label">标签文字</div>
      <t-input :style="style3" placeholder="请输入文字">
        <template #suffixIcon>
          <error-circle-filled-icon />
        </template>
      </t-input>
    </div>
  </tdesign-demo-block>
  <tdesign-demo-block summary="自定义样式输入框">
    <div :style="style4">
      <t-input label="标签文字" placeholder="请输入文字" />
    </div>
  </tdesign-demo-block>
</template>

<script lang="ts" setup>
import { ErrorCircleFilledIcon } from 'tdesign-icons-vue-next';

const style = 'border-radius: 6px; margin: 0 16px;';
const style2 = '--td-input-vertical-padding: 12px; background-color: #fff; padding: 16px 16px 8px;';
const style3 = 'border: 1px solid rgba(220,220,220,1); border-radius: 6px;';
const style4 =
  'padding-bottom: 48rpx; --td-input-bg-color: rgba(44, 44, 44, 1); --td-input-border-color: rgba(75, 75, 75, 1); --td-input-default-text-color: rgba(255, 255, 255, 1); --td-input-placeholder-text-color: rgba(255, 255, 255, 0.35); --td-input-label-text-color: rgba(255, 255, 255, 1);';
</script>

<style lang="less">
.input-example__label {
  color: rgba(0, 0, 0, 0.9);
  font-size: 12px;
  line-height: 20px;
  margin: 0 4px 8px;
}
</style>
