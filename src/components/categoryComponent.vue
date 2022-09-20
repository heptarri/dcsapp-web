<template>
  <div class="app">
    <br/>
    <br/>
    <center>

      <div class="list">

        <!--        单个应用模块-->
        <div class="item" v-for="item in list" :key="item.tip" @click="GotoJson(item.Pkgname)">

          <span class="show">
<!--            应用icon-->
            <img :src="`https://code.gitlink.org.cn/shenmo7192/spark-store-png-accelerate/raw/branch/master/store/${category}/${item.Pkgname}/icon.png`" alt="icon"
                 class="icon-m" @click="GotoJson(item.Pkgname)"/>
            <span class="app-title">
<!--              应用名-->
             <h3 class="app-name" :title="`${item.Name}`">{{item.Name}}</h3>
           </span>
          </span>

          <img :src="`https://code.gitlink.org.cn/shenmo7192/spark-store-png-accelerate/raw/branch/master/store/${category}/${item.Pkgname}/icon.png`" alt="icon"
               class="icon-bg" @click="GotoJson(item.Pkgname)"/>

        </div>
      </div>
    </center>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    name: "categoryComponent",
    //category用来在App.vue中区分类别
    //category名称就是分类名
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
          //39.106.2.2:38324
          .get(`https://cdn.d.store.deepinos.org.cn/store/${this.category}/applist.json`)
          //applist.json 软件列表
          .then(res => {
            this.list = res.data;
          });
      },
      GotoJson(pkgn) {
        console.log(
          `https://cdn.d.store.deepinos.org.cn/store/${this.category}/${pkgn}/app.json`
          //app.json 软件的详细信息
        );
        window.open(
          //pkgn 在仓库中的包名
          `https://cdn.d.store.deepinos.org.cn/store/${this.category}/${pkgn}/app.json`, '_self', ''
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
