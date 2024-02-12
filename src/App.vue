<script>

import axios from "axios"; //importo Axios
import { store } from "./store.js"; //state management
import AppHeader from "./components/AppHeader.vue";

export default {
  components: {
    AppHeader,
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
  <header>
    <AppHeader />
  </header>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
// importo il foglio di stile generale dell'applicazione, non-scoped
@use "./styles/general.scss";
</style>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di App.vue
</style>
