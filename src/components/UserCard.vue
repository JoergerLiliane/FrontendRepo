<template>
  <div className="card h-100">
    <img :src="getAvatar(user)" class="card-img-top" :alt="user.firstName + ' ' + user.lastName">
    <div className="card-body">
      <h5 className="card-title">{{ user.firstName }} {{ user.lastName }}</h5>
      <p className="card-text">
        {{ user.firstName }} {{ user.lastName }}.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserCard',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    getAvatar(user) {
      if (user.gender === 'MALE') {
        return require('../assets/male.png')
      } else if (user.gender === 'FEMALE') {
        return require('../assets/female.png')
      }
    }
  }
}
</script>

<style scoped>

</style>
