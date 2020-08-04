<template>
  <div>
<!--    其他应用类-->
    <categoryComponent category="others"></categoryComponent>
  </div>
</template>

<script>
  import categoryComponent from "../components/darkCategoryComponent";

export default {
  name: "darkOthers",
  components: {
    categoryComponent
  },
};
</script>
