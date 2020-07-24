<template>
  <div>
<!--    游戏分类-->
    <categoryComponent category="games"></categoryComponent>
  </div>
</template>

<script>
import categoryComponent from "../components/categoryComponent";

export default {
  name: "Games",
  components: {
    categoryComponent
  },

};
</script>

