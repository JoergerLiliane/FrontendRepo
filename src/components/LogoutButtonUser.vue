<template>
  <button id="button" class="btn btn-warning sticky-button" data-bs-toggle="offcanvas" data-bs-target="#users-create-offcanvas" aria-controls="#users-create-offcanvas">
    <a class="navbar-brand js-scroll-trigger" href="/">Logout</a>
  </button>
  <button type="button" @click.prevent="goBack()" class="btn btn-primary me-1 flex-grow-1">Go back</button>


</template>



<script>


import router from "@/router";

export default {
  name: "LogoutButton",
  methods: {

    goBack() {
      router.push("/")
    }
  }

}

</script>

<style scoped>
.sticky-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 15px;
  border-radius: 30px;
}
</style>
