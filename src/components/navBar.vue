<template>
    <div class="navBar">
       
    <v-app-bar app dense height="70px" color="grey darken-3 white--text" class="d-none d-sm-flex">
         <router-link to="Home">
           <v-btn icon class="mr-10 ml-10" >
              <v-toolbar-title class="white--text marg">Pro Lyrics</v-toolbar-title>

           </v-btn>

        </router-link>

      <router-link to="songs">
       <v-btn icon color="white" class="mr-12 ml-12">
      
        <v-icon color="white">audiotrack</v-icon> 
       Songs
      </v-btn>
      </router-link>
    
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>


          <router-link to="register">
                  <v-btn v-if="!$store.state.isUserLoggedIn" icon class="mr-12 ml-12" color="white">

                  <v-icon color="white">account_circle </v-icon>
                  Sign Up /Sign In
                </v-btn>
          </router-link>
       
     
      <v-btn v-if="$store.state.isUserLoggedIn" icon @click="logout">
        <router-link to="home">
               <v-icon color="white">power_settings_new</v-icon>
        </router-link>
       
      </v-btn>

      <v-btn icon class="mr-12 ml-12" color="white">
        <v-icon class="ml-10" color="white">email</v-icon>
        contact Us
      </v-btn>

     <form>
    <div class="input-group mb-3 ml-10">
      <div class="input-group-prepend">
        <span class="input-group-text"><v-icon>mdi-magnify</v-icon></span>
      </div>
      <input type="text" class="form-control">
    </div>
  </form>
    </v-app-bar>

 
    <v-app-bar
      app
      color="grey darken-3 white--text"
      dark
      prominent
      class="d-flex d-sm-none"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Pro Lyrics</v-toolbar-title>
      
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>email</v-icon>
      </v-btn>
      <v-btn v-if="$store.state.isUserLoggedIn" icon @click="logout">
        <router-link to="home">
               <v-icon color="white">power_settings_new</v-icon>
        </router-link>
       
      </v-btn>

    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >

         <v-list-item>
                <router-link to="home">
                  <v-btn icon class="mr-12 ml-2" color="black">

                  <v-icon class="ml-12">home </v-icon>
                  Home
                  </v-btn>
                  </router-link>
          </v-list-item>

          <v-list-item>
            <router-link to="songs">
              <v-btn icon color="black" class="mr-12 ml-8">
      
              <v-icon color="black">audiotrack</v-icon> 
                 Songs
              </v-btn>
            </router-link>
          </v-list-item>

          <v-list-item>
                  <router-link to="register">
                  <v-btn v-if="!$store.state.isUserLoggedIn" icon class="mr-12 ml-12" color="black">

                  <v-icon class="ml-12">account_circle </v-icon>
                  Sign Up/Sign In
                  </v-btn>
                  </router-link>
       
                
          </v-list-item>

          <v-list-item>
                <router-link to="about">
                  <v-btn icon class="mr-12 ml-3" color="black">

                  <v-icon class="ml-12">insert_emoticon </v-icon>
                  About
                  </v-btn>
                  </router-link>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    </div>
</template>

<script>
export default {
   data: () => ({
      drawer: false,
      group: null,
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
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