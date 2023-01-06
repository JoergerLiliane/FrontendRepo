<template>
  <button id="button" class="btn btn-warning sticky-button" data-bs-toggle="offcanvas" data-bs-target="#users-create-offcanvas" aria-controls="#users-create-offcanvas">
    <a class="navbar-brand js-scroll-trigger" href="/">Logout</a>
  </button>

    <div class="offcanvas-header">
      <h5 id="offcanvas-label">New User</h5>

    </div>

</template>


<script>



import {store} from "@/store";
import router from "@/router";

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


    logout() {
      router.push('/')
    }


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
