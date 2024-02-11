<script>
import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console

export default {
    name: "AppComponent",
    data() {
        return {
            store
        }
    },
    methods: {
        doThings() {
            console.log("AppComponent does things");
        }
    },
    mounted() {
        register(this); //per debuggare il componente da console
        this.doThings();
    }
}
</script>

<template>
    <div class="col-md-4 gy-4">
        <div class="card h-100" v-for="event in store.eventList">
            <div class="card-body">
                <h5 class="card-title">{{ event.name }}</h5>
                <p class="card-text">Event date: {{ event.date }}</p>
                <p class="card-text">Avalaible tickets: {{ event.available_tickets }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di AppComponent
</style>