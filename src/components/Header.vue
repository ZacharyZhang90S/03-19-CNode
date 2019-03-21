<template>
  <div class="header">
    <div class="wrapper clearfix">
      <div class="log">
        <img src="../assets/cnodejs_light.svg">
      </div>
      <div class="seacher"></div>
      <div class="nav">
        <ul>
          <li>
            <a href="#">首页</a>
          </li>
          <li>
            <a href="#">未读消息</a>
          </li>
          <li>
            <a href="#">新手入门</a>
          </li>
          <li>
            <a href="#">API</a>
          </li>
          <li>
            <a href="#">关于</a>
          </li>
          <li>
            <a href="#">设置</a>
          </li>
          <li>
            <a href="#">退出</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Header"
};
</script>


<style scoped>
.header {
  height: 50px;
  background: #444444;
}
.wrapper {
  margin-left: 100px;
  margin-right: 100px;
}
.header .log {
  float: left;
  width: 120px;
  height: 50px;
  display: flex;
  border: 1px solid red;
  margin-right: 20px;
}
.header .log img{
     width: 120px;
}


.header .seacher {
  float: left;
  width: 233px;
  height: 26px;
  border: 1px solid green;
}
.header .nav {
  float: right;
  width: 622px;
  border: 1px solid blue;
}
.header ul {
  display: flex;
}
.header ul > li > a {
  /* color: #ffffff; */
  color: #cccccc;
  font-size: 13px;
  font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma,
    "Hiragino Sans GB", STHeiti, sans-serif !important;
}
</style>