<template>
    <nav class="navbar navbar-expand navbar-light fixed-top">
      <div class="container">
        <a href="#" class="navbar-brand">Home</a>
        <a href="#" class="navbar-brand">About</a>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">


            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div class="container-fluid">
                <a class="navbar-brand" href="#">Profile</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
                  <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      </a>
                      <ul class="dropdown-menu dropdown-menu-light">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>


            <div class="dropdown-menu">
              <form class="px-4 py-3">
                <div class="mb-3">
                  <label for="exampleDropdownFormEmail1" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com">
                </div>
                <div class="mb-3">
                  <label for="exampleDropdownFormPassword1" class="form-label">Password</label>
                  <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password">
                </div>
                <div class="mb-3">
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="dropdownCheck">
                    <label class="form-check-label" for="dropdownCheck">
                      Remember me
                    </label>
                  </div>
                </div>
                <button type="submit" class="btn btn-primary">Sign in</button>
              </form>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">New around here? Sign up</a>
              <a class="dropdown-item" href="#">Forgot password?</a>
            </div>

            <li class="nav-item">
              <a href="#" class="nav-link">Login</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">Sign-up</a>
            </li>

          </ul>

        </div>

      </div>
    </nav>

</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Navbar'
}
</script>

<style scoped>

</style>
