<template>
  <div id="app">
    <center>
      <br><br>
      <h1 class="title">Deepin Community Store</h1>
      <h3 class="more-info">
        Have more.
      </h3>
     <div class="buttons">
       <!--
         愿望墙: http://www.shenmo.tech:420/?p=91
         应用问题反馈: http://www.shenmo.tech:420/?p=419
         APP建议: http://www.shenmo.tech:420/?p=422
     -->
       <button @click="Search" class="bt-feedback">搜索应用</button>
       <br>
       <button @click="Dream" class="bt-feedback">愿望墙</button>
       <br>
       <button @click="FeedBack" class="bt-feedback">问题反馈</button>
       <br>
       <button @click="Proposal" class="bt-feedback">APP建议</button>
       <br>
     </div>
    </center>
  </div>

</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {}
    },
    methods:{
      Dream:function () {
        window.open("http://www.shenmo.tech:420/?p=91","_self","")
      },
      FeedBack:function () {
        window.open("http://www.shenmo.tech:420/?p=419","_self","")
      },
      Proposal:function () {
        window.open("http://www.shenmo.tech:420/?p=422","_self","")
      },
      Search:function () {
        this.$router.push({name:"Search"})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #app {
    height: 700px;
    overflow: hidden;
    border: transparent;
    font-family: Bahnschrift;
  }

  .more-info {
    color: gray;
    font-weight: lighter;
  }
  .bt-feedback{
    width: 300px;
    padding: 10px;
    /*margin-top: 40px;*/
    border: transparent;
    background: #f3f3f3;
    transition: all 0.2s;
  }
  .bt-feedback:hover{
    background: #e8e8e8;
  }
  .buttons{
    margin-top: 100px;
  }
</style>
