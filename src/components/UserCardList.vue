<template>
  <div class="row row-cols-1 row-cols-md-4 g-4">
    <div class="col" v-for="user in store.userarray" :key="user.id">
      <user-card :user="user"></user-card>

    </div>
  </div>
</template>

<script>
import UserCard from '@/components/UserCard'
import {onMounted} from "vue";
import {store} from "@/store";


async function UpdateExisting() {
  let body = document.querySelector("#user-view > div.row.row-cols-1.row-cols-md-4.g-4");
  if (body.childElementCount > 0){
    for (let i = 0; i < body.childElementCount; i++){
      console.log("Flag")
      //body.removeChild(document.querySelector(`#user-view > div.row.row-cols-1.row-cols-md-4.g-4 > div:nth-child(${i+1})`))
      document.querySelector(`#user-view > div.row.row-cols-1.row-cols-md-4.g-4 > div:nth-child(${i+1})`).innerHTML = "";
      console.log(document.querySelector(`#user-view > div.row.row-cols-1.row-cols-md-4.g-4 > div:nth-child(${i+1})`))
    }

  }
}

export default {
  name: 'UserCardList',
  components: {
    UserCard
  },

  data(){
    return{
      store
    }
  },

  setup(){
    onMounted(async () =>  {
      await UpdateExisting().then( async function (){
        const a = []
        store.userarray = a
        console.log(store.userarray)
        const endpoint = 'http://localhost:8080/api/v1/user'
        const requestOptions = {
          method: 'GET',
          redirect: 'follow'
        }
        fetch(endpoint, requestOptions).then(response => response.json()).then(result => result.forEach(user => {
          store.userarray.push(user)
        })).catch(error => console.log('error', error))
            console.log("Flag2")
        console.log(store.userarray)
      }
      )


    })
  }
}
</script>

<style scoped>

</style>
