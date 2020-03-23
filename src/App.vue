<template>
  <div id="app">
    <h1>Snake on the board</h1>

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
import {start, State} from './state';
import {search} from './search';

export default {
  name: 'App',
  components: {
    Board
  },
  data() {
    return {
      states:[],
      operators:[]
    }
  },
  mounted() {
    this.search()
  },
  methods: {
    search() {
      this.reset()
      const operators = search()

      if(operators.length) {
        let state = new State(start)

        operators.forEach(operator => {
          state = operator.apply(state.state)
          this.states.push(state.state)
          this.operators.push(`${operator.apply.name}()`)
        })

        this.addStartState()
      }
    },
    reset() {
      this.states = []
      this.operators = []
    },
    addStartState() {
      this.operators.unshift('Start')
      this.states.unshift(start)
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
    min-width: 400px;
  }

  #main-board-container {
    display: grid;
    grid-gap: 10px;
  }
</style>
