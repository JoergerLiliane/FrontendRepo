<template>
  <button class="btn btn-success sticky-button" data-bs-toggle="offcanvas" data-bs-target="#users-create-offcanvas" aria-controls="#users-create-offcanvas">
    <i class="bi bi-user-plus-fill"></i>
  </button>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="users-create-offcanvas" aria-labelledby="offcanvas-label">
    <div class="offcanvas-header">
      <h5 id="offcanvas-label">New User</h5>
      <button type="button" id="close-offcanvas" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <form class="text-start needs-validation" id="users-create-form" novalidate>
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
          </select>
          <div class="invalid-feedback">
            Please select a valid gender.
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
          <label for="country" class="form-label">Country</label>
          <select id="country" class="form-select" v-model="country" >
            <option value="">Select Country</option>
            <option value="" selected disabled>Choose...</option>
            <option value="Germany">Germany</option>
            <option value="France">France</option>
            <option value="Spain">Spain</option>
            <option value="Spain">Others</option>
          </select>
          <div class="invalid-feedback">
            Please select a valid country.
          </div>
        </div>
          <div class="mb-3">
            <label for="userName" class="form-label">userName</label>
            <input type="text" class="form-control" id="userName" v-model="userName" required>
            <div class="invalid-feedback">
              Please provide a valide username.
            </div>
          </div>


          <div class="mb-3">
            <label for="password" class="form-label">password</label>
            <input type="text" class="form-control" id="password" v-model="password" required>
            <div class="invalid-feedback">
              Please provide a valide password.
            </div>
          </div>


        <div v-if="this.serverValidationMessagesUser">
          <ul>
            <li v-for="(message, index) in serverValidationMessagesUser" :key="index" style="color: red">
              {{ message }}
            </li>
          </ul>
        </div>

        <div class="mt-5">
          <button class="btn btn-primary me-3" type="submit" @click.prevent="createUser">Create</button>
          <button class="btn btn-danger" type="reset">Reset</button>
        </div>
      </form>
    </div>
  </div>
</template>


<script>



import {store} from "@/assets/store";

export default {
  name: 'UserSignupForm',
  data () {
    return {
      firstName: '',
      lastName: '',
      gender: '',
      phoneNumber:'',
      user:'true',
      country:'',
      userName:'',
      password:'',
      serverValidationMessagesUser: []
    }
  },
  emits: ['created'],
  methods: {
    async createUser () {
      if (this.validate()) {

        const endpoint = 'http://localhost:8080/api/v1/user'

        const headers = new Headers()
        headers.append('Content-Type', 'application/json')

        const user = JSON.stringify({
          firstName: this.firstName,
          lastName: this.lastName,
          gender: this.gender,
          phone: this.phoneNumber,
          guardianId: store.user.guardianId,
          country:this.country,
          userName:this.userName,
          password:this.password



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
      }
    },

    reload(){
      store.usercardReload++
    },

    async handleResponse (response) {
      if (response.ok) {
        this.$emit('created', response.headers.get('location'))
        document.getElementById('close-offcanvas').click()
      } else if (response.status === 400) {
        response = await response.json()
        response.errors.forEach(error => {
          this.serverValidationMessagesUser.push(error.defaultMessage)
        })
      } else {
        this.serverValidationMessagesUser.push('Unknown error occurred')
      }
    },
    validate () {
      const form = document.getElementById('users-create-form')
      form.classList.add('was-validated')
      return form.checkValidity()
    },


  }
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
