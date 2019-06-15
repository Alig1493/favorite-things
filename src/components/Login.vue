<template>
  <b-container fluid>
    <b-row class="justify-content-md-center">
      <b-col md="auto" class="w-50">

        <b-card header="Login Form">

          <b-form @submit="onSubmit">

            <b-form-group
              id="input-group-1"
              label="Username"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="form.username"
                type="text"
                required
                placeholder="Enter username"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Password:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="form.password"
                type="password"
                required
                placeholder="Enter password"
              ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
          </b-form>

        </b-card>

      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          username: '',
          password: ''
        },
        show: true,
      }
    },
    name: 'Login',
    props: {
      msg: String
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()

        this.authToken = ''
        fetch('http://0.0.0.0:8000/api/v1/auth/login/', {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, cors, *same-origin
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.form),
        })
          .then(function (response) {
            return response.json()
          })
          .then(function (myJson) {
            alert(JSON.stringify(myJson))
          })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
