<template>
  <div>
<!--    影视类-->
    <categoryComponent category="video"></categoryComponent>
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




