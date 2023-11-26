<script>
import axios from "axios";

export default {
  data(){
    return{
      model:{
        user:{
          username:'',
          password:'',
          email:'',
          userDetail:{
            firstName:'',
            lastName:'',
            age:'',
            birthDay:'',
            user:{ id: null}
          },

        }

      }
    }
  },
  methods:{
    saveUser(){
      axios.post('http://localhost:8081/v1/users',this.model.user).then(res => {
        alert("User was saving successful");

      }).catch(function (error){
        console.log("Error ");
      })
    }
  }
}
</script>

<template>
 <div class="container mt-5">
   <div  class="card">
     <div class="card-header">
       <h4>Register new User</h4>
     </div>
     <div class="card-body">
       <div class="mb-3">
         <label for="">First Name</label>
         <input type="text" v-model="model.user.firstName" class="form-control">
       </div>
       <div class="mb-3">
         <label for="">Last Name</label>
         <input type="text" v-model="model.user.lastName" class="form-control">
       </div>
       <div class="mb-3">
       <label for="">Age</label>
       <input type="text" v-model="model.user.age" class="form-control">
     </div>
     <div class="mb-3">
     <label for="">Birth Day</label>
     <input type="text" v-model="model.user.birthDay" class="form-control">
   </div>
       <div class="mb-3">
         <label for="">User Name</label>
         <input type="text" v-model="model.user.username" class="form-control">
       </div>
       <div class="mb-3">
         <label for="">E-mail</label>
         <input type="text" v-model="model.user.email" class="form-control">
       </div>
       <div class="mb-3">
         <label for="">Password</label>
         <input type="text" v-model="model.user.password" class="form-control">
       </div>

       <div class="mb-3">
         <button type="button" @click="saveUser" class="btn btn-primary">
           Save
         </button>&nbsp;
         <RouterLink to="/user" class="btn btn-primary ">
           Back
         </RouterLink>
       </div>


     </div>

   </div>
 </div>

</template>

<style scoped>

</style>