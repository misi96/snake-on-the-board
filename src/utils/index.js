import {BodyParts, Directions} from '../models';
import {State} from '../state';

export const snake = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export function getUnusedOperators(operators, state) {
  return operators.filter(operator => operator.isApplicable(state))
}

export function isOperatorApplicable(bodyPart, direction, state) {
  const [bodyPartRow, bodyPartColumn] = getBodyPartIndex(bodyPart, state)
  const [row, column] = getNextStepIndex(bodyPartRow, bodyPartColumn, direction)
  return areDomainsValid(row, column ) && state[row][column] === 0
}

const snakeForwardDomain = snake.filter(value => value !== 9)
const snakeBackwardDomain = snake.filter(value => value !== 1)

function areDomainsValid(row, column) {
  const rowDomain = [0, 1, 2]
  const columnDomain = [0, 1, 2, 3]
  return rowDomain.includes(row) && columnDomain.includes(column)
}

function getBodyPartIndex(bodyPart, state) {
  let row, column
  state.forEach((r, i) => r.forEach((v, j) => {
    if(state[i][j] === bodyPart) {
      row = i
      column = j
    }
  }))
  return [row, column]
}

function getNextStepIndex(row, column, direction) {
  switch (direction) {
    case Directions.UP:
      return [row - 1, column]
    case Directions.DOWN:
      return [row + 1, column]
    case Directions.RIGHT:
      return [row, column + 1]
    case Directions.LEFT:
      return [row, column - 1]
  }
}

function isSnakeDomainValid(bodyPart, value) {
  return bodyPart === BodyParts.HEAD
    ? snakeForwardDomain.includes(value)
    : snakeBackwardDomain.includes(value)
}

export function moveSnake(bodyPart, direction, state) {
  const [bodyPartRow, bodyPartColumn] = getBodyPartIndex(bodyPart, state)
  const [row, column] = getNextStepIndex(bodyPartRow, bodyPartColumn, direction)
  const newState = state.map((r, i) => {
    return r.map((value, j) => {
      if(row === i && column === j) {
        return bodyPart
      } else if (isSnakeDomainValid(bodyPart, value)) {
        return bodyPart === BodyParts.HEAD ? value + 1 : value - 1
      } else {
        return 0
      }
    })
  })
  return new State(newState)
}
