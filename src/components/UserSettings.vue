<template>
<html>
  <!-- Button trigger modal -->
  <div class="card h-100" id="userSettings">
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">

  </button>

  <div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
      <div class="col-md-3 border-right">
        <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"><span class="font-weight-bold">Edogaru</span><span class="text-black-50">edogaru@mail.com.my</span><span> </span></div>
      </div>
      <div class="col-md-5 border-right">
        <div class="p-3 py-5">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h4 class="text-right">User Settings</h4>
          </div>
          <div class="row mt-2">
            <div class="col-md-6"><label class="labels">Firstname</label><input type="text" class="form-control" placeholder="firstname" value=""></div>
            <div class="col-md-6"><label class="labels">Lastname</label><input type="text" class="form-control" value="" placeholder="lastname" ></div>
          </div>
          <div class="row mt-3">
            <div class="col-md-12"><label class="labels">Number</label><input type="text" class="form-control" placeholder="enter phone number" value="" ></div>
            <div class="col-md-12"><label class="labels">Address Line 1</label><input type="text" class="form-control" placeholder="enter address line 1" value="" ></div>
            <div class="col-md-12"><label class="labels">Postcode</label><input type="text" class="form-control" placeholder="enter postcode" value=""></div>
            <div class="col-md-12"><label class="labels">State</label><input type="text" class="form-control" placeholder="enter state" value="" ></div>
            <div class="col-md-12"><label class="labels">location</label><input type="text" class="form-control" placeholder="enter location" value=""></div>
            <div class="col-md-12"><label class="labels">Email Address</label><input type="text" class="form-control" placeholder="enter email id" value="" ></div>
          </div>
          <div class="row mt-3">
            <div class="col-md-6"><label class="labels">Country</label><input type="text" class="form-control" placeholder="country" value=""></div>
            <div class="col-md-6"><label class="labels">State/Region</label><input type="text" class="form-control" value="" placeholder="state"></div>
          </div>
          <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button" @click="saveProfile(user.id)">Save Profile</button></div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="p-3 py-5">
          <div class="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span><span class="border px-3 p-1 add-experience"><i class="fa fa-plus"></i>&nbsp;Experience</span></div><br>
          <div class="col-md-12"><label class="labels">Experience in Designing</label><input type="text" class="form-control" placeholder="experience" value=""></div> <br>
          <div class="col-md-12"><label class="labels">Additional Details</label><input type="text" class="form-control" placeholder="additional details" value=""></div>
        </div>
      </div>
    </div>
  </div>
  </div>
</html>
</template>



<script>
import {store} from "@/assets/store";
import {onMounted} from "vue";
import UserCard from "@/components/UserCard";

async function updateExisting() {
  let body = document.querySelector("#user-view > div.row.row-cols-1.row-cols-md-4.g-4");
  if (body.childElementCount > 0){
    for (let i = 0; i < body.childElementCount; i++){
      console.log("Flag")
      //body.removeChild(document.querySelector(`#user-view > div.row.row-cols-1.row-cols-md-4.g-4 > div:nth-child(${i+1})`))
      document.querySelector(`#user-view > div.row.row-cols-1.row-cols-md-4.g-4 > div:nth-child(${i+1})`).innerHTML = "";
      console.log(document.querySelector(`#user-view > div.row.row-cols-1.row-cols-md-4.g-4 > div:nth-child(${i+1})`))
    }

  }
}


export default {
  name: "UserUpdate",
  data() {
    return {
      firstname: "",
      lastname: "",
      number:"",
      address:"",
      postcode:"",
      state:"",
      location:"",
      email:"",
      UserCard,
      userArray: [],
      store

    }
  },



  setup(){
    onMounted(async () =>  {
      await updateExisting().then( async function (){
            const a = []
            store.user = a
            console.log(store.user)
            const endpoint = 'http://localhost:8080/api/v1/user'
            const requestOptions = {
              method: 'GET',
              redirect: 'follow'
            }
            fetch(endpoint, requestOptions).then(response => response.json()).then(result => result.forEach(user => {
              store.user.push(user)
            })).catch(error => console.log('error', error))
            console.log("Flag2")
            console.log(store.user)
          }
      )


    })
  },
    saveProfile(id) {
    console.log(store.usercardReload)
    const endpoint = `http://localhost:8080/api/v1/user/${id}`
    const requestOptions = {
      method: 'PUT',
      redirect: 'follow'
    };

     fetch(endpoint, requestOptions)
        .catch((error) => console.log('error', error));
    this.reload()
  },


}

</script>

<style scoped>

</style>
