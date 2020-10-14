<template>
  <div>
    <h1>Create event, {{ user.name }}</h1>
    <p>There are {{ catLength }} categores </p>
    <p>Not done todos count: {{ notDoneTodosCount }}</p>
    <p>get cat by id: {{ getCategoryByID(1) }}</p>
    <ul>
      <li v-for="category in categories" :key="category.id">{{ category.name }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  computed: {
    catLength() {
      return this.$store.getters.catLength
    },
    ...mapGetters(['notDoneTodosCount', 'getCategoryByID']),
    ...mapState(['user', 'categories'])
  }
}
</script>
