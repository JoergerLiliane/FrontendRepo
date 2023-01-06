<template>
  <h1>Guardian</h1>
  <div class="container-fluid" id="guardian-view" >
    <guardian-card-list :key="store.guardiancardReload"></guardian-card-list>



  </div>

</template>

<script>
import {store} from "@/store";
import GuardianCardList from "@/components/GuardianCardList";



export default {
  name: 'UserView',
  components: {

    GuardianCardList,


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
