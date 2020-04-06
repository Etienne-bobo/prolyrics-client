
<template>
  <v-card height="150">
    <v-footer
      color="grey"
      absolute
      class="font-weight-medium"
    >
      <v-col
        class="text-center"
        cols="12"
      >
      <a href="https://api.whatsapp.com/send?phone=918580541646">
      <v-btn class="mx-2 mb-10" fab dark small color="pink">
      <v-icon dark>fa fa-whatsapp</v-icon>
      </v-btn></a>
      <v-btn class="mx-2 mb-10" fab dark small color="pink">
      <v-icon dark>mdi-heart</v-icon>
      </v-btn>
      <v-btn class="mx-2 mb-10" fab dark small color="pink">
      <v-icon dark>mdi-heart</v-icon>
      </v-btn>
      <v-btn class="mx-2  mb-10" fab dark small color="pink">
      <v-icon dark>mdi-heart</v-icon>
      </v-btn>
      
      
      
      <br>

        {{ new Date().getFullYear() }} — <strong>ProLyrics</strong>
      </v-col>
    </v-footer>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
     
    }),
  }
</script>