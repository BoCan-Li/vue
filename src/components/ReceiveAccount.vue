<template>
  <div>
    <a-input-group compact>
      <a-select v-model="type" style="width: 130px" @change="handleTypeChange">
        <a-select-option value="alipay">
          alipay
        </a-select-option>
        <a-select-option value="bank">
          bank
        </a-select-option>
      </a-select>
      <a-input
        style="width: calc(100% - 130px)"
        v-model="number"
        @change="handleNumberChange"
      />
    </a-input-group>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Object
    }
  },
  watch: {
    value(val) {
      Object.assign(this, val);
    }
  },
  data() {
    const { type, number } = this.value;
    return {
      type: type || "alipay",
      number: number || ""
    };
  },
  methods: {
    handleTypeChange(value) {
      this.$emit("change", { ...this.value, type: value });
    },
    handleNumberChange(e) {
      this.$emit("change", { ...this.value, number: e.target.value });
    }
  }
};
</script>

<style lang="less" scoped></style>
