<template>
    <div class="navBar">
        <v-card app
    height="0px"
    tile
  >
    <v-app-bar app dense height="70px" color="grey darken-3 white--text">
         <router-link to="Home">
           <v-btn icon large>
             <v-icon  color="white ">home</v-icon>

           </v-btn>
        </router-link>
     <v-toolbar-title class="white--text marg">Pro Lyrics</v-toolbar-title>

      <router-link to="songs">
       <v-btn icon color="white">
      
        <v-icon color="white">audiotrack</v-icon> 
       Songs
      </v-btn>
      </router-link>
    
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon  color="white">mdi-magnify</v-icon>
      </v-btn>

      <v-btn v-if="!$store.state.isUserLoggedIn" icon>
          <router-link to="register">
               <v-icon color="white">account_circle </v-icon>
          </router-link>
       
      </v-btn>
      <v-btn v-if="$store.state.isUserLoggedIn" icon @click="logout">
        <router-link to="home">
               <v-icon color="white">power_settings_new</v-icon>
        </router-link>
       
      </v-btn>

      <v-btn icon>
        <v-icon  color="white">email</v-icon>
      </v-btn>
    </v-app-bar>
  </v-card>
    </div>
</template>

<script>
export default {
  methods: {
    logout:function(){
      this.$store.dispatch('setToken',null)
      this.$store.dispatch('setUser',null)

      this.router.push({
        name:'root'
      })

    }
  },
}
</script>
<style>
 .marg{
   margin-right:30px;
   
 }
</style>