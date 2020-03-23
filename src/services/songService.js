import api from "./api"

export default{
    songs(){
        return api().get('songs')
    },
    post(song){
        return api().post('songs',song)
    }
}