import {areDomainsValid, getMatrixIndex, snakeBackwardDomain, snakeForwardDomain} from '../utils';
import {State} from '../state';

class Operator {
  constructor(isApplicable, apply) {
    this.isApplicable = isApplicable
    this.apply = apply
  }
}

function isForwardUpApplicable(state) {
  const [row, column] = getMatrixIndex(1, state)
  return areDomainsValid(row - 1, column) && state[row - 1][column] === 0
}

function isForwardDownApplicable(state) {
  const [row, column] = getMatrixIndex(1, state)
  return areDomainsValid(row + 1, column) && state[row + 1][column] === 0
}

function isForwardRightApplicable(state) {
  const [row, column] = getMatrixIndex(1, state)
  return areDomainsValid(row, column + 1) && state[row][column + 1] === 0
}

function isForwardLeftApplicable(state) {
  const [row, column] = getMatrixIndex(1, state)
  return areDomainsValid(row, column - 1) && state[row][column - 1] === 0
}

function isBackwardUpApplicable(state) {
  const [row, column] = getMatrixIndex(9, state)
  return areDomainsValid(row - 1, column) && state[row - 1][column] === 0
}

function isBackwardDownApplicable(state) {
  const [row, column] = getMatrixIndex(9, state)
  // console.log('indexes', row, column)
  //
  // console.log('DOWNING', state[row + 1][column])

  return areDomainsValid(row + 1, column) && state[row + 1][column] === 0
}

function isBackwardRightApplicable(state) {
  const [row, column] = getMatrixIndex(9, state)
  return areDomainsValid(row, column + 1) && state[row][column + 1] === 0
}

function isBackwardLeftApplicable(state) {
  const [row, column] = getMatrixIndex(9, state)
  return areDomainsValid(row, column - 1) && state[row][column - 1] === 0
}

function moveForwardUp(state) {
  const [row, column] = getMatrixIndex(1, state)
  return moveForward(row - 1, column, state)
}

function moveForwardDown(state) {
  const [row, column] = getMatrixIndex(1, state)
  return moveForward(row + 1, column, state)
}

function moveForwardRight(state) {
  const [row, column] = getMatrixIndex(1, state)
  return moveForward(row, column + 1, state)
}

function moveForwardLeft(state) {
  const [row, column] = getMatrixIndex(1, state)
  return moveForward(row, column - 1, state)
}

function moveBackwardUp(state) {
  const [row, column] = getMatrixIndex(9, state)
  return moveBackward(row - 1, column, state)
}

function moveBackwardDown(state) {
  const [row, column] = getMatrixIndex(9, state)
  return moveBackward(row + 1, column, state)
}

function moveBackwardRight(state) {
  const [row, column] = getMatrixIndex(9, state)
  return moveBackward(row, column + 1, state)
}

function moveBackwardLeft(state) {
  const [row, column] = getMatrixIndex(9, state)
  return moveBackward(row, column - 1, state)
}

function moveForward(row, column, state) {
  const newState = state.map((r, i) => {
    return r.map((c, j) => {
      if(row === i && column === j) {
        return 1
      } else if (snakeForwardDomain.includes(c)) {
        return c + 1
      } else {
        return 0
      }
    })
  })

  return new State(newState)
}

function moveBackward(row, column, state) {
  const newState = state.map((r, i) => {
    return r.map((c, j) => {
      if(row === i && column === j) {
        return 9
      } else if (snakeBackwardDomain.includes(c)) {
        return c - 1
      } else {
        return 0
      }
    })
  })

  return new State(newState)
}

export const operators = [
  new Operator(isForwardUpApplicable, moveForwardUp),
  new Operator(isForwardDownApplicable, moveForwardDown),
  new Operator(isForwardRightApplicable, moveForwardRight),
  new Operator(isForwardLeftApplicable, moveForwardLeft),
  new Operator(isBackwardUpApplicable, moveBackwardUp),
  new Operator(isBackwardDownApplicable, moveBackwardDown),
  new Operator(isBackwardRightApplicable, moveBackwardRight),
  new Operator(isBackwardLeftApplicable, moveBackwardLeft)
]
