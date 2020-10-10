<template>
  <div>
    <h1>List of events</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event"/>

    <router-link :to="{ name: 'event-show', params: {id: '1' } }">show event 1</router-link>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue';
import EventService from '@/services/EventService.js';

export default {
  components: {
    EventCard
  },
  data() {
    return {
      events: []
    }
  },
  created(){
    EventService.getEvents()
      .then(res => {
        this.events = res.data
      })
      .catch(err => {
        console.log(err);
      })
  }
}
</script>
