<template>
  <div class="container">
    <div class="song_title">
      <h2>Add new Song</h2>
      <hr />
    </div>
    <v-stepper v-model="e6" vertical>
      <v-stepper-step :complete="e6 > 1" step="1">
        Step 1
      </v-stepper-step>

      <v-stepper-content step="1">
        <v-card class="mb-12" height="200px">
          <div class="form-group">
            <label for="title">Title</label>
            <input
              type="text"
              v-model="song.title"
              class="form-control"
              name="title"
              id="title"
              aria-describedby="titleHelp"
              placeholder="Enter title"
              required
            />
          </div>
          <div class="form-group">
            <label for="artist">Artist</label>
            <input
              type="text"
              v-model="song.artist"
              class="form-control"
              name="artist"
              id="artist"
              aria-describedby="artistHelp"
              placeholder="Enter artist"
              required
            />
          </div>
        </v-card>
        <v-btn color="primary" @click="e6 = 2">Continue</v-btn>
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 2" step="2">Step 2</v-stepper-step>

      <v-stepper-content step="2">
        <v-card class="mb-12" height="200px">
          <div class="form-group">
            <label for="genre">Genre</label>
            <input
              type="text"
              v-model="song.genre"
              class="form-control"
              name="genre"
              id="genre"
              aria-describedby="genreHelp"
              placeholder="Enter genre"
              required
            />
          </div>
          <div class="form-group">
            <label for="album">Album</label>
            <input
              type="text"
              v-model="song.album"
              class="form-control"
              name="album"
              id="username"
              aria-describedby="albumHelp"
              placeholder="Enter album"
              required
            />
          </div>
        </v-card>
        <v-btn color="primary" @click="e6 = 3">Continue</v-btn>
        <v-btn text @click="e6 = 1">Back</v-btn>
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 3" step="3">Step 3</v-stepper-step>

      <v-stepper-content step="3">
        <v-card class="mb-12" height="200px">
          <div class="form-group">
            <label for="albumImageUrl">Album image Url</label>
            <input
              type="text"
              v-model="song.albumImageUrl"
              class="form-control"
              name="albumImageUrl"
              id="albumImageUrl"
              aria-describedby="albumImageUrlHelp"
              placeholder="Enter Album image Url"
              required
            />
          </div>
          <div class="form-group">
            <label for="youtubeId">Youtube Id</label>
            <input
              type="text"
              v-model="song.youtubeId"
              class="form-control"
              name="youtubeId"
              id="youtubeId"
              aria-describedby="youtubeIdHelp"
              placeholder="Enter youtube Id"
              required
            />
          </div>
        </v-card>
        <v-btn color="primary" @click="e6 = 4">Continue</v-btn>
        <v-btn text @click="e6 = 2">Back</v-btn>
      </v-stepper-content>

      <v-stepper-step step="4">Step 4</v-stepper-step>
      <v-stepper-content step="4">
        <v-card class="mb-12" height="300px">
          <div class="form-group">
            <label for="lyrics">lyrics:</label>
            <textarea
              v-model="song.lyrics"
              class="form-control"
              rows="5"
              id="lyrics"
              name="lyrics"
              placeholder="Song lyrics"
            ></textarea>
          </div>
          <div class="form-group">
            <label for="tab">Tab (Optional)</label>
            <input
              type="text"
              v-model="song.tab"
              class="form-control"
              name="tab"
              id="tab"
              aria-describedby="usernameHelp"
              placeholder="Enter tab"
            />
          </div>
        </v-card>
        <v-btn text @click="e6 = 3">Back</v-btn>
      </v-stepper-content>
    </v-stepper>
    <div align="center">
      <v-btn
        @click="create"
        class="mt-10 pl-10 pr-10 mb-10"
        large
        color="primary"
        >Create Song</v-btn
      >
    </div>
  </div>
</template>

<script>
import songService from "@/services/songService";
export default {
  data() {
    return {
      e6: 1,
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      }
    };
  },
  methods: {
    async create() {
      await songService.post(this.song);
      this.$router.push({
        name: "songs"
      });
    }
  }
};
</script>

<style scoped>
h2 {
  text-align: center;
  font-family: "Times New Roman", Times, serif;
}
label {
  font-family: "Times New Roman", Times, serif;
}
input {
  border-radius: 40px;
  box-shadow: inset 5px 5px -6px darkslategrey, inset -5px -2px 10px white;
}
</style>
