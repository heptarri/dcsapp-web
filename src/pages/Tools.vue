<template>
  <div>
<!--    工具分类-->
    <categoryComponent category="tools"></categoryComponent>
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


