<template >
  <html>
  <!-- Button trigger modal -->
  <div class="card h-100" id="userSettings">
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">

    </button>

    <div class="container rounded bg-white mt-5 mb-5">
      <div class="row">
        <div class="col-md-3 border-right">
          <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"><label class="font-weight-bold">Firstname</label><span class="labels">{{store.user.firstName}}</span><label class="font-weight-bold">Lastname</label><span class="labels">{{store.user.lastName}}</span>
            <label class="font-weight-bold">Phone number</label><span class="labels">{{store.user.phoneNumber}}</span>
          </div>
        </div>
        <div class="col-md-5 border-right">
          <div class="p-3 py-5">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h4 class="text-right">User Settings</h4>
            </div>
            <div class="row mt-2">
              <div class="col-md-6"><label class="labels">Firstname</label><input type="text" class="form-control" placeholder="Firstname"  v-model="firstName"></div>
              <div class="col-md-6"><label class="labels">Lastname</label><input type="text" class="form-control"  placeholder="Lastname" v-model="lastName" ></div>
            </div>
            <div class="row mt-3">
              <div class="col-md-12"><label class="labels">Number</label><input type="text" class="form-control" placeholder="enter phone number"  v-model="phoneNumber"></div>
            </div>
            <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button" @click="editUserSettings">Save Profile</button></div>
          </div>
        </div>
        <div class="col-md-4">

        </div>
      </div>
    </div>
  </div>
  </html>
</template>



<script>
import {store} from "@/store";
import router from "@/router";


export default {
  name: "UserSettings",
  data() {
    return {
      firstName: "",
      lastName: "",
      phoneNumber:"",
      store

    }
  },

  methods: {
    async editUserSettings() {
      console.log(this.lastName)

      if (this.firstName.length<2) {
        this.firstName = store.user.firstName
      }

      if (this.lastName.length<3) {
        this.lastName = store.user.lastName
      }

      console.log(this.lastName +'1')

      if (this.phoneNumber.length<1) {
        this.phoneNumber = store.user.phoneNumber
      }



      const user = JSON.stringify({
        firstName: this.firstName,
        lastName: this.lastName,
        gender: store.user.gender,
        phoneNumber: parseFloat(this.phoneNumber),
        guardianId: store.user.guardianId

      })

      const headers = new Headers()
      headers.append('Content-Type', 'application/json')

      console.log(store.usercardReload)
      const endpoint = `http://localhost:8080/api/v1/user/${store.user.id}`
      const requestOptions = {
        method: 'PUT',
        headers: headers,
        body: user,
        redirect: 'follow'
      };


      await fetch(endpoint, requestOptions)
          .catch((error) => console.log('error', error));
      router.push("/profile")
    },

  },



}

</script>

<style scoped>

</style>
