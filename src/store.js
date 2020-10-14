import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user : { 'id': 'abc123', 'name': 'Name Abc Xyz ' },
    categories: [
      {
        id: 1,
        name: 'Category 1'
      },
      {
        id: 2,
        name: 'Category 3'
      },
      {
        id: 3,
        name: 'Category 3'
      },
    ],
    todos: [
      { id: 1, text: '...', done: true},
      { id: 1, text: '...', done: false},
      { id: 1, text: '...', done: true},
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    catLength: state => {
      return state.categories.length
    },
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    notDoneTodosCount: (state, getters) => {
      return state.todos.length - getters.doneTodos.length
    },
    getCategoryByID: state => id => {
      return state.categories.find(cat => cat.id === id)
    }
  }
})
