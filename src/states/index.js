export class State {
  constructor(state) {
    this.state = state
  }

  isGoal() {
    return this.state[0][0] === 0 && this.state[2][1] === 0 && this.state[2][3] === 0
  }

  equals(state) {
    return this.state.every((row, i) => row.every((value, j) => value === state.state[i][j]))
  }
}

export const start = [
  [9, 0, 1, 0],
  [8, 7, 2, 3],
  [0, 6, 5, 4]
]
