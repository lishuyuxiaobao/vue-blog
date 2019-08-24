<template>
  <div v-theme:column="'wide'" id="show-blogs">
    <h1>所有博客</h1>
    <input type="text" v-model="search" placeholder="Search your info ..." />
    <div v-for="(blog,index) in filterdBlogs" :key="index" class="single-blog">
      <router-link :to="'/blog/' + blog.id">
        <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
      </router-link>
      <!-- 可以手动定义过滤要求 通过 | 引用 -->
      <article>{{blog.body | to-subStr}}</article>
      <div class="blog-operation">
        <ul>
          <li>
            <router-link :to="'/editblog/' + blog.id">编辑</router-link>
          </li>
          <li>
            <router-link :to="''">删除</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import searchMixin from "../mixins/searchMixin";
export default {
  name: "ShowBlogs",
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  created() {
    this.$axios.get("/posts").then(res => {
      //   console.log(res);
      this.blogs = res.data;
      //   console.log(Math.random().toString(16));
    });
  },

  //局部指令的定义
  directives: {
    rainbow: {
      bind(el, binding, vnode) {
        //将随机的0-1数字转为16进制 从第2位开始切割
        el.style.color =
          "#" +
          Math.random()
            .toString(16)
            .slice(2, 8);
      }
    }
  },
  filters: {
    //这种方式不常用
    // "to-uppercase": function(value) {
    //   return value.toUpperCase();
    // }
    toUppercase(value) {
      return value.toUpperCase();
    }
  },
  mixins: [searchMixin]
};
</script>

<style scoped>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eeeeee;
}
input[type="text"] {
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
}
.blog-operation {
  width: 100%;
  box-sizing: border-box;
  text-align: right;
}
.blog-operation ul {
  list-style-type: none;
}
.blog-operation li {
  display: inline;
  margin-right: 20px;
  color: brown;
}
</style>