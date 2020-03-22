<template>
  <div class="board-container">
    <div class="operator">
      <span>elore(1, 2)</span>
      <span class="arrow">-----></span>
    </div>
    <table>
      <tr v-for="(row, i) in state" :key="row">
        <td :class="{ dark: board[i][j] === 'd' }"
            v-for="(value, j) in row"
            :key="value">
          <span :class="{ circle: !isNumber(value) }">{{value | showSnake}}</span>
          <span class="circle"></span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  import {forward} from '../operators';
  import {snake, board} from '../utils';

  export default {
    name: 'Board',
    props: {
      state: {
        type: Array,
        default: () => forward({row: 1, column: 1, state: forward({row: 1, column: 2, state: [
              [9, 0, 1, 0],
              [8, 7, 2, 3],
              [0, 6, 5, 4]
            ]})})
      },
      operator: {
        type: String,
        default: null
      }
    },
    filters: {
      showSnake(value) {
        return snake.includes(value) ? value : ''
      }
    },
    computed: {
      board() {
        return board
      }
    },
    methods: {
      isNumber(value) {
        return Number.isInteger(value)
      }
    }
  }
</script>

<style scoped lang="css">
  table {
    border-collapse: collapse;
  }

  table, th, td {
    border: 1px solid black;
  }

  td {
    height: 50px;
    width: 50px;
    border: 1px solid black;
  }
  .light {
    background-color: white;
  }

  .dark {
    background-color: grey;
  }

  .circle {
    width: 100px;
    height: 100px;
    background: red;
    border-radius: 50%
  }

  .board-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .operator {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .arrow {
    font-weight: bold;
    margin-left: 20px;
  }
</style>
