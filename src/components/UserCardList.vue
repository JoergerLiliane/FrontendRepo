<template>
  <div class="row row-cols-1 row-cols-md-4 g-4">
    <div class="col" v-for="user in users" :key="user.id">
      <user-card :user="user"></user-card>
    </div>
  </div>
</template>

<script>
import UserCard from '@/components/UserCard'


export default {
  name: 'UserCardList',
  components: {
    UserCard
  },
  props: {
    users: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
