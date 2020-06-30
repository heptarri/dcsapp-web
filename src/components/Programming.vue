<template>
  <div id="app">
    <br />
    <!-- <h2>编程开发</h2> -->
    <br />
    <center>
      <div class="list">
        <div class="item" v-for="item in list" :key="item.tip">
          <span class="show">
            <img :src="`http://dcstore.shenmo.tech/store/development/${item.Pkgname}/icon.png`" alt="icon" class="icon-m" @click="GotoJson(item.Pkgname)"/>
           <span class="app-title">
             <h3 class="app-name">{{item.Name}}</h3>
           </span>
            <a target="_blank">
              <button class="download-bt" :title="downloadContent" @click="GotoJson(item.Pkgname)" >
                下载
              </button>
            </a>
          </span>
        </div>
      </div>
    </center>
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
export default {
  name: "Programming",
  data() {
    return {
      list: [],
      downloadContent: "DOWNLOAD"
    };
  },
  methods: {
    getInfo() {
      axios
        .get("http://dcstore.shenmo.tech/store/development/applist.json")
        .then(res => {
          this.list = res.data;
        });
    },
    GotoJson(pkgn) {
      this.PackageName = pkgn;
      console.log(
        "http://dcstore.shenmo.tech/store/development/" + pkgn + "/app.json"
      );
      window.open(
        "http://dcstore.shenmo.tech/store/development/" + pkgn + "/app.json",'_self',''
      );
    }
  },
  mounted() {
    this.getInfo();
  }
};
</script>

<style scoped>
  @import "../../static/style.css";
</style>
