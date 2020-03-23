<template>
  <v-app>
   
    <v-content>
       <navBar/>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import navBar from "./components/navBar";

export default {
  name: "App",

  components: {
   navBar
  },

  data: () => ({
    //
  })
};
</script>
