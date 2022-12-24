<template>
  <div class="container-fluid" >
    <user-card-list :users="this.user"></user-card-list>
    <UserSignupForm  @created="addUser"></UserSignupForm>
  </div>

</template>

<script>
import UserSignupForm from "@/components/UserSignupForm";
import UserCardList from "@/components/UserCardList";





export default {
  name: 'UserProfile',
  components: {
    UserCardList,
    UserSignupForm,


  },
  data () {
    return {
      user: []
    }
  },
  methods: {
    addUser (userLocation) {
      console.log(userLocation)
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + userLocation
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }

      fetch(endpoint, requestOptions)
          .then(response => response.json())
          .then(user => this.users.push(user))
          .catch(error => console.log('error', error))
    }
  },
  mounted () {
    const endpoint = 'http://localhost:8080//api/v1/user'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(result => result.forEach(user => {
          this.users.push(user)
        }))
        .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>

</style>
