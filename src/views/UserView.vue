<template>
  <h1>Users</h1>
  <div class="container-fluid" >
    <user-card-list :users="this.users"></user-card-list>
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
      users: []
    }
  },
  methods: {
    addUser (userLocation) {
      console.log(userLocation)
      const endpoint =  userLocation
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
    const endpoint = 'http://localhost:8080/api/v1/xmas'

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
