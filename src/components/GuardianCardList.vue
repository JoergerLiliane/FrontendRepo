<template>
  <div class="row row-cols-1 row-cols-md-4 g-4">
    <div class="col" v-for="guardian in store.guardianarray" :key="guardian.id">
      <guardian-card :guardian="guardian"></guardian-card>

    </div>
  </div>
</template>

<script>
import GuardianCard from "@/components/GuardianCard";
import {onMounted} from "vue";
import {store} from "@/store";


async function updateExisting() {
  let body = document.querySelector("#guardian-view > div.row.row-cols-1.row-cols-md-4.g-4");
  if (body.childElementCount > 0){
    for (let i = 0; i < body.childElementCount; i++){
      console.log("Flag")
      //body.removeChild(document.querySelector(`#user-view > div.row.row-cols-1.row-cols-md-4.g-4 > div:nth-child(${i+1})`))
      document.querySelector(`#guardian-view > div.row.row-cols-1.row-cols-md-4.g-4 > div:nth-child(${i+1})`).innerHTML = "";
      console.log(document.querySelector(`#user-view > div.row.row-cols-1.row-cols-md-4.g-4 > div:nth-child(${i+1})`))
    }

  }
}

export default {
  name: 'GuardianCardList',
  components: {
    GuardianCard
  },

  data(){
    return{
      store
    }
  },

  setup(){
    onMounted(async () =>  {
      await updateExisting().then( async function (){
            const a = []
            store.guardianarray = a

            const endpoint = 'http://localhost:8080/api/v1/guardian'
            const requestOptions = {
              method: 'GET',
              redirect: 'follow'
            }
            fetch(endpoint, requestOptions).then(response => response.json()).then(result => result.forEach(guardian => {
              store.guardianarray.push(guardian)
            })).catch(error => console.log('error', error))


          }
      )


    })
  }
}
</script>

<style scoped>

</style>
