import api from "./api"

export default{
    songs(search){
        return api().get('songs',{
            params: {
                search: search
            }
        })
    },
    show(itemId){
        return api().get(`songs/${itemId}`)
    },
    post(song){
        return api().post('songs',song)
    },
    put(song){
        return api().put(`songs/${song.id}`,song)
    }
}