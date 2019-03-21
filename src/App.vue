<template>
  <div id="app">
    <!-- <router-view/> -->
    <Header/>
    <!-- <PostList/> -->
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style>
/* default setting */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul,
li {
  list-style-type: none;
}
a {
  text-decoration: none;
}
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
</style>
