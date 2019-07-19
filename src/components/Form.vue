<template>
  <b-container>
    <div>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
          id="input-group-2"
          label="Title of your favorite thing:"
          label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.title"
            type="text"
            required
            placeholder="Enter title"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-3"
          label="Description of your favorite thing:"
          label-for="input-3">
          <b-form-textarea
            id="input-3"
            v-model="form.description"
            :state="minimumLength"
            aria-describedby="input-live-feedback"
            placeholder="Enter Description"
          ></b-form-textarea>

          <b-form-invalid-feedback id="input-live-feedback">
            Enter at least 10 letters
          </b-form-invalid-feedback>

        </b-form-group>

        <b-form-group
          id="input-group-4"
          label="Ranking:"
          label-for="input-4">
          <b-form-input
            id="input-4"
            v-model="form.ranking"
            type="number"
            required
            placeholder="Insert ranking in integers"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-5"
          label="Category:"
          label-for="input-5">
          <b-form-input
            list="input-5"
            v-model="form.category"
            required
            placeholder="Type a category to insert a new one or double-click to choose available ones from below"
          ></b-form-input>

          <datalist id="input-5">
            <option v-for="category in categories"
                    :key="category">{{ category }}</option>
          </datalist>
        </b-form-group>

        <b-form-group
          id="input-group-6"
          label="Metadata for your favorite thing:"
          label-for="input-6">
          <b-row>
            <b-col>
              <b-form-input
                v-model="form.metadata.textKey"
                type="text"
                placeholder="Enter metadata text key"
                class="mb-2"
              ></b-form-input>
              <b-form-input
                v-model="form.metadata.textValue"
                type="text"
                placeholder="Enter metadata text value"
              ></b-form-input>
            </b-col>
            <b-col>
              <b-form-input
                v-model="form.metadata.numberKey"
                type="text"
                placeholder="Enter metadata number key"
                class="mb-2"
              ></b-form-input>
              <b-form-input
                v-model="form.metadata.numberValue"
                type="number"
                placeholder="Enter metadata number value"
              ></b-form-input>
            </b-col>
            <b-col>
              <b-form-input
                v-model="form.metadata.dateKey"
                type="text"
                placeholder="Enter metadata date text key"
                class="mb-2"
              ></b-form-input>
              <b-form-input
                v-model="form.metadata.dateValue"
                type="date"
                placeholder="Enter metadata date value"
              ></b-form-input>
            </b-col>
          </b-row>
        </b-form-group>

        <b-button class="mr-3" type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>

      <b-button href="/" class="mt-3" v-on:click="move" variant="success">See All Your Favorite Things</b-button>

      <b-card class="mt-3 mb-3" header="Form Data Result Going To Backend">
        <pre class="m-0">{{ formatted }}</pre>
      </b-card>

    </div>
  </b-container>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          title: '',
          description: '',
          ranking: null,
          category: '',
          metadata: {
            textKey: '',
            textValue: '',
            numberKey: '',
            numberValue: null,
            dateKey: '',
            dateValue: null,
          }
        },
        categories: [],
        show: true
      }
    },
    computed: {
      minimumLength() {
        if (this.form.description)
          if (this.form.description.length < 10)
            return false
        return true
      },
      formatted() {
        return {
          title: this.form.title,
          description: this.form.description,
          ranking: this.form.ranking,
          category: this.form.category,
          metadata: this.convert(this.form.metadata)
        }
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
    name: "Form",
    methods: {
      convert(metadata) {
        let finalMeta = {}

        if (metadata.textKey && metadata.textValue)
          finalMeta[metadata.textKey] = metadata.textValue

        if (metadata.numberKey && metadata.numberValue)
          finalMeta[metadata.numberKey] = metadata.numberValue

        if (metadata.dateKey && metadata.dateValue)
          finalMeta[metadata.dateKey] = metadata.dateValue

        return finalMeta
      },
      fetchData() {
        // replace `getPost` with your data fetching util / API wrapper
        fetch(process.env.VUE_APP_ROOT_API + 'api/v1/favorites/categories/', {
          method: 'GET', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, cors, *same-origin
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json',
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
                console.log(response[i].title)
                this.categories.push(response[i].title)
              }
            }
          )
          .catch(error => console.error('Error:', error))
      },
      onSubmit(evt) {
        evt.preventDefault()
        this.form.metadata = this.convert(this.form.metadata)
        fetch(process.env.VUE_APP_ROOT_API + 'api/v1/favorites/', {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, cors, *same-origin
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': ''.concat('JWT ', localStorage.getItem('jwt'))
          },
          body: JSON.stringify(this.form),
        })
          .then(
            res => res.json()
          )
          .then(
            response => {
              console.log(response.status)
              let jsonResponse = JSON.stringify(response)
              console.log('Success:', jsonResponse)
              this.$router.push('/')
            }
          )
          .catch(error => console.error('Error:', error))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.title = ''
        this.form.description = ''
        this.form.number = null
        this.form.categories = ''
        this.form.metadata.textKey = ''
        this.form.metadata.textValue = ''
        this.form.metadata.numberKey = ''
        this.form.metadata.numberValue = ''
        this.form.metadata.dateKey = ''
        this.form.metadata.dateValue = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }

</script>

<style scoped>

</style>