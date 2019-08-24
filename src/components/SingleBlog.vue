<template>
  <div id="single-blog">
    <button @click="$router.go(-1)">返回</button>
    <h1>{{blog.title}}</h1>
    <article>{{blog.body}}</article>
  </div>
</template>

<script>
export default {
  name: "SingleBlog",
  data() {
    return {
      id: this.$route.params.id,
      blog: {}
    };
  },
  created() {
    // console.log(this.$route.params.id);
    //${}是 es6语法  反引号中必须使用
    this.$axios.get(`/posts/${this.id}`).then(res => {
      this.blog = res.data;
      //   console.log(Math.random().toString(16));
    });
  }
};
</script>

<style scoped>
</style>