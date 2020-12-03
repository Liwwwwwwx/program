<template>
  <div class="container" :style="backgroundDiv">
    <div class="name">
      <p>{{ $store.state.projectname }}</p>
    </div>
    <div class="land">
      <div>
        <!-- <p style="font-size: 46px; font-weight: solid">{{$store.state.projectname}}</p> -->
        <p style="font-size: 46px; font-weight: solid">{{ Timenow }}</p>
        <p style="font-size: 10px">
          {{ Datenow }}
          <span>{{ Weeknow }}</span>
        </p>
      </div>
      <div
        style="
          width: 250px;
          height: 100px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
        "
      >
        <el-input
          :placeholder="$store.state.username"
          v-model="userInfo.username"
        >
          <template
            v-slot:prefix
            class="el-input__icon el-icon-ali-user"
          ></template>
        </el-input>
        <el-input
          type="password"
          :placeholder="$store.state.password"
          v-model="userInfo.password"
        >
          <template
            v-slot:prefix
            class="el-input__icon el-icon-ali-password"
          ></template>
        </el-input>
      </div>
      <el-button
        style="width: 250px; margin: 0"
        type="primary"
        @click="loginsuccess()"
        >立即登陆</el-button
      >
      <el-button style="width: 250px; margin: 0" type="primary" @click="login()"
        >立即注册</el-button
      >
    </div>
  </div>
</template>

<script>
import { PathConfig } from "@/router/config";
export default {
  name: "login",
  data() {
    return {
      backgroundDiv: {
        backgroundImage: "url(" + require("../../static/bg.png"),
      },
      paths: PathConfig,
      Timenow: "",
      Datenow: "",
      Weeknow: "",
      userInfo: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    timeFormate(timeStamp) {
      let year = new Date(timeStamp).getFullYear();
      let month =
        new Date(timeStamp).getMonth() + 1 < 10
          ? "0" + (new Date(timeStamp).getMonth() + 1)
          : new Date(timeStamp).getMonth() + 1;
      let date =
        new Date(timeStamp).getDate() < 10
          ? "0" + new Date(timeStamp).getDate()
          : new Date(timeStamp).getDate();
      let hh =
        new Date(timeStamp).getHours() < 10
          ? "0" + new Date(timeStamp).getHours()
          : new Date(timeStamp).getHours();
      let mm =
        new Date(timeStamp).getMinutes() < 10
          ? "0" + new Date(timeStamp).getMinutes()
          : new Date(timeStamp).getMinutes();
      if (new Date(timeStamp).getDay() == 1) {
        this.Weeknow = "星期一";
      } else if (new Date(timeStamp).getDay() == 2) {
        this.Weeknow = "星期二";
      } else if (new Date(timeStamp).getDay() == 3) {
        this.Weeknow = "星期三";
      } else if (new Date(timeStamp).getDay() == 4) {
        this.Weeknow = "星期四";
      } else if (new Date(timeStamp).getDay() == 5) {
        this.Weeknow = "星期五";
      } else if (new Date(timeStamp).getDay() == 6) {
        this.Weeknow = "星期六";
      } else {
        this.Weeknow = "星期日";
      }
      this.Timenow = hh + ":" + mm;
      this.Datenow = year + "-" + month + "-" + date;
    },
    nowTimes() {
      this.timeFormate(new Date());
      setInterval(this.nowTimes, 30 * 1000);
    },
    loginsuccess() {
      this.$store.dispatch("loginIn", this.userInfo).then((res) => {
        if (res.data.isLogin) {
          let routePath = this.paths[1];
          this.$router.push(routePath);
        } else {
          this.$alert("用户名或者密码错误，请重新输入", "提示：", {
            confirmButtonText: "确定",
          });
        }
      });
    },
    login() {
      this.$router.push('/signIn');
    },
  },
  created() {
    this.nowTimes();
  },
  mounted() {
    this.nowTimes();
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
.name {
  width: 30%;
  height: 50px;
  font-size: 28px;
  font-weight: solid;
}
.land {
  width: 15%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
</style>