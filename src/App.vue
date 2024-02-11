<script>
import AppComponent from "./components/AppComponent.vue";

import axios from "axios"; //importo Axios
import { store } from "./store.js"; //state management

export default {
  components: {
    AppComponent,
  },
  data() {
    return {
      store,
    };
  },
  mounted() {
    this.getEventList();

    // axios.get("indirizzo").then(risultato => {
    // 	console.log(risultato);
    // }).catch(errore => {
    // 	console.error(errore);
    // });
  },
  methods: {
    getEventList() {
      let url = this.store.apiUrl + this.store.apiEventEndpoint;

      axios
        .get(url)
        .then((result) => {
          if (result.status === 200 && result.data.success) {
            console.log(result.data.payload);
            this.store.eventList = result.data.payload;
          } else {
            console.error("Something went wrong");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<template>
  <main>
    <div class="container">
      <h1>Events:</h1>
      <AppComponent />
  
      <button class="btn btn-primary my-4">
        <font-awesome-icon icon="fa-solid fa-home" class="me-1" />
        <span>Primary button</span>
      </button>
    </div>
  </main>
</template>

<style lang="scss">
// importo il foglio di stile generale dell'applicazione, non-scoped
@use "./styles/general.scss";
</style>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di App.vue
main {
  padding: 1rem;
}
</style>
