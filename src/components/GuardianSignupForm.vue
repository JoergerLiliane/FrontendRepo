<template>
  <button class="btn btn-success sticky-button" data-bs-toggle="offcanvas" data-bs-target="#users-create-offcanvas" aria-controls="#users-create-offcanvas">
    <i class="bi bi-user-plus-fill"></i>
  </button>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="users-create-offcanvas" aria-labelledby="offcanvas-label">
    <div class="offcanvas-header">
      <h5 id="offcanvas-label">New Guardian</h5>
      <button type="button" id="close-offcanvas" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
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
          </select>
          <div class="invalid-feedback">
            Please select a valid gender.
          </div>

          <div class="mb-3">
            <label for="country" class="form-label">Country <span class="text-danger"></span></label>
            <select id="country" class="form-control form-control-lg" v-model="country" required>
              <option value="">Select Country</option>
              <option value="MALE">Germany</option>
              <option value="FEMALE">France</option>
              <option value="DIVERSE">Italy</option>
              <option value="DIVERSE">Spain</option>
              <option value="DIVERSE">Portugal</option>
              <option value="DIVERSE">South Africa</option>
              <option value="DIVERSE">United States</option>
              <option value="DIVERSE">United Kingdom</option>
            </select>
            <div class="invalid-feedback">
              Please select a valid country.
            </div>
          </div>

          <label for="userId" class="form-label">User</label>
          <select id="userId" class="form-select" v-model="user" required>
            <option value="" selected disabled>Choose...</option>
            <option value="User" ></option>

          </select>


          <div class="invalid-feedback">
            Please select a valid UserId.
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
import UserCard from "@/components/UserCard";


export default {
  name: 'GuardianSignupForm',
  components: UserCard,
  data () {
    return {
      firstName: '',
      lastName: '',
      gender: '',
      country: '',
      serverValidationMessagesGuardian: []
    }
  },
  emits: ['created'],
  methods: {

    async createGuardian () {
      if (this.validate() ) {

        const endpoint = 'http://localhost:8080/api/v1/guardian'

        const headers = new Headers()
        headers.append('Content-Type', 'application/json')

        const user = JSON.stringify({
          firstName: this.firstName,
          lastName: this.lastName,
          gender: this.gender,
        })

        const requestOptions = {
          method: 'POST',
          headers: headers,
          body: user,
          redirect: 'follow'
        }

        const response = await fetch(endpoint, requestOptions)
        await this.handleResponse(response)
      }
    },



    async handleResponse (response) {
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
    validate () {
      const form = document.getElementById('guardians-create-form')
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
