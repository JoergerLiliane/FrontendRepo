<template>
  <button class="btn btn-success sticky-button"  data-bs-toggle="offcanvas" data-bs-target="#users-create-offcanvas" aria-controls="#users-create-offcanvas">
    <i class="bi bi-user-plus-fill" ></i><a class="navbar-brand js-scroll-trigger" >Add Guardian</a></button>

  <div class="offcanvas offcanvas-end" tabindex="-1" id="users-create-offcanvas" aria-labelledby="offcanvas-label">
    <div class="offcanvas-header">
      <h5 id="offcanvas-label">New Guardian</h5>
    </div>
    <div class="offcanvas-body">


      <form class="text-start needs-validation" id="guardians-create-form" novalidate>
        <div class="mb-3">
          <label for="first-name" class="form-label">Firstname</label>
          <input type="text" class="form-control" id="first-name" v-model="firstName" required>
          <div class="invalid-feedback">
            Please provide the firstname.
          </div>
        </div>
        <div class="mb-3">
          <label for="last-name" class="form-label">Lastname</label>
          <input type="text" class="form-control" id="last-name" v-model="lastName" required>
          <div class="invalid-feedback">
            Please provide the lastname.
          </div>
        </div>
        <div class="mb-3">
          <label for="gender" class="form-label">Gender</label>
          <select id="gender" class="form-select" v-model="gender" required>
            <option value="">Select Gender</option>
            <option value="" selected disabled>Choose...</option>
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
            <option value="DIVERSE">Diverse</option>
            <option value="UNKNOWN">Unknown</option>
          </select>
          <div class="invalid-feedback">
            Please select a valid gender.
          </div>
          <div class="mb-3">
            <label for="user-Id" class="form-label">UserId</label>
            <input type="text" class="form-control" id="user-Id" v-model="userId" required>
            <div class="invalid-feedback">
              Please provide a userId.
            </div>
          </div>
          <div class="mb-3">
            <label for="phone-number" class="form-label">phoneNumber</label>
            <input type="text" class="form-control" id="phone-Number" v-model="phoneNumber" required>
            <div class="invalid-feedback">
              Please provide a valide phone number.
            </div>
          </div>
          <div class="mb-3">
            <label for="priority-level" class="form-label">PriorityLevel</label>
            <input type="text" class="form-control" id="priority-level" v-model="priorityLevel" required>
            <div class="invalid-feedback">
              Please provide a valid priority level.
            </div>
          </div>
        </div>
        <div v-if="this.serverValidationMessagesGuardian">
          <ul>
            <li v-for="(message, index) in serverValidationMessagesGuardian" :key="index" style="color: red">
              {{ message }}
            </li>
          </ul>
        </div>
        <div class="mt-5">
          <button class="btn btn-primary me-3" type="submit" @click.prevent="createGuardian">Create</button>
          <button class="btn btn-danger" type="reset">Reset</button>
        </div>
      </form>
    </div>
  </div>





</template>


<script>

import {store} from "@/store";
import router from "@/router";


export default {
  name: 'GuardianSignupForm',

  data() {
    return {
      firstName: '',
      lastName: '',
      gender: '',
      phoneNumber: '',
      guardian:'',
      priorityLevel:'',
      userId:'',
      serverValidationMessagesGuardian: []
    }
  },
  emits: ['created'],
  methods: {

    async createGuardian() {
      if (this.validate()) {

        const endpoint = 'http://localhost:8080/api/v1/guardian'

        const headers = new Headers()
        headers.append('Content-Type', 'application/json')

        const user = JSON.stringify({
          firstName: this.firstName,
          lastName: this.lastName,
          gender: this.gender,
          phoneNumber: this.phoneNumber,
          guardian: true,
          priorityLevel: this.priorityLevel,
          userId: this.userId

        })

        const requestOptions = {
          method: 'POST',
          headers: headers,
          body: user,
          redirect: 'follow'
        }

        const response = await fetch(endpoint, requestOptions)

        this.reload()

        await this.handleResponse(response)

        await router.push("/guardian")

      }
    },

    reload(){
      store.guardiancardReload++
    },

    async handleResponse(response) {
      if (response.ok) {
        this.$emit('created', response.headers.get('location'))
        document.getElementById('close-offcanvas').click()
      } else if (response.status === 400) {
        response = await response.json()
        response.errors.forEach(error => {
          this.serverValidationMessagesGuardian.push(error.defaultMessage)
        })
      } else {
        this.serverValidationMessagesGuardian.push('Unknown error occurred')
      }
    },
    validate() {
      const form = document.getElementById('guardians-create-form')
      form.classList.add('was-validated')
      return form.checkValidity()
    },


  },



}
</script>

<style scoped>
.sticky-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 15px;
  border-radius: 30px;
}
</style>
