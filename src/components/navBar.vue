<template>
    <div class="navBar">
       
    <!-- <v-app-bar app dense height="70px" color="grey darken-3 white--text" class="d-none d-sm-none d-md-flex"> -->
         <!-- <router-link to="/Home">
           <v-btn icon class="mr-10 ml-10" >
              <v-toolbar-title class="white--text marg">Pro Lyrics</v-toolbar-title>

           </v-btn>

        </router-link>

      <router-link to="/songs">
       <v-btn icon color="white" class="mr-12 ml-12">
      
        <v-icon color="white">audiotrack</v-icon> 
       Songs
      </v-btn>
      </router-link>
    
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>


          <router-link to="/register">
                  <v-btn v-if="!$store.state.isUserLoggedIn" icon class="mr-2 ml-8" color="white">

                  <v-icon color="white">account_circle </v-icon>
                </v-btn>
          </router-link>
       
     
      <v-btn v-if="$store.state.isUserLoggedIn" icon @click="logout">
        <router-link to="/home">
               <v-icon color="white">power_settings_new</v-icon>
        </router-link>
       
      </v-btn>

      <v-btn icon class="mr-12 ml-12" color="white">
        <v-icon class="ml-10" color="white">email</v-icon>
        contact Us
      </v-btn>

      <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          icon
          color="white"
          dark
          class="marg2"
          v-on="on"
        >
          <v-icon>search</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Search for a Song Title 
        </v-card-title>

        <v-card-text>
          <v-text-field
            label="Search"
            counter
            maxlength="100"
          ></v-text-field>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
          >
            search
          </v-btn>
           <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            back
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
      
    </v-app-bar>

  -->
    <v-app-bar
      color="grey darken-3 white--text"
      dark
      prominent
      height="60"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Pro Lyrics</v-toolbar-title>
      
      <v-spacer></v-spacer>
      <a href="#contact">
       <v-btn icon>
        <v-icon>email</v-icon>
      </v-btn></a>
      <v-btn v-if="$store.state.isUserLoggedIn" icon @click="logout">
        <router-link to="/home">
               <v-icon color="white">power_settings_new</v-icon>
        </router-link>
       
      </v-btn>

    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
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
                <router-link to="/">
                  <v-btn icon class="mr-12 ml-2" color="black">

                  <v-icon class="ml-12">home </v-icon>
                  Home
                  </v-btn>
                  </router-link>
          </v-list-item>

          <v-list-item>
            <router-link to="/songs">
              <v-btn icon color="black" class="mr-12 ml-8">
      
              <v-icon color="black">audiotrack</v-icon> 
                 Songs
              </v-btn>
            </router-link>
          </v-list-item>
            <v-list-item>
                <router-link to="/about">
                  <v-btn icon class="mr-12 ml-3" color="black">

                  <v-icon class="ml-12">insert_emoticon </v-icon>
                  About
                  </v-btn>
                  </router-link>
          </v-list-item>
          <v-list-item>
                  <router-link to="/register">
                  <v-btn v-if="!$store.state.isUserLoggedIn" icon class="mr-12 ml-12" color="black">

                  <v-icon class="ml-12">account_circle </v-icon>
                  Sign Up/Sign In
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
       dialog: false,
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
 .marg2{
     margin-left:160px;
 
 }

</style>