<template>
  <div class="board-container">
    <div class="operator">
      <span>{{`${operator} --->`}}</span>
    </div>
    <table>
      <tr v-for="(row, i) in state" :key="i">
        <td :class="{ dark: board[i][j] === 'd' }"
            v-for="(value, j) in row"
            :key="j">
          {{value | showSnake}}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  import {snake, board} from '../utils';

  export default {
    name: 'Board',
    props: {
      state: Array,
      operator: String
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
    }
  }
</script>

<style scoped lang="css">
  table {
    width: 300px;
    height: 250px;
    border-collapse: collapse;
  }

  table, th, td {
    border: 1px solid black;
  }

  .dark {
    background-color: grey;
  }

  .board-container {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr;
  }

  .operator {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
