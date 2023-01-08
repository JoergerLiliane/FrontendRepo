<template>
  <div class="container-fluid" id="deletedGuardian"></div>
  <p style="text-align:center"></p>
  <div></div>
  <div></div>
  <div></div>
  <textarea style="text-align: initial"  >This user was deleted</textarea>
  <div></div>
  <button type="button" @click.prevent="goBack()" class="btn btn-primary me-1 flex-grow-1">Go back</button>

</template>
<script>
import router from "@/router";

export default {
  name: "DeletedUser",

  methods: {
    goBack() {
      router.push("/profile")
    }


  }
}




</script>

<style scoped>

</style>
