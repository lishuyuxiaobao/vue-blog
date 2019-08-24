<template>
  <div id="editblog">
    <!-- 写博客 -->
    <form v-show="!singleblog">
      <h3>第三天切换正在编辑博客</h3>
      <label>博客标题</label>
      <input type="text" v-model="blog.title" required />
      <label>博客内容</label>
      <textarea rows="5" v-model="blog.body"></textarea>

      <hr />

      <!-- 数据请求 -->
      <button @click.prevent="handlePost">保存</button>
      <router-link to="/">返回</router-link>
    </form>
    <table v-show="singleblog">
      <tr>
        <h3>您刚刚编辑的博客</h3>
      </tr>
      <tr>
        <label>博客编号</label>
      </tr>
      <tr>{{id}}</tr>
      <tr></tr>
      <tr>
        <label>博客标题</label>
      </tr>
      <tr>{{blog.title}}</tr>
      <tr>
        <label>博客内容</label>
      </tr>
      <tr>{{blog.body}}</tr>
      <tr>
        <router-link :to="'./editblog/' + id">继续编辑</router-link>
        <router-link :to="'/'">返回首页</router-link>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "EditBlog",
  data() {
    return {
      id: this.$route.params.id,
      blog: {},
      singleblog: false
    };
  },
  created() {
    this.$axios.get(`/posts/${this.id}`).then(res => {
      this.blog = res.data;
    });
  },
  methods: {
    handlePost() {
      this.$axios
        .post("/posts", {
          id: this.id,
          title: this.blog.title,
          body: this.blog.body,
          userId: 1
        })
        .then(res => {
          console.log(res);
        });
      this.singleblog = true;
    }
  }
};
</script>

<style scoped>
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}
button {
  margin-right: 20px;
}
table tr a {
  margin-right: 20px;
}
</style>