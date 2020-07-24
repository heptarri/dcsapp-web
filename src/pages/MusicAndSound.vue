<template>
  <div>
<!--    影音视听类-->
    <categoryComponent category="music"></categoryComponent>
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


