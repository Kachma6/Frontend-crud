<script>
import axios from "axios";

export default {
  name: "UserEditView",
  data(){
    return{
      userId:'',
      model:{
        userModificado:{
          id: this.userId,
          username:'',
          password:'',
          email:'',
          createdAt:'',
          iduserDetail: '',
          firstName:'',
          lastName:'',
          age:'',
          birthDay:'',



        }

      }
    }
  },
  methods:{
    getUserById(userId){
      axios.get(`http://localhost:8081/v1/users/${userId}`).then(res => {
        this.model.userModificado = res.data;

        console.log(res.data);
      })
    },
    editUser(){
      axios.put(`http://localhost:8081/v1/users/${this.userId}`, this.model.userModificado).then(res => {
        alert("User was editing successful");

      }).catch(function (error){
        console.log("Error ");
      })
    }
  },
  mounted() {
    this.userId = this.$route.params.id;
    this.getUserById(this.userId);
  }
}
</script>

<template>
  <div class="container mt-5">
    <div  class="card">
      <div class="card-header">
        <h4>Edit User</h4>
      </div>
      <div class="card-body">
        <div class="mb-3">
          <label for="">First Name</label>
          <input type="text" v-model="model.userModificado.firstName" class="form-control">
        </div>
        <div class="mb-3">
          <label for="">Last Name</label>
          <input type="text" v-model="model.userModificado.lastName" class="form-control">
        </div>
        <div class="mb-3">
          <label for="">Age</label>
          <input type="text" v-model="model.userModificado.age" class="form-control">
        </div>
        <div class="mb-3">
          <label for="">Birth Day</label>
          <input type="text" v-model="model.userModificado.birthDay" class="form-control">
        </div>
        <div class="mb-3">
          <label for="">User Name</label>
          <input type="text" v-model="model.userModificado.username" class="form-control">
        </div>
        <div class="mb-3">
          <label for="">E-mail</label>
          <input type="text" v-model="model.userModificado.email" class="form-control">
        </div>
        <div class="mb-3">
          <label for="">Password</label>
          <input type="text" v-model="model.userModificado.password" class="form-control">
        </div>

        <div class="mb-3">
          <button type="button" @click="editUser" class="btn btn-primary">
            Edit
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