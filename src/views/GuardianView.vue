<template>
  <h1>Guardian</h1>
  <div class="container-fluid" id="guardian-view" >
    <guardian-card-list :key="store.guardiancardReload"></guardian-card-list>
    <GuardianSignupForm></GuardianSignupForm>


  </div>

</template>

<script>
import {store} from "@/assets/store";
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
