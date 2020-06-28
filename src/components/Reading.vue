<template>
  <div id="app">
    <br />
    <br />
    <center>
      <div class="list">
        <div class="item" v-for="item in list" :key="item.tip">
          <span class="show">
            <img :src="`http://dcstore.shenmo.tech/store/reading/${item.Pkgname}/icon.png`" alt="icon" class="icon-m" @click="GotoJson(item.Pkgname)"/>
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
  name: "Reading",
  data() {
    return {
      list: [],
      downloadContent: "DOWNLOAD"
    };
  },
  methods: {
    getInfo() {
      axios
        .get("http://dcstore.shenmo.tech/store/reading/applist.json")
        .then(res => {
          this.list = res.data;
        });
    },
    GotoJson(pkgn) {
      this.PackageName = pkgn;
      console.log(
        "http://dcstore.shenmo.tech/store/reading/" + pkgn + "/app.json"
      );
      window.open(
        "http://dcstore.shenmo.tech/store/reading/" + pkgn + "/app.json",'_self',''
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
  /* height: 200px; */
  width: 100%;
  overflow: hidden;
  overflow-y: scroll;
  border: transparent;
}

.item {
  width: 100px;
  height: 135px;
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
  bottom: 0px;
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

