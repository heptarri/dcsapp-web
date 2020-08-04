<template>
  <div>
<!--    影视类-->
    <categoryComponent category="video"></categoryComponent>
  </div>
</template>

<script>
  import categoryComponent from "../components/darkCategoryComponent";

export default {
  name: "darkVideos",
  components: {
    categoryComponent
  },
  data() {
    return {
    };
  },
  methods: {
  },
  mounted() {
  }
};
</script>





