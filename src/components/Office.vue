<template>
  <div id="app">
    <br />
    <br />
    <center>
      <div class="list">
        <div class="item" v-for="item in list" :key="item.tip">
          <span class="show">
            <img src="../assets/icon.jpg" alt="icon" class="icon-m" />
            <button class="download-bt" :title="downloadContent">{{item.type}}</button>
          </span>
        </div>
      </div>
    </center>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Office",
  data() {
    return {
      list: [],
      downloadContent: "DOWNLOAD"
    };
  },
  methods: {
    getInfo() {
      axios.get("http://47.92.39.166:3000/getArticles").then(res => {
        console.log(res);
        this.list = res.data.data;
      });
    }
  },
  mounted() {
    this.getInfo();
  }
};
</script>
<style scoped>
#app {
  height: 700px;
  width: 100%;
  overflow: hidden;
  overflow-y: scroll;
  border: transparent;
}

.item {
  width: 100px;
  height: 120px;
  background: #d2d2d2;
  float: left;
  border-radius: 20px;
  transition: all 0.3s;
  margin: 9px;
}
.item:hover {
  background: lightgray;
}
.download-bt {
  border: 0;
  background: #7eb6f3;
  border-radius: 10px;
  height: 20px;
  width: 80%;
  color: black;
  transition: all 0.3s;
  position: relative;
  bottom: 5px;
}
.download-bt:hover {
  background: transparent;
}

.icon-m {
  width: 80%;
  height: 60%;
  background: gray;
  margin: 10px;
  border-radius: 10px;
}
.list {
  max-width: 900px;
}
</style>
