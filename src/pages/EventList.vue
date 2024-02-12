
<script>
import { store } from "../store.js" //state management
import EventCard from "../components/EventCard.vue";

export default {
    name: "EventList",
    components: {
        EventCard
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <h1 class="mb-3">Eventi</h1>
            <p v-if="!store.eventList || !store.eventList.length">There are no events!</p>
            <EventCard v-for="event in store.eventList" :item="event" />
        </div>
    </div>
</template>