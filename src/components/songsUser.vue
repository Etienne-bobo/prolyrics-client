<template>
  <v-row>
    <v-col cols="12" sm="6" offset-sm="3">
      <v-card>
        <v-toolbar color="grey darken-2" light extended>
          <v-toolbar-title class="white--text">My Playlist</v-toolbar-title>
          <v-spacer></v-spacer>
          <template v-slot:extension>
           
            <v-btn
              fab
              color="primary lighten-1"
              bottom
              left
              large
              @click="navigateTo"
              absolute
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </template>
        </v-toolbar>
        <v-list two-line subheader>
          <v-subheader inset></v-subheader>

          <v-divider inset></v-divider>
            <v-list-item v-for="item in songs" :key="item.id" link>
            <v-list-item-avatar>
              <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
            </v-list-item-avatar>

            <v-list-item-content>
                <v-btn
              fab
              color="grey darken-2 white--text"
              left
              absolute
              large
            >
              <v-icon>audiotrack</v-icon>
            </v-btn>
              <v-list-item-title @click="navigateto(item)" class="ml-10">{{ item.title }}</v-list-item-title>
              <v-list-item-subtitle @click="navigateto(item)" class="ml-10">{{ item.artist }}</v-list-item-subtitle>
              <v-list-item-subtitle @click="navigateto(item)" class="ml-10">{{ item.album }}</v-list-item-subtitle>

            </v-list-item-content>

            <v-list-item-action>
              <v-btn icon ripple>
                <v-icon color="grey lighten-1">mdi-information</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
          
        </v-list>

       
      </v-card>
    </v-col>
  </v-row>
</template>








<script>
import songsService from '../services/songService'
export default {
    data() {
        return {
            songs:null
        }
    },
    async mounted() {
        this.songs = (await songsService.songs()).data
    },
    methods:{
        navigateTo : function(){
            this.$router.push({
                name:'create-songs'
            })
        },
         navigateto : function(item){
            this.$router.push({
                params:{itemId:item.id},
                name:'song'
            })
        }
    }
}
</script>

<style scoped>
    .container{
        margin-top: 30px;
    }
</style>