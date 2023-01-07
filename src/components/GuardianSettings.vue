<template >
  <html>
  <!-- Button trigger modal -->
  <div class="card h-100" id="guadianSettings">
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">

    </button>

    <div class="container rounded bg-white mt-5 mb-5">
      <div class="row">
        <div class="col-md-3 border-right">
          <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"><label class="font-weight-bold">Firstname</label><span class="labels">{{store.guardian.firstName}}</span><label class="font-weight-bold">Lastname</label><span class="labels">{{store.guardian.lastName}}</span>
            <label class="font-weight-bold">Phone number</label><span class="labels">{{store.guardian.phoneNumber}}</span>
            <label class="font-weight-bold">Priority level</label><span class="labels">{{store.guardian.priorityLevel}}</span>
          </div>
        </div>
        <div class="col-md-5 border-right">
          <div class="p-3 py-5">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h4 class="text-right">Guardian Settings</h4>
            </div>
            <div class="row mt-2">
              <div class="col-md-6"><label class="labels">Firstname</label><input type="text" class="form-control" placeholder="Firstname"  v-model="firstName"></div>
              <div class="col-md-6"><label class="labels">Lastname</label><input type="text" class="form-control"  placeholder="lastname" v-model="lastName" ></div>
            </div>
            <div class="row mt-3">
              <div class="col-md-12"><label class="labels">Number</label><input type="text" class="form-control" placeholder="enter phone number"  v-model="phoneNumber"></div>

            </div>
            <div class="row mt-3">
              <div class="col-md-6"><label class="labels">PriorityLevel</label><input type="text" class="form-control"  placeholder="priorityLevel" v-model="priorityLevel"></div>
            </div>
            <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button" @click="editGuardianSettings">Save Profile</button></div>
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
  name: "GuardianSettings",
  data() {
    return {
      firstName: "",
      lastName: "",
      phoneNumber:"",
      priorityLevel:"",
      store

    }
  },

  methods: {
    async editGuardianSettings() {
      if (this.firstName.length<2) {
        this.firstName = store.guardian.firstName
      }

      if (this.lastName.length<3) {
        this.lastName = store.guardian.lastName
      }

      if (this.phoneNumber.length<1) {
        this.phoneNumber = store.guardian.phoneNumber
      }

      if (this.priorityLevel.length<1) {
        this.priorityLevel = store.guardian.priorityLevel
      }

      const user = JSON.stringify({
        firstName: this.firstName,
        lastName: this.lastName,
        gender: store.guardian.gender,
        phoneNumber: parseFloat(this.phoneNumber),
        priorityLevel: this.priorityLevel,
        userId: store.guardian.userId

      })

      const headers = new Headers()
      headers.append('Content-Type', 'application/json')

      console.log(store.guardiancardReload)
      const endpoint = `http://localhost:8080/api/v1/guardian/${store.guardian.id}`
      const requestOptions = {
        method: 'PUT',
        headers: headers,
        body: user,
        redirect: 'follow'
      };


      await fetch(endpoint, requestOptions)
          .catch((error) => console.log('error', error));
      router.push("/guardian")
    },

  },



}

</script>

<style scoped>

</style>
