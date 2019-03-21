<template>
  <div class="header">
    <div class="wrapper clearfix">
      <div class="log">
        <img src="../assets/cnodejs_light.svg">
      </div>
      <div class="searchBox">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-svg-search"></use>
        </svg>
        <input type="text">
        <span></span>
      </div>
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
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
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
  margin-right: 20px;
}
.header .log img {
  width: 120px;
  padding-bottom: 8px;
}
.header .searchBox {
  position: relative;
  float: left;
  height: 50px;
  display: flex;
  align-items: center;
}
.header .searchBox .icon {
  position: absolute;
  left: 5px;
  height: 18px;
}
.header .searchBox input[type="text"] {
  width: 233px;
  height: 26px;
  line-height: 26px;
  border-radius: 15px;
  border: none;
  background: #888888;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.75);
  transition: all 1s;
  font-size: 14px;
  text-indent: 25px;
  cursor: text;
}
.header .searchBox input[type="text"]:focus {
  background: #ffffff;
  outline: none;
}
.header .searchBox input[type="text"]:hover {
  background: #ffffff;
}
.header .nav {
  float: right;
  height: 50px;
  line-height: 50px;
  width: 438px;
}
.header ul {
  display: flex;
  justify-content: space-around;
}
.header ul > li > a {
  color: #cccccc;
  font-size: 13px;
  font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma,
    "Hiragino Sans GB", STHeiti, sans-serif !important;
}
.header ul > li > a:hover {
  color: #ffffff;
}
</style>