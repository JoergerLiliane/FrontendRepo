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
                <div class="flex-grow-1 ms-3">
                  <div class="d-flex justify-content-start rounded-3 p-2 mb-2"
                       style="background-color: #efefef;"></div><div class="d-flex pt-1">
                  <div></div>
                  <button class="btn btn-warning me-md-1" type="update" @click="editGuardian()" href="/guardianSettings">Edit Guardian</button>
                    <button class="btn btn-danger me-md-1" type="delete" @click="deleteGuardian(guardian.id)" href="/deletedGuardian">Delete Guardian</button>
                  <button type="button" @click.prevent="goBack()" class="btn btn-primary me-1 flex-grow-1">Go back</button>
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


import {store} from "@/store";
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
        return require('../assets/maleGuardian.png')
      } else if (guardian.gender === 'FEMALE') {
        return require('../assets/femaleGuardian.png')
      }else if (guardian.gender === 'DIVERSE') {
        return require('../assets/diverseGuardian.png')
      }else if (guardian.gender === 'UNKNOWN') {
        return require('../assets/unknownGuardian.png')
      }

    },




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
       router.push("/deletedGuardian")
      this.reload()
    },



    editGuardian() {
      store.guardian = this.guardian
      router.push("/guardianSettings")
    },


    goBack() {
      router.push("/profile")
    }

  }

}

</script>




<style scoped>

</style>
