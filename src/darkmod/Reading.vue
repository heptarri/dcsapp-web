<template>
  <div>
<!--    阅读分类-->
    <categoryComponent category="reading"></categoryComponent>
  </div>
</template>

<script>
  import categoryComponent from "../components/darkCategoryComponent";

export default {
  name: "darkReading",
  components: {
    categoryComponent
  },
};
</script>



