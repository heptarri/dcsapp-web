<template>
  <div id="app">
    <br />
    <br />
    <input class="search-input" v-model="searchInput" placeholder="搜索应用" />
    <button class="search-button" @click="search">搜索应用</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Search",
  data() {
    return {
      list: [],
      searchInput: "",
      downloadContent: "DOWNLOAD"
    };
  },
  methods: {
    search() {
      var keywords = this.searchInput.split(" ");

    },
    getJsonList(){
        return [
            
        ]
    }

    // getInfo() {
    //   axios
    //     .get("http://dcstore.shenmo.tech/store/tools/applist.json")
    //     .then(res => {
    //       this.list = res.data;
    //     });
    // },
    // GotoJson(pkgn) {
    //   this.PackageName = pkgn;
    //   console.log(
    //     "http://dcstore.shenmo.tech/store/tools/" + pkgn + "/app.json"
    //   );
    //   window.open(
    //     "http://dcstore.shenmo.tech/store/tools/" + pkgn + "/app.json",'_self',''
    //   );
    // }
  },
  mounted() {
    // this.getInfo();
  }
};
</script>

<style scoped>
@import "../../static/style.css";
</style>

<style scoped>
.search-input {
  width: 50%;
  height: 32px;
}
.search-button {
  height: 32px;
}
</style>