<template>
  <div>
<!--    游戏分类-->
    <categoryComponent category="games"></categoryComponent>
  </div>
</template>

<script>
import categoryComponent from "../components/darkCategoryComponent";

export default {
  name: "darkGames",
  components: {
    categoryComponent
  },

};
</script>

