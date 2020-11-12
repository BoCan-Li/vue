<template>
  <div>
    <a-drawer
      placement="right"
      :closable="false"
      :visible="visible"
      @close="onClose"
      width="300px"
    >
      <template v-slot:handle>
        <div class="handle" @click="visible = !visible">
          <a-icon :type="visible ? 'close' : 'setting'"></a-icon>
        </div>
      </template>
      <div>
        <h2>整体风格定制</h2>
        <a-radio-group
          :value="$route.query.navTheme || 'dark'"
          @change="e => handleSettingChange('navTheme', e.target.value)"
        >
          <a-radio value="dark">
            黑色
          </a-radio>
          <a-radio value="light">
            白色
          </a-radio>
        </a-radio-group>
        <h2>导航模式</h2>
        <a-radio-group
          :value="$route.query.navLayout || 'left'"
          @change="e => handleSettingChange('navLayout', e.target.value)"
        >
          <a-radio value="left">
            左侧
          </a-radio>
          <a-radio value="top">
            顶部
          </a-radio>
        </a-radio-group>
      </div>
    </a-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    };
  },
  methods: {
    onClose() {
      this.visible = false;
    },
    handleSettingChange(key, value) {
      this.$router.push({ query: { ...this.$route.query, [key]: value } });
    }
  }
};
</script>

<style lang="less" scoped>
.handle {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 300px;
  width: 48px;
  height: 48px;
  line-height: 48px;
  background: #1890ff;
  text-align: center;
  font-size: 20px;
  color: #fff;
  border-radius: 3px 0 0 3px;
}
</style>
