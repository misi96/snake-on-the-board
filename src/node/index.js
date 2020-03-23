import {getUnusedOperators} from '../utils';

export class Node {
  constructor(state, parentNode, creatorOperator, operators) {
    this.state = state
    this.parentNode = parentNode
    this.creatorOperator = creatorOperator
    this.unusedOperators = getUnusedOperators(operators, this.state.state)
  }
}
