<template>
  <v-app>
   
    <v-content>
       <navBar/>
    

      <router-view></router-view>
                   <footers/>

    </v-content>
  </v-app>
</template>

<script>
import navBar from "./components/navBar";
import footers from "./components/footer";

export default {
  name: "App",

  components: {
   navBar,
   footers
  },

  data: () => ({
    //
  })
};
</script>
