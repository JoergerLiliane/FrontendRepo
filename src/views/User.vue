<template>
  <h1>Welcome to User</h1>
  <div class="container-fluid">
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col" v-for="user in users" :key="user">
        <div class="card h-100">
          <img :src="getAvatar(user)" class="card-img-top" :alt="users.firstName + ' ' + users.lastName">
          <div class="card-body">
            <h5 class="card-title">{{ users.firstName }} {{ users.lastName }}</h5>
            <p class="card-text">
              {{ user.firstName }} {{ users.lastName }} ist {{ users.isUser ? 'is a user' : 'is not a user' }} and
              has {{ users.hasAGuardian.length }} Guardian(s).
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'User',
  data() {
    return {
      users: []
    }
  },

  methods: {
    getAvatar () {
      let user;
      if (user.gender === 'MALE') {
        // eslint-disable-next-line no-undef
        return require('../assets/male.png')
      } else if (user.gender === 'FEMALE') {
        // eslint-disable-next-line no-undef
        return require('../assets/female.png')
      }
    }
  },


mounted ()
{
  const endpoint =  'http://localhost:8080/api/v1/guardian'
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  }

  //axios.get

  fetch(endpoint, requestOptions)
    .then(response => response.json())
    .then(result => result.forEach(user => {
      this.users.push(user)
    }))
    .catch(error => console.log('error', error))
  }
}


</script>

<style scoped>
</style>

}
