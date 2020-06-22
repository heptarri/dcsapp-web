<template>
  <div id="app">
    <h2>编程开发</h2>
    <br>

    <div class="list">
      <div class="item" v-for="item in list">
        <span class="show">
          <img src="../assets/icon.jpg" alt="icon" class="icon-m">
          <button class="download-bt" :title='downloadContent'>{{item.name}}</button>
        </span>

      </div>
    </div>



  </div>
</template>

<script>
  import axios from 'axios'
  import Vue from "vue";

    export default {
        name: "Programming",
      data(){
          return{
            list:[],
            downloadContent:'DOWNLOAD'
          }
      },
      methods:{
        getInfo(){
          axios.get('http://dcstore.shenmo.tech:80/store/tools/applist.json').then(res=>{
            console.log(res);
            this.list=res.data;

          })

          // 请求接口 后台的接口为8000 我们本地的接口为8080,所以我们需要去到vue.config.js配置跨域


        }
      },
      mounted() {
          this.getInfo()
      }
    }
</script>

<style scoped>
  #app{
    height: 700px;
    overflow: hidden;
    overflow-y: scroll;
    border: transparent;
  }

  .item{
    width: 100px;
    height: 120px;
    background: #d2d2d2;
    float: left;
    border-radius: 20px;
    transition: all 0.3s;
    margin: 9px;

  }
  .item:hover{
    background: lightgray;
  }
  .download-bt{
    border: 0;
    background:#7eb6f3;
    border-radius: 10px;
    height: 20px;
    width: 80%;
    color:black;
    transition: all 0.3s;
    position: relative;
    bottom: 5px;

  }
  .download-bt:hover{
    background: transparent;
  }


  .icon-m{
    width: 80%;
    height: 60%;
    background: gray;
    margin: 10px;
    border-radius: 10px;
  }
</style>
