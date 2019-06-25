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
    methods: {
      onSubmit(evt) {
        // The Event interface's preventDefault() method tells the user agent
        // that if the event does not get explicitly handled, its default action
        // should not be taken as it normally would be.
        evt.preventDefault()

        fetch('https://13.235.4.179:443/api/v1/auth/login/', {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, cors, *same-origin
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.form),
        })
          .then(
            res => res.json()
          )
          .then(
            response => {
              let jsonResponse = JSON.stringify(response)
              console.log('Success:', jsonResponse)
              localStorage.setItem('jwt', response.token)
              console.log('jwt:', localStorage.getItem('jwt'))

              this.$router.push('/')
            }
          )
          .catch(error => console.error('Error:', error))
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
