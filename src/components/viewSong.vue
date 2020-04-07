<template>
    <div class="viewSong mt-12">
        <div class="row">
            <div class="col-sm">
                <v-card
    class="mx-auto"
    raised
    max-width="400"
  >
     <v-img
      :src="song.albumImageUrl"
      height="230px"
    ></v-img>

      


    <v-card-title>
      {{song.title}}
    </v-card-title>

    <v-card-subtitle>
      {{song.artist}}
    </v-card-subtitle>
    <v-card-subtitle>
      {{song.album}}
    </v-card-subtitle>

  </v-card>

            </div>
            <div class="col-sm">
                <v-card
    class="mx-auto"
    raised
    max-width="400"
  >
    <youtube :video-id="song.youtubeId" :player-width='444' :player-height="280"></youtube>

    <v-card-actions>
      
      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
        class="mr-5"
      >
      lyrics
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{song.lyrics}}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  <div align="center">
     <v-btn
        v-if="$store.state.isUserLoggedIn"
        @click="navigateTo"
        color="red"
        class="mt-12 white--text"
      >
       <v-icon left>mdi-pencil</v-icon> 
        Edit Song
      </v-btn>
  </div>

            </div>
        </div>
       
    </div>
    
</template>

<script>
import songService from '@/services/songService'

    export default {
        data() {
            return {
                show: false,
                song:{}
            }
        },
        methods: {
          navigateTo:function(){
              this.$router.push({
                name:'edit-song'
            })
          }
        },
        async mounted(){
          const itemId = this.$store.state.route.params.itemId
           this.song = (await songService.show(itemId)).data
        }
    }

</script>