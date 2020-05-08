<template>
  <div class="home">
    <homes />
  </div>
</template>

<script>
// @ is an alias to /src
import homes from "@/components/home.vue";

export default {
  name: "Home",
  components: {
    homes
  }
};
</script>
