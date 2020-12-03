<template>
  <div class="container" :style="backgroundDiv">
    <el-form ref="forms" :model="forms" label-width="80px">
      <el-form-item label="用户名">
        <el-input
          placeholder="请输入用户名"
          v-model="forms.username"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input
          placeholder="请输入密码"
          v-model="forms.password"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input
          placeholder="请确认密码"
          v-model="forms.confirmpwd"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input
          placeholder="请输入手机号"
          v-model="forms.phonenumber"
        ></el-input>
      </el-form-item>
      <el-form-item label="验证码">
        <el-input v-model="forms.tag"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button style="width: 100%" type="primary" @click="onSubmit(forms)"
          >立即注册</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import request from "@/http/request.js";
import URL from "@/http/url.js";
export default {
  name: "edit",
  data() {
    return {
      backgroundDiv: {
        backgroundImage: "url(" + require("../../static/bg.png"),
      },
      form: {
        username: "",
        password: "",
        confirmpwd: "",
        phonenumber: "",
        tag: "",
      },
    };
  },
  computed: {},
  methods: {
    onSubmit(forms) {
      function checkUname(data) {
        if (!forms.username) {
          this.$alert("用户名不能为空", "提示：", {
            confirmButtonText: "确定",
          });
        } else {
          return request({
            url: URL.login + "/name",
          }).then((res) => {
            if(res) {
              this.$alert("用户名已经存在！")
            }
            this.userdata = res.data;
            console.log(res.data);
            return res;
          });
        }
      }
    },
  },
};
</script>
<style>
.container {
  height: 100%;
  width: 100%;
  background: no-repeat no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.el-form {
  width: 30rem;
  margin: 0 auto;
}
.el-textarea__inner {
  height: 10rem;
}
</style>