<template>
  <a-form :layout="form.layout" :model="form" v-bind="formItemLayout">
    <a-form-item label="Form Layout">
      <a-radio-group v-model="form.layout">
        <a-radio-button value="horizontal"> Horizontal </a-radio-button>
        <a-radio-button value="vertical"> Vertical </a-radio-button>
        <a-radio-button value="inline"> Inline </a-radio-button>
      </a-radio-group>
    </a-form-item>
    <a-form-item
      label="Field A"
      :validate-status="validateStatus"
      :help="helpText"
    >
      <a-input
        v-model="form.fieldA"
        placeholder="input placeholder"
        validate-status="validating"
        help="The information is being validated..."
      />
    </a-form-item>
    <a-form-item label="Field B">
      <a-input v-model="form.fieldB" placeholder="input placeholder" />
    </a-form-item>
    <a-form-item :wrapper-col="buttonItemLayout.wrapperCol">
      <a-button type="primary" @click="handleClick"> Submit </a-button>
    </a-form-item>
  </a-form>
</template>
<script>
export default {
  data() {
    return {
      form: {
        layout: "horizontal",
        fieldA: "",
        fieldB: ""
      },
      validateStatus: "",
      helpText: ""
    };
  },
  watch: {
    "form.fieldA": {
      handler(value) {
        if (value.length < 5) {
          this.validateStatus = "error";
          this.helpText = "输入内容不能少于5个字符";
        } else {
          this.validateStatus = "";
          this.helpText = "";
        }
      },
      deep: true
    }
  },
  computed: {
    formItemLayout() {
      const { layout } = this.form;
      return layout === "horizontal"
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 }
          }
        : {};
    },
    buttonItemLayout() {
      const { layout } = this.form;
      return layout === "horizontal"
        ? {
            wrapperCol: { span: 14, offset: 4 }
          }
        : {};
    }
  },
  methods: {
    handleClick() {
      if (this.form.fieldA.length < 5) {
        this.validateStatus = "error";
        this.helpText = "输入内容不能少于5个字符";
      } else {
        this.validateStatus = "";
        this.helpText = "";
      }
    }
  }
};
</script>
