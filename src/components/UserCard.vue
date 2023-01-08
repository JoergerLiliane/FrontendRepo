<template>

  <div class="card h-1" id="user-card">
    <img :src="getAvatar(user)" class="rounded-circle img-thumbnail" :alt="user.firstName + ' ' + user.lastName ">
    <div class="card-body">
      <h5 class="card-title"> <label>Firstname:</label> {{ user.firstName }}</h5>
      <h5><label>Lastname:</label> {{ user.lastName }}</h5>
      <h5><label>Username:</label> {{user.userName}}</h5>
      <h5><label>UserId:</label> {{user.id}}</h5>

      <button class="btn btn-success me-3" type="add" @click="addGuardian" id="addGuardian" href="/guardian">Add Guardians</button>
      <button class="btn btn-warning me-3" type="update" @click="editUser()" href="/userSettings">Edit</button>
      <div v-if="user.guardianId > 0">
        <button class="btn btn-danger me-3" type="delete" @click="deleteGuardian(user.guardianId)" id="deleteGuardian" href="/delete-user">Delete Guardians</button>
      </div>
      <div v-if="user.guardianId.length === 0">
        <button class="btn btn-danger me-3" type="delete" @click="deleteUser(user.id)" id="deleteUser" href="/delete-user">Delete</button>
      </div>
    </div>

    </div>

    <div class="mt-5">


    </div>
</template>






<script>






import {store} from "@/store";
import router from "@/router";



export default {
  name: "UserCard",

  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      store,
    users: [],
    };
  },

  methods: {
    getAvatar(user) {
      if (user.gender === 'MALE') {
        return require('../assets/male.png')
      } else if (user.gender === 'FEMALE') {
        return require('../assets/female.png')
      }else if (user.gender === 'DIVERSE') {
        return require('../assets/diverse.png')
      }else if (user.gender === 'UNKNOWN') {
        return require('../assets/unknown.png')
      }


    },


    async deleteGuardian(guardians) {

      if (guardians.length > 0) {
        for (let i = 0; i < guardians.length; i++) {
          const endpoint = `http://localhost:8080/api/v1/guardian/${guardians[i]}`
          const requestOptions = {
            method: 'DELETE',
            redirect: 'follow'
          };
         await fetch(endpoint, requestOptions)
              .catch((error) => console.log('error', error));
        }
        this.reload()
      }
    },
    reload(){
      store.usercardReload++
    },


    async deleteUser(id) {
      console.log(store.usercardReload)
      const endpoint = `http://localhost:8080/api/v1/user/${id}`
      const requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
      };

     await fetch(endpoint, requestOptions)
          .catch((error) => console.log('error', error));
      router.push("/deletedUser")
          this.reload()
    },


     editUser(){
      store.user = this.user
     router.push("/userSettings")
    },


    addGuardian(){
      store.user = this.user
      router.push("/guardian")
    },



  }


}


</script>


<style scoped>

</style>
