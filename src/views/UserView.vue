<template>
  <h1>User</h1>
  <div class="container-fluid" id="user-view" >
    <user-card-list :key="store.usercardReload"></user-card-list>
    <UserSignupForm></UserSignupForm>



  </div>

</template>

<script>

import UserCardList from "@/components/UserCardList";
import {store} from "@/store";
import UserSignupForm from "@/components/LogoutButtonUser";



export default {
  name: 'UserView',
  components: {

    UserSignupForm,
    UserCardList,



  },
  data () {
    return {
      store
    }
  },

}
</script>

<style scoped>

</style>
