<template>

  <div class="card h-100" id="user-card">
    <img :src="getAvatar(user)" class="card-img-top" :alt="user.firstName + ' ' + user.lastName + '' + user.country">
    <div class="card-body">
      <h5 class="card-title">{{ user.firstName }} {{ user.lastName }}</h5>
      <p class="card-text">
        {{ user.firstName }} {{ user.lastName }}
      </p>
      <button class="btn btn-warning me-3" type="update" @click="updateUser()" href="/userSettings">Edit User</button>

      <p id='txt'>Change your datas here</p>
      {{user}}

      <input type="text" id="name" placeholder="name">
      <input type="text" id="marks" placeholder="marks">
    </div>


      <button onclick="submit()">Submit</button>
    </div>
    <div class="mt-5">

      <div v-if="user.guardianId > 0">
        <button class="btn btn-primary me-3" type="delete" @click="deleteGuardian(user.guardianId)" id="deleteGuardian" href="/delete-user">Delete Guardians</button>
      </div>
      <div v-if="user.guardianId.length === 0">
        <button class="btn btn-primary me-3" type="delete" @click="deleteUser(user.id)" id="deleteUser" href="/delete-user">Delete User</button>
      </div>
      <div id="results">
      </div>
    </div>
</template>






<script>



//document.getElementById('btn-primary').removeEventListener('delete', (e) => {

 // e.preventDefault();

  // delete user using fetch



import {store} from "@/assets/store";
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
          this.reload()
    },


     updateUser(){
      store.user = this.user
     router.push("/UserSettings")
    },
  }
}


</script>


<style scoped>

</style>
