<template>
    <div class="searchSong">
        
         <v-text-field
            label="Search"
            full-width
            v-model="search"
            counter
            maxlength="100"
            class="ml-10 mt-10 mr-10 mb-10"
          ></v-text-field>
    </div>
</template>

<script>
import _ from 'lodash'
export default {
    data() {
        return {
            search:''
        }
    },
    watch: {
        search: _.debounce(async function (){
            const route = {
                name:'songs'
            }
            if (this.search !== '') {
                route.query = {
                    search:this.search
                }
            }
            this.$router.push(route)
        },700),
        '$route.query.search': {
            immediate:true,
            handler(value){
                this.search = value
            }
        }
    },
}
</script>
<style scoped>
    .searchSong{
        width :450px;
    }
</style>