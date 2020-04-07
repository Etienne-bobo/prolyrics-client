
<template>
<div id="contact">
  <v-card   class="mt-12">
    <v-footer
      bottom
      class="font-weight-medium"
      color="grey"
    >
      <v-col
        class="text-center"
        cols="12"
      >
      

      <a href="https://api.whatsapp.com/send?phone=918580541646">
      <v-btn class="mx-2 mb-10" fab dark small color="pink">
      <v-icon dark>fa fa-whatsapp</v-icon>
      </v-btn></a>
      <a href="http://www.instagram.com/etienne_bobo">
      <v-btn class="mx-2 mb-10" fab dark small color="pink">
      <v-icon dark>fa fa-instagram</v-icon>
      </v-btn></a>
      
      
      
      <br>

        {{ new Date().getFullYear() }} — <strong>ProLyrics</strong>
      </v-col>
    </v-footer>
  </v-card>
        </div>

</template>

<script>
  export default {
    data: () => ({
     
    }),
  }
</script>

<style>
.marg{
  margin-top:300px;
}
</style>