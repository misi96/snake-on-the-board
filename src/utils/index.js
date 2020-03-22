export const board = [
  ['l', 'd', 'd', 'd'],
  ['d', 'd', 'd', 'd'],
  ['d', 'l', 'd', 'l']
]

export const snake = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export const snakeForwardDomain = snake.filter(value => value !== 9)
export const snakeBackwardDomain = snake.filter(value => value !== 1)

const rowDomain = [0, 1, 2]
const columnDomain = [0, 1, 2, 3]

export function areDomainsValid(row, column) {
  return rowDomain.includes(row) && columnDomain.includes(column)
}

export function getMatrixValue(state, row, column) {
  const actualRow = row - 1
  const actualColumn = column - 1

  return state[actualRow] ? state[actualRow][actualColumn] : null
}

// export function hasNearbyValue({row, column, state, value}) {
//   return getMatrixValue({state, row: row + 1, column}) === value ||
//     getMatrixValue({state, row: row - 1, column}) === value ||
//     getMatrixValue({state, row, column: column + 1}) === value ||
//     getMatrixValue({state, row, column: column - 1}) === value
// }

export function getMatrixIndex(value, state) {
  let row, column
  state.forEach((r, i) => r.forEach((v, j) => {
    if(state[i][j] === value) {
      row = i
      column = j
    }
  }))
  return [row, column]
}
