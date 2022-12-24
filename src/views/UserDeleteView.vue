<template>
  <h1>DeletedUser</h1>
  <div class="container-fluid" id="user-delete">
    <user-card-list :users="this.users"></user-card-list>
    <user-put-view></user-put-view>
  </div>

</template>

<script>

import UserCardList from "@/components/UserCardList";
import UserPutView from "@/views/UserPutView";




export default {
  name: 'UserDeleteView',
  components: {
    UserPutView,
    UserCardList,

  },
  data () {
    return {

      users: []
    }
  },

  methods: {
    deleteUser (userLocation) {
      console.log(userLocation)
      const endpoint =  userLocation
      const requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
      }
      fetch(endpoint, requestOptions).then(response => response.json()).then(user => this.users.push(user)).catch(error => console.log('error', error))
    }
  },
  mounted () {
    const endpoint = 'http://localhost:8080/api/v1/user/161'

    const requestOptions = {
      method: 'DELETE',
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
