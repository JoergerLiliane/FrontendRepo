<template>
  <div id="AddGuardian">
    <GuardianSignupForm></GuardianSignupForm>
    <section class="vh-10" style="background-color: #9de2ff;">
      <img src="https://img.freepik.com/free-photo/explosion-colored-powder-white-background_1112-1555.jpg" class="img-fluid" alt="...">
      <div><textarea align="center" >Add A new Guardian Here</textarea>
      </div>
      <button type="button" class="btn btn-success" onclick="addGuardian()">Add</button>
  </section>
  </div>

</template>


<script>
import GuardianSignupForm from "@/components/GuardianSignupForm";
import router from "@/router";

export default {
  name: "HomePage",
  components: {GuardianSignupForm},

  addGuardian() {
    let body = document.querySelector("#AddGuardian > button");
    router.push(body)

  }
}
</script>

<style scoped>

</style>
