import {isOperatorApplicable, moveSnake} from '../utils';
import {BodyParts, Directions} from '../models';

class Operator {
  constructor(displayName, isApplicable, apply) {
    this.displayName = displayName
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
  new Operator('eloreFel', isForwardUpApplicable, moveForwardUp),
  new Operator('eloreLe', isForwardDownApplicable, moveForwardDown),
  new Operator('eloreJobbra', isForwardRightApplicable, moveForwardRight),
  new Operator('eloreBalra', isForwardLeftApplicable, moveForwardLeft),
  new Operator('hatraFel', isBackwardUpApplicable, moveBackwardUp),
  new Operator('hatraLe', isBackwardDownApplicable, moveBackwardDown),
  new Operator('hatraJobbra', isBackwardRightApplicable, moveBackwardRight),
  new Operator('hatraBalra', isBackwardLeftApplicable, moveBackwardLeft)
]
