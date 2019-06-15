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
            placeholder="Enter Description"
          ></b-form-textarea>
        </b-form-group>

        <b-form-group
          id="input-group-4"
          label="Ranking:"
          label-for="input-4">
          <b-form-input
            id="input-4"
            v-model="form.number"
            type="number"
            required
            placeholder="Insert ranking in integers"
            no-wheel="true"
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
            placeholder="Type a category of double-click to choose one from below"
          ></b-form-input>

          <datalist id="input-5">
            <option v-for="category in categories"
                    v-bind:key="category">{{ category }}</option>
          </datalist>
        </b-form-group>

        <b-form-group
          id="input-group-6"
          label="Metadata for your favorite thing:"
          label-for="input-6">
          <b-form-textarea
            id="input-6"
            v-model="form.metadata"
            placeholder="Insert Metadata"
          ></b-form-textarea>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>

      <b-card class="mt-3 mb-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
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
          number: null,
          category: '',
          metadata: ''
        },
        categories: ['Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    name: "Form",
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.title = ''
        this.form.description = ''
        this.form.number = null
        this.form.categories = ''
        this.form.metadata = ''
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