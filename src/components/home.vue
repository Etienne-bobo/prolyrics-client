<template>
<div class="home">
<v-carousel height="300" class="mt-0">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>

  
  <v-card
    class="mx-auto white--text vid mt-5 mb-5 ml-2 mr-2"
    color="red lighten-3"

  >
   
    <v-card-text class="text--primary">
      <div>Most Viewed Videos</div>
    </v-card-text>

  </v-card>
  
    <div class="row mr-2 ml-2">
           
            <div class="col-sm">
                <v-card
                    class="mx-auto"
                    raised
                    max-width="400"
                >
                <iframe width="560" height="315" src="https://www.youtube.com/embed/bWt13q8BZoI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                
                </v-card>

        </div>
       
            <div class="col-sm">
                <v-card
                    class="mx-auto"
                    raised
                    max-width="400"
                >
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Vc5FWoO6FdA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                
                </v-card>

        </div>
       
    </div>
  <div align="center">
    <router-link to="/songs">
       <v-btn large color="red lighten-2" class="white--text cent">
        <v-icon>fa fa-music</v-icon>
        Discover More Songs
      </v-btn>
    </router-link>
     
    </div>
</div>
  
  
    

</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
                        src: 'https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/12/YouTube-music-796x419.jpg',

          },
          {
                        src: 'http://www.ilfondamento.be/wp-content/uploads/2019/08/musicworkshop-image.jpg',

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
.cent{
  text-align:center;
  margin:30px 0px auto;
}
</style>