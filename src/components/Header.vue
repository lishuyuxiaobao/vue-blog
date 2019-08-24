<template>
  <nav>
    <ul>
      <li>
        <!-- exact点击哪个，哪个有样式 -->
        <router-link exact to="/">首页</router-link>
      </li>
      <li>
        <router-link exact to="/add">添加博客</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "app-header"
};
</script>

<style scoped>
ul {
  list-style-type: none;
  text-align: center;
  margin: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #fff;
  text-decoration: none;
  border-radius: 10px;
  padding: 6px 8px;
}
nav {
  background-color: #444;
  padding: 14px 0;
  margin-bottom: 40px;
}
.router-link-active {
  background-color: #eee;
  color: #444;
}
</style>