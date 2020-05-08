<template>
  <v-app height="100%">
    <v-content>
      <navBar />
      <welcome />

      <router-view></router-view>
    </v-content>
    <footerie />
  </v-app>
</template>

<script>
import navBar from "./components/navBar";
import footerie from "./components/footer";
import welcome from "./components/welcome";

export default {
  name: "App",

  components: {
    navBar,
    footerie,
    welcome
  },

  data: () => ({
    //
  })
};
</script>
