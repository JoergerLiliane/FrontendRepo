<template>
  <div>

    <h3>Installed CLI Plugins</h3>

  </div>
</template>

<script>

import App from "@/App";


export default {
  name: 'HomeView',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    App,


  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
