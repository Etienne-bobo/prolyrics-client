import api from "./api"

export default{
    songs(){
        return api().get('songs')
    },
    show(itemId){
        return api().get(`songs/${itemId}`)
    },
    post(song){
        return api().post('songs',song)
    }
}