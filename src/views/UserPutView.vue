<template>
  <h1>ChooseUser</h1>
  <div class="container-fluid" id="user-put" >
    <user-card-list :users="this.users"></user-card-list>
    <user-view></user-view>
   <user-card @created="putUser"></user-card>
  </div>

</template>

<script>

import UserCardList from "@/components/UserCardList";
import UserView from "@/views/UserView";
import UserCard from "@/components/UserCard";



export default {
  name: 'UserPutView',
  components: {
    UserCard,
    UserView,
    UserCardList,

  },
  data () {
    return {

      users: []
    }
  },

  methods: {
    putUser (userLocation) {
      console.log(userLocation)
      const endpoint =  userLocation
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }
      fetch(endpoint, requestOptions).then(response => response.json()).then(user => this.users.push(user)).catch(error => console.log('error', error))
    }
  },
  mounted () {
    const endpoint = 'http://localhost:8080/api/v1/user/'

    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    fetch(endpoint, requestOptions).then(response => response.json()).then(result => result.forEach(user => {
      this.users.push(user)
    })).catch(error => console.log('error', error))
  }



}
</script>

<style scoped>

</style>
