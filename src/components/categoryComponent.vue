<template>
  <div class="app">
    <br/>
    <br/>
    <center>
      <div class="list">
        <div class="item" v-for="item in list" :key="item.tip">
          <span class="show">
            <img :src="`http://dcstore.shenmo.tech/store/${category}/${item.Pkgname}/icon.png`" alt="icon"
                 class="icon-m" @click="GotoJson(item.Pkgname)"/>
            <span class="app-title">
             <h3 class="app-name">{{item.Name}}</h3>
           </span>
            <a target="_blank">
              <button class="download-bt" :title="downloadContent" @click="GotoJson(item.Pkgname)">
                详情>>
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
    name: "categoryComponent",
    props: ['category'],
    data() {
      return {
        list: [],
        downloadContent: "DOWNLOAD"
      };
    },
    methods: {
      getInfo() {
        axios
          .get(`http://dcstore.shenmo.tech/store/${this.category}/applist.json`)
          .then(res => {
            this.list = res.data;
          });
      },
      GotoJson(pkgn) {
        console.log(
          `http://dcstore.shenmo.tech/store/${this.category}/${pkgn}/app.json`
        );
        window.open(
          `http://dcstore.shenmo.tech/store/${this.category}/${pkgn}/app.json`, '_self', ''
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
