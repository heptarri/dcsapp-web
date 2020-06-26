<template>
  <div id="app">
    <br />
    <br />
    <center>
      <div class="list">
        <div class="item" v-for="item in list" :key="item.tip">
          <span class="show">
            <img :src="`http://dcstore.shenmo.tech/store/image_graphics/${item.Pkgname}/icon.png`" alt="icon" class="icon-m"/>
            <a target="_blank">
              <button class="download-bt" :title="downloadContent" @click="GotoJson(item.Pkgname)" >
                {{ item.Name }}
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
  name: "Network",
  data() {
    return {
      list: [],
      downloadContent: "DOWNLOAD"
    };
  },
  methods: {
    getInfo() {
      axios
        .get("http://dcstore.shenmo.tech/store/image_graphics/applist.json")
        .then(res => {
          this.list = res.data;
        });
    },
    GotoJson(pkgn) {
      this.PackageName = pkgn;
      console.log(
        "http://dcstore.shenmo.tech/store/image_graphics/" + pkgn + "/app.json"
      );
      window.open(
        "http://dcstore.shenmo.tech/store/image_graphics/" + pkgn + "/app.json",'_self',''
      );
    }
  },
  mounted() {
    this.getInfo();
  }
};
</script>

<style scoped>
#app {
  /* height: 700px; */
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
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 20px;
}
.download-bt:hover {
  background: transparent;
}

.icon-m {
  width: 80%;
  height: 60%;
  background: rgb(211, 211, 211);
  margin: 10px;
  border-radius: 10px;
}
.list {
  max-width: 900px;
}
</style>
