<template>
  <div>
<!--    影音视听类-->
    <categoryComponent category="music"></categoryComponent>
  </div>
</template>

<script>
  import categoryComponent from "../components/darkCategoryComponent";

export default {
  name: "darkMusicAndSound",
  components: {
    categoryComponent
  },
};
</script>


