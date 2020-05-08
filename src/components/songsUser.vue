<template>
  <v-row>
    <v-col cols="12" sm="6" offset-sm="3">
      <searchSong />
      <v-card class="mr-2 ml-2" v-if="songs">
        <v-toolbar color="grey darken-2" light extended>
          <v-toolbar-title class="white--text">My Playlist</v-toolbar-title>
          <v-spacer></v-spacer>
          <template v-slot:extension>
            <v-btn
              v-if="$store.state.isUserLoggedIn"
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

            <v-list-item-content @click="navigateto(item)">
              <v-btn fab color="grey darken-2 white--text" left absolute large>
                >
                <v-icon>fa fa-music</v-icon>
              </v-btn>
              <v-list-item-title @click="navigateto(item)" class="ml-10 deco">{{
                item.title
              }}</v-list-item-title>
              <v-list-item-subtitle @click="navigateto(item)" class="ml-10">{{
                item.artist
              }}</v-list-item-subtitle>
              <v-list-item-subtitle @click="navigateto(item)" class="ml-10">{{
                item.album
              }}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn icon ripple @click="navigateto(item)">
                <v-icon @click="navigateto(item)" color="grey lighten-1"
                  >fa fa-play</v-icon
                >
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-card>
      <v-card v-else flat>
        <div class="text-center">
          <v-progress-circular
            indeterminate
            color="primary"
          ></v-progress-circular>
        </div>
      </v-card>
      <div align="center" class="mt-12">
        <a href="https://www.youtube.com/channel/UCm52eL6T8dh_51OZLb8QoNA">
          <v-btn large color="red lighten-2" class="white--text cent">
            <v-icon class="mr-3">fa fa-youtube</v-icon>
            Visit our youtube Channel
          </v-btn>
        </a>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import songsService from "../services/songService";
import searchSong from "@/components/searchSong";
export default {
  data() {
    return {
      songs: null
    };
  },
  // async mounted() {
  //     this.songs = (await songsService.songs()).data
  // },
  methods: {
    navigateTo: function() {
      this.$router.push({
        name: "create-songs"
      });
    },
    navigateto: function(item) {
      this.$router.push({
        params: { itemId: item.id },
        name: "song"
      });
    }
  },
  components: {
    searchSong
  },
  watch: {
    "$route.query.search": {
      immediate: true,
      async handler(value) {
        this.songs = (await songsService.songs(value)).data;
      }
    }
  }
};
</script>

<style scoped>
.container {
  margin-top: 30px;
}
.deco {
  color: green;
}
</style>
