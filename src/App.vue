<template>
  <div id="app">
    <Header />
    <!-- 可以解决缓存问题 -->
    <!-- <keep-alive> -->
    <router-view></router-view>
    <!-- </keep-alive> -->

    <!-- <AddBlog /> -->
    <!-- <ShowBlogs />
    <ListBlogs />-->
  </div>
</template>
<script>
// import AddBlog from "./components/AddBlog";
import Header from "./components/Header";
export default {
  name: "App",
  components: {
    // AddBlog,
    Header
  }
};
</script>
<style>
</style>
