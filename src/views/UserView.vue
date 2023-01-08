<template>
  <h1>User</h1>
  <div class="container-fluid" id="user-view" >
    <user-card-list :key="store.usercardReload"></user-card-list>




  </div>

</template>

<script>

import UserCardList from "@/components/UserCardList";
import {store} from "@/store";


export default {
  name: 'UserView',
  components: {
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
