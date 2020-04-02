<template>
    <div class="container registerUser">
        
       <div class="info_form">
           
           <h2>Register</h2>
           <hr>
         
                <div class="row pt-10 pb-5">
                    <div class="col-sm">
                        <img src="../../public/images/music_logo.jpg" width="300px">
                    </div>
                    <div class="col-sm">
                        <form>
                                <div class="form-group">
                                    <label for="username">Username</label>
                                    <input  type="text" v-model="username" class="form-control" name="username" id="username" aria-describedby="usernameHelp" placeholder="Enter username" required>
                                </div>
                                <div class="form-group">
                                    <label for="email">Email address</label>
                                    <input  type="email" v-model="email" class="form-control" name="email" id="email" aria-describedby="emailHelp" placeholder="Enter email" required>
                                </div>
                                <div class="form-group">
                                    <label for="password">Password</label>
                                    <input  type="password" v-model="password" name="password" class="form-control" id="password" placeholder="Password" required>
                                </div>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                </div>
                               
                        </form>
                        <router-link to="login"><v-btn   @click="register"  class="mt-5 primary p_btn">Register</v-btn></router-link><br><br>
                               <p>Have already an account ? </p> 
                               <router-link to="login">
                                    <v-btn>login</v-btn>

                               </router-link>
                    </div>
                   
                </div>
           
        
       </div>
        
        <div v-html="error"></div>
    </div>
</template>

<script>
import authenticationService from '../services/authenticationService'
export default {
    data() {
        return {
            username:'',
            email:'',
            password:'',
            error:null
        }
    },
    methods: {
         async register (){
             try{
                   const response = await authenticationService.register({
                username:this.username,
                email:this.email,
                password:this.password
            }) 
            this.$store.dispatch('setToken',response.data.token)
            this.$store.dispatch('setUser',response.data.user)
            

             }catch(error){
                 this.error = error.response.data.error
             }
        }
    },
}
</script>

<style scoped>
    .info_form h2{
        text-align: center;
        font-family: 'Times New Roman', Times, serif;
    }
    label{
        font-family: 'Times New Roman', Times, serif;
    }
    
    .info_form{
       
        margin:75px auto;
        
        padding: 50px;
        box-shadow: inset -5px -5px 10px darkslategrey,inset 5px 5px 10px white;
        
        border: none;
        border-radius: 40px;
    } 
    .p_btn{
        margin:auto;
        border-radius: 40px;
    }
    input{
        border-radius: 40px;
        box-shadow: inset 5px 5px -6px darkslategrey,inset -5px -2px 10px white;

    }
   
</style>