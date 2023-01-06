<template>
  <h1>Users</h1>
  <div class="container-fluid" id="user-view" >
    <user-card-list :key="store.usercardReload"></user-card-list>
    <UserSignupForm></UserSignupForm>


  </div>

</template>

<script>
import UserSignupForm from "@/components/LogoutButton";
import UserCardList from "@/components/UserCardList";
import {store} from "@/store";


export default {
  name: 'UserView',
  components: {
    UserCardList,
    UserSignupForm,


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
