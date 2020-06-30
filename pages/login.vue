<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: flames
 * @Date: 2020-06-13 16:10:30
 * @LastEditors: flames
 * @LastEditTime: 2020-06-14 01:56:09
-->
<template>
  <div class="wrap">
    <div class="login-container">
      <a-form :form="form" @submit="handleSubmit">
        <a-form-item
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
          label="姓名："
        >
          <a-input
            v-decorator="[
              'username',
              { rules: [{ required: true, message: '请输入用户名' }] }
            ]"
            placeholder="请输入用户名"
          />
        </a-form-item>
        <a-form-item
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
          label="密码："
        >
          <a-input
            v-decorator="[
              'password',
              {
                rules: [{ required: true, message: '请输入密码' }]
              }
            ]"
            placeholder="请输入密码"
          />
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
          <a-button type="primary" html-type="submit">
            Submit
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script type="text/javascript">
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 }
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 }
};
export default {
  layout: "layout",
  auth: false,
  head: {
    title: "login"
  },
  loading: { color: "#ff000" },
  props: {},
  data() {
    return {
      formItemLayout,
      formTailLayout,
      form: this.$form.createForm(this, { name: "dynamic_rule" })
    };
  },
  components: {},
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          /*   this.$store
            .dispatch("user/login", values)
            .then(({ code, msg }) => {
              if (code === 1) {
                this.$message.success(msg);
                this.$router.push(this.$route.query.redirect || "/");
              } else {
                this.$message.error(msg);
              }
            })
            .catch(err => this.$message.error(err)); */
          try {
            this.$auth.loginWith("local", { data: values }).then(res => {
              if (res.data.code === 1)
                this.$router.push(this.$route.query.redirect || "/");
            });
          } catch (err) {
            console.log(err);
          }
        }
      });
    }
  },
  computed: {
    state() {
      return JSON.stringify(this.$auth.$state, undefined, 2);
    }
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url("../static/img/wallhaven-95o71x.jpg");
  background-size: cover;
  .login-container {
    position: absolute;
    width: 380px;
    padding: 20px;
    left: 50%;
    top: 50%;
    opacity: 0.9;
    border-radius: 4px;
    background-color: #fff;
    transform: translate(-50%, -50%);
  }
}
</style>
