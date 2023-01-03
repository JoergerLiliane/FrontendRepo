<template>
  <!-- Add New Guardians -->

  <section class="vh-1 align-items-center"  style="background-color: #9de2ff;">
    <div class="container py-5 h-100" id="guardian-card">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-md-9 col-lg-7 col-xl-5">
          <div class="card" style="border-radius: 1px;">
            <div class="card-body p-4">
              <div class="d-flex text-black">
                <div class="flex-shrink-0">
                  <img :src="getAvatar(guardian)" class="rounded-circle img-thumbnail" :alt="guardian.firstName + ' ' + guardian.lastName  + '' + guardian.id">
                </div>
              </div>
              <label class="font-weight-bold">Firstname: {{guardian.firstName}} Lastname: {{guardian.lastName}} number: {{guardian.phoneNumber}} Priority level: {{guardian.priorityLevel}} userId: {{store.guardian.userId}}</label>
                <div class="flex-grow-1 ms-3"><div class="d-flex justify-content-start rounded-3 p-2 mb-2"
                       style="background-color: #efefef;"></div><div class="d-flex pt-1">
                    <button type="button" class="btn btn-outline-primary me-1 flex-grow-1">Chat</button>
                    <button type="button" class="btn btn-primary flex-grow-1" @click="addGuardian()">Add</button>
                    <button class="btn btn-warning me-3" type="update" @click="updateGuardian()" href="/guardianSettings">Edit Guardian</button>
                    <button class="btn btn-danger me-3" type="delete" @click="deleteGuardian(guardian.id)" href="/delete-user">Delete Guardian</button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>

</template>

<script>


import {store} from "@/assets/store";
import router from "@/router";


export default {
  props: {
    guardian: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      store,
      guardians: [],
    };
  },

  methods: {
    getAvatar(guardian) {
      if (guardian.gender === 'MALE') {
        return require('../assets/male.png')
      } else if (guardian.gender === 'FEMALE') {
        return require('../assets/female.png')
      }
    },
    //https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp



    reload(){
      store.guardiancardReload++
    },


     async deleteGuardian(id) {
      console.log(store.usercardReload)
      const endpoint = `http://localhost:8080/api/v1/guardian/${id}`
      const requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
      };

       await fetch(endpoint, requestOptions)
          .catch((error) => console.log('error', error));
      this.reload()
    },



    updateGuardian() {
      store.guardian = this.guardian
      router.push("/guardianSettings")
    },

    addGuardian() {
      router.push("/AddGuardian")

    }

  }

}

</script>




<style scoped>

</style>
