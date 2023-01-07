<template>
  <h1>Guardians</h1>
  <div class="container-fluid" id="guardian-view" >
    <guardian-card-list :key="store.guardiancardReload"></guardian-card-list>
<guardian-signup-form></guardian-signup-form>


  </div>

</template>

<script>
import {store} from "@/store";
import GuardianCardList from "@/components/GuardianCardList";
import GuardianSignupForm from "@/components/GuardianSignupForm";



export default {
  name: 'UserView',
  components: {
    GuardianSignupForm,

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
