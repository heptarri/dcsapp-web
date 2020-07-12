<template>
  <div>
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


<style scoped>
</style>
