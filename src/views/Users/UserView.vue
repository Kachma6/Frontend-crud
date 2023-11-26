<script>
import axios from "axios";

export default {
  name: "UserView",
  data(){
    return{
      users:[]
    }
  },
  methods:{
    getUsers(){
      axios.get('http://localhost:8081/v1/users?detailed=true').then(res => {
        this.users = res.data;
        console.log(res.data);
      }).catch(function (error){
        console.log("Error");
      })
    },
    deleteUserById(userId){
      if(confirm('Do you sure, you want to delete this user?'));
      axios.delete(`http://localhost:8081/v1/users/${userId}`).then(res => {
        this.getUsers();

      }).catch(function (error){
        console.log("Error");
      })
    }
  },
  mounted() {
    this.getUsers();
  }
}
</script>

<template>
  <div class="users">
    <div class="card">
      <div class="card-header">
        <h4>
          Users
          <RouterLink to="/user/create" class="btn btn-primary float-end">
            Add User
          </RouterLink>
        </h4>
      </div>
      <div class="card-body">
        <table class="table table-bordered">
          <thead>
           <tr>
             <th>Nro</th>
             <th>UserName</th>
             <th>Gmail</th>
             <th>First Name</th>
             <th>Last Name</th>
             <th>Age</th>

           </tr>
          </thead>
          <tbody v-if="users.length > 0">
            <tr v-for="(user, index) in this.users" :key="index">
              <td>{{ index+1}}</td>
              <td>{{ user.username}}</td>
              <td>{{ user.email}}</td>
              <td>{{ user.firstName}}</td>
              <td>{{ user.lastName}}</td>
              <td>{{ user.age}}</td>
              <td>
                <RouterLink :to="{path:'/user/'+ user.id+'/edit'}" class="btn btn-success ">
                  Edit
                </RouterLink>
                <button type="button" @click="deleteUserById(user.id)" class="btn btn-danger">
                  Detele
                </button>
              </td>
            </tr>
          </tbody>
          <tbody v-else>
            <td colspan="3">There aren't Users register</td>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>