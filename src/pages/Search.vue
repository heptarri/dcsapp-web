<template>
  <div id="app">
    <br/>
    <br/>
    <input class="search-input" v-model="searchInput" placeholder="搜索您想要的应用" />
    <button class="search-button" @click="search">搜索</button>

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
      getJsonList() {
        return []
      }
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

  .search-input{
    height: 40px;
    width: 40%;
    text-align: center;
    font-size: 20px;
    transition: all 0.3s;
    border: solid 2px darkgray;
    border-radius: 10px 0 0 10px;
    position: relative;
    top:-2px;
  }
  .search-input:hover{
    border: solid 2px black;
  }
  .search-button{
    border-radius: 0 10px 10px 0;
    height: 46px;
    width: 100px;
    margin:0;
    border: solid 2px darkgray;
    padding: 0;
    position: relative;
    /*top:2px;*/
    left:-7px;
    transition: all 0.3s;
    font-size: 20px;
  }
  .search-button:hover{
    border: solid 2px black;
  }
</style>
