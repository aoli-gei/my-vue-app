<!-- 首页 -->
<template>
  <el-form :model="form" class="login-container">
    <h3>系统登录</h3>
    <el-select v-model="value" placeholder="选择你的身份">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <el-form-item>
      <el-input type="input" placeholder="请输入账号"> </el-input>
    </el-form-item>
    <el-form-item>
      <el-input type="password" placeholder="请输入密码"> </el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="login">登录</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import { ref } from "vue";
export default {
  name: "login",
  data() {
    return {
      form: {},
      reles: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            message: "用户名长度不小于3位",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
        ],
      },
      value: ref(""),
      options: [
        {
          value: "Option1",
          label: "我是管理员",
        },
        {
          value: "Option2",
          label: "我是网点负责人",
        },
        {
          value: "Option3",
          label: "我是快递员",
        },
        {
          value: "Option4",
          label: "我是普通用户",
        },
      ],
    };
  },
  methods: {
    login() {
    },
  },
};
</script>
<style lang="less" scoped>
.login-container {
  border-radius: 15px;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background-color: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
  h3 {
    text-align: center;
    margin-bottom: 20px;
    color: #505450;
  }
  :deep(.el-form-item__content) {
    justify-content: center;
  }
  :deep(.el-select){
    width: 100%;
    margin-bottom: 18px;
  }
}
</style>