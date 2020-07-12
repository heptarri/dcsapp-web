<!--
  writer:QINGDKJ
  E-mail:beautifuldistance@163.com
  Update date:2020/6/22
-->

<template>
  <div id="app">
    <!--    <img src="./assets/logo.png">-->
    <!--    <router-view/>-->

    <!--
    <div class="left">

        <br>
        <h2 class="title" @click="clickTitle()">DCSAPP</h2>

        <div class="biaoqian">
          <router-link to="/" class="biaoqian">主页</router-link>
        </div>

        <div class="biaoqian">
          <router-link to="/programming" class="biaoqian">编程开发</router-link>
        </div>

        <div class="biaoqian">
          <router-link to="/themes" class="biaoqian">主题美化</router-link>
        </div>

        <div class="biaoqian">
          <router-link to="/musicandsound" class="biaoqian">音乐欣赏</router-link>
        </div>

        <div class="biaoqian">
          <router-link to="/games" class="biaoqian">游戏娱乐</router-link>
        </div>

        <div class="biaoqian">
          <router-link to="/photos" class="biaoqian">作图与看图</router-link>
        </div>

        <div class="biaoqian">
          <router-link to="/relations" class="biaoqian">社交软件</router-link>
        </div>

        <div class="biaoqian">
          <router-link to="/tools" class="biaoqian">实用工具</router-link>
        </div>

         <div class="biaoqian">
          <router-link to="/network" class="biaoqian">网络应用</router-link>
        </div>

         <div class="biaoqian">
          <router-link to="/office" class="biaoqian">办公学习</router-link>
        </div>

         <div class="biaoqian">
          <router-link to="/reading" class="biaoqian">阅读写作</router-link>
        </div>

         <div class="biaoqian">
          <router-link to="/videos" class="biaoqian">视频观看</router-link>
        </div>

         <div class="biaoqian">
          <router-link to="/others" class="biaoqian">其他应用</router-link>
        </div>

    </div>
    -->

    <div class="right">
      <center>
        <router-view class="showRouterPage"></router-view>
      </center>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {
    clickTitle: function() {
      window.open("/");
    }
  }
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
  border: 0;
  background:white;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background:white;
}
a {
  text-decoration: none;
  color: black;
}
/*.left{
    float: left;
    height:50rem;
    width: 20%;
    border-radius: 30px 0 0 30px;
    background: #e3e3e3;
  }
   */

.right {
  border: 0;
  padding: 0;
  margin: 0;
  float: right;
  height: 100%;
  width: 100%;
  background: white;
  position: relative;
}
/*
  .biaoqian{
    padding: 10px;
    margin:30px;
    border-radius: 10px;
    transition: all 0.3s;
  }
.biaoqian:hover {
  background: #3d9dea;
}

*/
.showRouterPage {
  /* border: solid 1px black; */
  width: 100%;
  max-height: 80%;
  overflow: hidden;
  /* overflow-y: scroll; */
}
</style>


