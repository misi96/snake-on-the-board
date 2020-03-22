<template>
  <div id="app">
    <div>
      <button @click="search">Keresés</button>
    </div>

    <div id="main-board-container">
      <board v-for="(state, index) in states"
             :state="state"
             :operator="operators[index]"
             :key="index"
      />
    </div>
  </div>
</template>

<script>
import Board from './board/index';
import {start, State, states} from './state';
import {operators} from './operators';
import {search} from './search';

export default {
  name: 'App',
  components: {
    Board
  },
  computed: {
    states() {
      return states
    },
    operators() {
      return operators
    }
  },
  methods: {
    search() {
      const operators = search()
      if(operators.length) {
        let state = new State(start)
        operators.forEach(operator => {
          console.log('state', state)
          console.log('operator', operator)
          state = operator.apply(state.state)
        })
        console.log('VEGSO', state)
      }
    }
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  #main-board-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }
</style>
