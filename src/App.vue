<template>
  <div id="app" class="clearfix">
    <Header></Header>
    <router-view name="slidebar"></router-view>
    <router-view name="main"></router-view>
    <router-view name="pagination"></router-view>
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
*::before,
*::after {
  box-sizing: border-box;
}
ul {
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
