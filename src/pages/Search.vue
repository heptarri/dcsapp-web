<template>
  <div id="app">
    <!--    搜索功能实现文件-->
    <!--    暂未实现-->
    <br />
    <br />
    <div>
      <input class="search-input" v-model="searchInput" placeholder="搜索您想要的应用" />
      <button class="search-button" @click="search">搜索</button>
    </div>
    <div class="search_main">
      <div class="list" v-if="isShow">
        <!--        单个应用模块-->
        <div class="item" v-for="item in list" :key="item.id" @click="GotoJson(item.icon)">
          <span class="show">
            <!--            应用icon-->
            <img :src="item.icon" alt="icon" class="icon-m" />
            <span class="app-title">
              <!--              应用名-->
              <div>
                <h3 class="app-name" :title="`${item.name}`">{{ item.name }}</h3>
              </div>
              <div>
                <h4 class="app-more" :title="`${item.more}`">{{ item.more }}</h4>
              </div>
            </span>
          </span>
          <img :src="item.icon" alt="icon" class="icon-bg" />
        </div>
      </div>
      <div class="noContent" v-else>空空如也</div>
    </div>


  </div>
</template>

<script>
import { $_getResult } from '@/apis/api'

export default {
  name: "Search",
  data() {
    return {
      list: [],
      isShow: false,//判断是否有搜索，没有不创建app列表
      searchInput: "",
      downloadContent: "DOWNLOAD"
    };
  },
  methods: {
    async search() {
      console.log(this.searchInput);
      let res = await $_getResult({ keyword: this.searchInput })
      this.list = res.data
      this.isShow = true
      console.log('res', this.list);
    },
    GotoJson(icon) {
      let appUrl = icon.replace('icon.png', 'app.json')
      console.log(appUrl);
      /* console.log(
        `https://d.store.deepinos.org.cn//store/${this.category}/${pkgn}/app.json`
        //app.json 软件的详细信息
      ); */
      window.open(
        //pkgn 在仓库中的包名
        appUrl,
        "_self",
        ""
      );
    },
  },
  mounted() {

  },


};
</script>

<style scoped>
@import "../../static/style.css";
</style>

<style scoped>
.search-input {
  height: 40px;
  width: 40%;
  text-align: center;
  font-size: 20px;
  transition: all 0.3s;
  border: solid 2px darkgray;
  border-radius: 10px 0 0 10px;
  position: relative;
  top: -2px;
}

.search-input:hover {
  border: solid 2px black;
}

.search-button {
  border-radius: 0 10px 10px 0;
  height: 46px;
  width: 100px;
  margin: 0;
  border: solid 2px darkgray;
  padding: 0;
  position: relative;
  /*top:2px;*/
  left: -7px;
  transition: all 0.3s;
  font-size: 20px;
}

.search-button:hover {
  border: solid 2px black;
}

.noContent {
  height: 200px;
  font-size: large;
  margin-top: 50px;
}
</style>
