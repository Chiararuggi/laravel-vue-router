<script>
import { store } from "../store.js" //state management
import axios from 'axios'; //importo Axios

export default {
    components: {

    },
    name: "EventDetail",
    props: ["id"],
    data() {
        return {
            store,
            event: null
        }
    },
    mounted() {
        this.getEventDetail();
    },
    methods: {
        getEventDetail() {

            let url = this.store.apiUrl + this.store.apiEventEndpoint + this.id;

            axios.get(url).then(result => {
                if (result.status === 200 && result.data.success) {
                    this.event = result.data.payload;
                } else {
                    console.error("Something went wrong");
                }
            }).catch(error => {
                console.error(error);
            });
        }
    }
}
</script>

<template>
    <div class="row">
        <h1>
            Event detail {{ id }}:
        </h1>
    </div>
    <div class="row">
        <span class="mb-1">Event name: {{ event?.name }}</span>
        <span class="mb-1">Made by: {{ event?.user.name }}</span>
        <span class="mb-1">Event date: {{ event?.date }}</span>
        <span class="mb-3">Avalaible tickets: {{ event?.available_tickets }}</span>
            <router-link :to="{ name: 'events' }" class="btn btn-primary">
                <span>Back to events</span>
            </router-link>
    </div>
</template>

<style scoped></style>