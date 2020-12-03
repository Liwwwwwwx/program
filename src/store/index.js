import Vue from 'vue'
import Vuex from 'vuex'
import request from '@/http/request.js'
import URL from '@/http/url.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        projectname: "民航信息管理系统",
        projectEnglishName: "Civil aviation information management system",
        //noe active menu
        activeMenuIndex: "1",
        //if the menu collapse
        menuCollapse: false,
        menuWidth: 4,
        pageWidth: 20,

        logosrc: require("@/assets/logo.png"),
        adminsrc: require("@/assets/admin.png"),

        username: "用户名",
        password: "密码",
        userposition: "系统管理员",
        isLogin: false,
        data: [],
    },
    mutations: {
        pageChange(state, index) {
            state.activeMenuIndex = index;
        },
        setData(state, payload) {
            state.data = payload
        },
        setUser(state, payload) {
            state.username = payload.username;
            state.password = payload.password;
            localStorage.setItem("isLogin", payload.isLogin)
            state.isLogin = localStorage.getItem("isLogin");
            console.log(state.isLogin)
        }
    },
    actions: {
        async loginIn({
            commit
          }, data) {
            return await request({
              url: URL.login + "/land",
              method: "POST",
              data: {
                name: data.username,
                psw: data.password
              }
            }).then(res => {
              commit('setUser', res.data);
              console.log(res.data.isLogin)
              return res;
            });
          },
      
    }
})