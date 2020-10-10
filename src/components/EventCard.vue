<template>
  <div>
    <router-link :to="{ name: 'event-show', params: { id: event.id } }">View event # {{ event.id }}</router-link>
    <br>
    <span>{{ event.title }}</span>
  </div>
</template>

<script>
export default {
  props: {
    event: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
