import axios from 'axios'

export default ()=>{
   return axios.create({
       baseURL : `https://prolyrics-server.herokuapp.com/`
   })
}