<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/SafetyPicture.png">
    <user></user>
    <HelloWorld msg="Hello World"/>
  </div>
  <DynamicForm title = "Let's talk to the backend"> </DynamicForm>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
