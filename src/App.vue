<template>
  <v-app>
   
    <v-content>
       <navBar/>
    <welcome/>

      <router-view></router-view>
    <footers/>

    </v-content>

  </v-app>
</template>

<script>
import navBar from "./components/navBar";
import footers from "./components/footer";
import welcome from "./components/welcome";


export default {
  name: "App",

  components: {
   navBar,
   footers,
   welcome
  },

  data: () => ({
    //
  })
};
</script>
