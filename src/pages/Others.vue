<template>
  <div>
<!--    其他应用类-->
    <categoryComponent category="others"></categoryComponent>
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

