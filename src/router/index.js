import Vue from 'vue'
import VueRouter from 'vue-router'
import EventShow from '../views/EventShow.vue'
import EventNew from '../views/EventNew.vue'
import EventList from '../views/EventList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/events',
    name: 'event-list',
    component: EventList
  },
  {
    path: '/event/:id',
    name: 'event-show',
    component: EventShow,
    props: true
  },
  {
    path: '/events/new',
    name: 'event-new',
    component: EventNew
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
