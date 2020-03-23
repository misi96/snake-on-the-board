import {isOperatorApplicable, moveSnake} from '../utils';
import {BodyParts, Directions} from '../models';

class Operator {
  constructor(isApplicable, apply) {
    this.isApplicable = isApplicable
    this.apply = apply
  }
}

function isForwardUpApplicable(state) {
  return isOperatorApplicable(BodyParts.HEAD, Directions.UP, state)
}

function isForwardDownApplicable(state) {
  return isOperatorApplicable(BodyParts.HEAD, Directions.DOWN, state)
}

function isForwardRightApplicable(state) {
  return isOperatorApplicable(BodyParts.HEAD, Directions.RIGHT, state)
}

function isForwardLeftApplicable(state) {
  return isOperatorApplicable(BodyParts.HEAD, Directions.LEFT, state)
}

function isBackwardUpApplicable(state) {
  return isOperatorApplicable(BodyParts.TAIL, Directions.UP, state)
}

function isBackwardDownApplicable(state) {
  return isOperatorApplicable(BodyParts.TAIL, Directions.DOWN, state)
}

function isBackwardRightApplicable(state) {
  return isOperatorApplicable(BodyParts.TAIL, Directions.RIGHT, state)
}

function isBackwardLeftApplicable(state) {
  return isOperatorApplicable(BodyParts.TAIL, Directions.LEFT, state)
}

function moveForwardUp(state) {
  return moveSnake(BodyParts.HEAD, Directions.UP, state)
}

function moveForwardDown(state) {
  return moveSnake(BodyParts.HEAD, Directions.DOWN, state)
}

function moveForwardRight(state) {
  return moveSnake(BodyParts.HEAD, Directions.RIGHT, state)
}

function moveForwardLeft(state) {
  return moveSnake(BodyParts.HEAD, Directions.LEFT, state)
}

function moveBackwardUp(state) {
  return moveSnake(BodyParts.TAIL, Directions.UP, state)
}

function moveBackwardDown(state) {
  return moveSnake(BodyParts.TAIL, Directions.DOWN, state)
}

function moveBackwardRight(state) {
  return moveSnake(BodyParts.TAIL, Directions.RIGHT, state)
}

function moveBackwardLeft(state) {
  return moveSnake(BodyParts.TAIL, Directions.LEFT, state)
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
