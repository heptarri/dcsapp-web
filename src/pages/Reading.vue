<template>
  <div>
<!--    阅读分类-->
    <categoryComponent category="reading"></categoryComponent>
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



