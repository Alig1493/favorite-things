<template>
  <b-container>
    <h1>List of Favorite things by Categories (sorted by ranking)</h1>
    <b-button href="/form" variant="primary">Insert New Favorite Thing</b-button>
    <div v-for="item in list" :key="item">
      <b-card class="m-3">
        <b-card-text class="h3">
          {{ item.title }}
        </b-card-text>
        <!--<div v-for="favorite in item.favorite_things" :key="favorite">-->
        <!--</div>-->
        <b-table striped hover :items="item.favorite_things"></b-table>
      </b-card>
    </div>
  </b-container>
</template>

<script>
  export default {
    name: "List",
    data() {
      return {
        list: []
      }
    },
    created() {
      // fetch the data when the view is created and the data is
      // already being observed
      this.fetchData()
    },
    watch: {
      // call again the method if the route changes
      '$route': 'fetchData'
    },
    methods: {
      fetchData() {
        // replace `getPost` with your data fetching util / API wrapper
        fetch('http://0.0.0.0:8000/api/v1/favorites/', {
          method: 'GET', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, cors, *same-origin
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': ''.concat('JWT ', localStorage.getItem('jwt'))
          }
        })
          .then(
            res => res.json()
          )
          .then(
            response => {
              let jsonResponse = JSON.stringify(response)
              console.log('Success:', jsonResponse)
              for (let i = 0; i < response.length; i++) {
                console.log(response[i])
                this.list.push(response[i])
              }
            }
          )
          .catch(error => console.error('Error:', error))
      }
    }
  }
</script>

<style scoped>

</style>