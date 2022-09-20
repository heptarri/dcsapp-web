<template>

  <div>
<!--    主题美化类-->
    <categoryComponent category="themes"></categoryComponent>
  </div>
</template>

<script>
  import categoryComponent from "../components/darkCategoryComponent";

export default {
  name: "darkThemes",
  components: {
    categoryComponent
  },
};
</script>



