<template>
  <div class="board-container">
    <div v-if="isOperatorVisible" class="operator">
      <span class="arrow-body">|</span>
      <span>{{operator}}</span>
      <span class="arrow-body">|</span>
      <span>&#9660;</span>
    </div>
    <table>
      <tr v-for="(row, i) in state" :key="i">
        <td :class="{ dark: isCellDark(i, j) }"
            v-for="(value, j) in row"
            :key="j">
          {{value | showSnake}}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  import {snake} from '../utils';

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
      isOperatorVisible() {
        return this.operator !== 'Start'
      }
    },
    methods: {
      isCellDark(row, column) {
        return !(row === 0 && column === 0)
          && !(row === 2 && column === 1)
          && !(row === 2 && column === 3)
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
    justify-content: center;
  }

  .operator {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .arrow-body {
    font-weight: bold;
  }
</style>
