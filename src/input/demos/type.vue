<template>
  <tdesign-demo-block summary="基础输入框">
    <t-input label="标签文字" placeholder="请输入文字" />
    <t-input placeholder="请输入文字" />
    <t-input label="标签文字" placeholder="请输入文字" tips="辅助说明" />
  </tdesign-demo-block>
  <tdesign-demo-block summary="带字数限制输入框">
    <t-input label="标签文字" placeholder="请输入文字" :maxlength="10" tips="最大输入10个字符" />
    <t-input label="标签文字" placeholder="请输入文字" :maxcharacter="10" tips="最大输入10个字符，汉字算两个" />
  </tdesign-demo-block>
  <tdesign-demo-block summary="带操作输入框">
    <t-input label="标签文字" placeholder="请输入文字">
      <template #suffixIcon>
        <info-circle-filled-icon />
      </template>
    </t-input>
    <t-input label="标签文字" placeholder="请输入手机号码">
      <template #suffix>
        <t-button theme="primary" size="extra-small"> 操作按钮 </t-button>
      </template>
    </t-input>
    <t-input label="标签文字" placeholder="请输入文字">
      <template #suffixIcon>
        <user-avatar-icon />
      </template>
    </t-input>
  </tdesign-demo-block>
  <tdesign-demo-block summary="带图标输入框">
    <t-input label="标签文字" placeholder="请输入文字">
      <template #prefixIcon>
        <app-icon />
      </template>
    </t-input>
    <t-input placeholder="请输入文字">
      <template #prefixIcon>
        <app-icon />
      </template>
    </t-input>
  </tdesign-demo-block>
  <tdesign-demo-block summary="特定类型输入框">
    <t-input label="输入密码" type="password" default-value="520 TDesign" clearable />
    <t-input placeholder="输入验证码" label="验证码">
      <template #suffix>
        <div class="suffix">
          <div class="suffix--line"></div>
          <image
            class="image"
            src="https://wwcdn.weixin.qq.com/node/wework/images/202010241547.ac6876be9c.png"
            mode="heightFix"
            aria-role="img"
            aria-label="验证码"
          />
        </div>
      </template>
    </t-input>
    <t-input v-model="phoneNumber" label="手机号" placeholder="输入手机号码" :tips="tips">
      <template #suffix>
        <div style="display: flex; align-items: center">
          <div class="suffix--line"></div>
          <div class="verify" aria-role="button">发送验证码</div>
        </div>
      </template>
    </t-input>
    <t-input label="价格" align="right" placeholder="0.00" suffix="元" />
    <t-input label="数量" align="right" placeholder="填写个数" suffix="个" />
  </tdesign-demo-block>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { InfoCircleFilledIcon, UserAvatarIcon, AppIcon } from 'tdesign-icons-vue-next';

const phoneNumber = ref('17600600600');

const isPhoneNumber = computed(() => {
  if (/^[1][3,4,5,7,8,9][0-9]{9}$/.test(phoneNumber.value)) {
    return '';
  }
  return 'error';
});

const tips = computed(() => {
  if (!isPhoneNumber.value) {
    return '';
  }
  return '手机号输入不正确';
});
</script>

<style lang="less">
.suffix {
  display: flex;
  align-items: center;
}
.suffix--line {
  width: 1px;
  height: 24px;
  background-color: #f6f6f6;
  margin-right: 16px;
}

.image {
  width: 72px;
  height: 36px;
  display: block;
  margin-top: -6px;
  margin-bottom: -6px;
}

.verify {
  color: rgba(0, 82, 217, 1);
  font-size: 16px;
}
</style>
