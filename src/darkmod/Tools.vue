<template>
  <div>
<!--    工具分类-->
    <categoryComponent category="tools"></categoryComponent>
  </div>
</template>

<script>
  import categoryComponent from "../components/darkCategoryComponent";

export default {
  name: "darkTools",
  components: {
    categoryComponent
  },
};
</script>


