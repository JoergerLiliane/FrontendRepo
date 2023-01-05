<template>
  <div class="collapse navbar-collapse" id="navbarResponsive">
    <ul class="navbar-nav text-uppercase ml-auto">
      <li class="nav-item">
        <a class="nav-link js-scroll-trigger" href="/pro">Profile</a>
      </li>
    </ul>
  </div>

  <div class="LoginUser" id="registration">
    <h1>Registration</h1>
  </div>
  <UserSignupForm></UserSignupForm>


  <!DOCTYPE html>
  <html>
  <head>
    <title>Slide Navbar</title>

    <link rel="stylesheet" type="text/css" href="slide navbar style.css">
    <link href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap" rel="stylesheet">

  </head>
  <body>
  <div class="main">
    <input type="checkbox" id="chk" aria-hidden="true">
    <div class="signup">
      <form   class="text-start needs-validation" id="users-create-form" novalidate >
        <button type="button" id="close-offcanvas" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        <label for="chk" aria-hidden="true">Sign up</label>
        <input type="text" name="txt" placeholder="firstName" v-model="firstName" required><div class="invalid-feedback">
        Please provide the firstname.
      </div>
        <input type="text" name="txt" placeholder="lastName" v-model="lastName" required>
        <div class="invalid-feedback">
          Please provide the firstname.
        </div>
        <select id="gender" class="form" v-model="gender" required>
          <option value="">Select Gender</option>
          <option value="" selected disabled>Choose...</option>
          <option value="MALE">Male</option>
          <option value="FEMALE">Female</option>
          <option value="DIVERSE">Diverse</option>
          <option value="Unkown">Unknown</option>
        </select>
        <div class="invalid-feedback">
          Please select a valid gender.
        </div>
        <select id="country" class="form" v-model="country" required>
          <option value="">Select Country</option>
          <option value="" selected disabled>Choose...</option>
          <option value="Germany">Germany</option>
          <option value="France">France</option>
          <option value="Spain">Spain</option>
          <option value="Others">Others</option>
        </select>
        <div class="invalid-feedback">
          Please select a valid country.
        </div>
        <input type="text" name="txt" placeholder="userName" v-model="userName" required>
        <div class="invalid-feedback">
          Please provide a username.
        </div>
        <input type="password" name="pswd" placeholder="Password" v-model="password" required>
        <div class="invalid-feedback">
          Please provide a valid password.
        </div>
        <div v-if="this.serverValidationMessagesUser">
          <ul>
            <li v-for="(message, index) in serverValidationMessagesUser" :key="index" style="color: red">
              {{ message }}
            </li>
          </ul>
        </div>
        <div class="mt-5">
          <button type="submit" @click.prevent="registerUser">Registration</button>
          <button class="btn btn-danger" type="reset">Reset</button>
        </div>

      </form>
    </div>

    <div></div>

    <div class="login" id="login">
      <form>
        <button type="submit" @click.prevent="loginUser">Login</button>
      </form>
    </div>

  </div>

  </body>
  </html>


</template>



<script >
//Registration

import {store} from "@/assets/store";
import router from "@/router";

export default {
  name: 'LoginUserView',
  data () {
    return {
      firstName: '',
      lastName: '',
      gender: '',
      user:'true',
      country:'',
      userName:'',
      password:'',
      serverValidationMessagesUser: []
    }
  },
  emits: ['created'],
  methods: {
    async registerUser () {
      if (this.validate()) {

        const endpoint = 'http://localhost:8080/api/v1/user'

        const headers = new Headers()
        headers.append('Content-Type', 'application/json')

        const user = JSON.stringify({
          firstName: this.firstName,
          lastName: this.lastName,
          gender: this.gender,
          guardianId: store.user.guardianId,
          country: this.country,
          userName: this.userName,
          passWord: this.password,


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
        await router.push("/login")
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

    loginUser(){
      router.push("/login")

  },


  //Login


}




}

</script>

<style scoped>
body{
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: 'Jost', sans-serif;
  background: linear-gradient(to bottom, #0f0c29, #302b63, #24243e);
}
.main{
  width: 400px;
  height: 800px;
  background: red;
  overflow: hidden;
  background: url("https://doc-08-2c-docs.googleusercontent.com/docs/securesc/68c90smiglihng9534mvqmq1946dmis5/fo0picsp1nhiucmc0l25s29respgpr4j/1631524275000/03522360960922298374/03522360960922298374/1Sx0jhdpEpnNIydS4rnN4kHSJtU1EyWka?e=view&authuser=0&nonce=gcrocepgbb17m&user=03522360960922298374&hash=tfhgbs86ka6divo3llbvp93mg4csvb38") no-repeat center/ cover;
  border-radius: 10px;
  box-shadow: 5px 20px 50px #000;
}
#chk{
  display: none;
}
.signup{
  position: relative;
  width:100%;
  height: 100%;
}
label{
  color: #fff;
  font-size: 2.3em;
  justify-content: center;
  display: flex;
  margin: 60px;
  font-weight: bold;
  cursor: pointer;
  transition: .5s ease-in-out;
}
input{
  width: 60%;
  height: 20px;
  background: #e0dede;
  justify-content: center;
  display: flex;
  margin: 20px auto;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 5px;
}
button{
  width: 60%;
  height: 40px;
  margin: 10px auto;
  justify-content: center;
  display: block;
  color: #fff;
  background: #573b8a;
  font-size: 1em;
  font-weight: bold;
  margin-top: 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  transition: .2s ease-in;
  cursor: pointer;
}
button:hover{
  background: #6d44b8;
}
.login{
  height: 460px;
  background: #eee;
  border-radius: 60% / 10%;
  transform: translateY(-180px);
  transition: .8s ease-in-out;
}
.login label{
  color: #573b8a;
  transform: scale(.6);
}

#chk:checked ~ .login{
  transform: translateY(-500px);
}
#chk:checked ~ .login label{
  transform: scale(1);
}
#chk:checked ~ .signup label{
  transform: scale(.6);
}




</style>

