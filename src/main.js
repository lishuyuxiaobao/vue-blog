import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

// 全局引用axios
import axios from 'axios'
import myRouter from './router'

Vue.config.productionTip = false

//使用VueRouter路由
Vue.use(VueRouter);

//实例化VueRouter  -->  挂载到vue实例化里
const router = new VueRouter({
  mode: "history",
  routes: myRouter

})

//配置axios访问的根路径
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

//配置vue原型  (在任何组建中都可以使用全局的axios请求)
Vue.prototype.$axios = axios;

//封装自定义全局指令（无参数）
Vue.directive("rainbow", {
  bind(el, binding, vnode) {
    //将随机的0-1数字转为16进制 从第2位开始切割
    el.style.color = "#" + Math.random().toString(16).slice(2, 8);
  }
})

//封装自定义全局指令（有参数）
Vue.directive("theme", {
  bind(el, binding, vnode) {
    if (binding.value == "wide") {
      el.style.maxWidth = "1260px";
    } else if (binding.value == "narrow") {
      el.style.maxWidth = "560px";
    }

    if (binding.arg == "column") {
      el.style.background = "#ddd";
      el.style.padding = "120px";
    }
  }
})


//自定义全局过滤器
Vue.filter("to-uppercase", value => {
  return value.toUpperCase();
})

Vue.filter("to-subStr", value => {
  return value.substring(0, 100) + "...";
})


new Vue({
  // 挂载路由
  router,
  render: h => h(App)
}).$mount('#app')
