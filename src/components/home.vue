<template>
<div class="home">
<v-carousel height="300">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>

  <template>
  <v-card
    class="mx-auto white--text vid mt-5 mb-5"
    color="red lighten-3"

  >
   
    <v-card-text class="text--primary">
      <div>Most Viewed Videos</div>
    </v-card-text>

  </v-card>
    <div class="row">
           
            <div class="col-sm">
                <v-card
                    class="mx-auto"
                    raised
                    max-width="400"
                >
                    <youtube :video-id="TPnlGOSxtuI" :player-width='444' :player-height="280"></youtube>

                
                </v-card>

        </div>
       
            <div class="col-sm">
                <v-card
                    class="mx-auto"
                    raised
                    max-width="400"
                >
                    <youtube :video-id="Vc5FWoO6FdA" :player-width='444' :player-height="280"></youtube>

                
                </v-card>

        </div>
       
    </div>
    
</template>
</div>
  
  
    

</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'http://www.ilfondamento.be/wp-content/uploads/2019/08/musicworkshop-image.jpg',
          },
          {
            src: 'https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/12/YouTube-music-796x419.jpg',
          },
         
        ],
      }
    },
  }
</script>

<style>
.vid{
    text-align:center;
}
</style>