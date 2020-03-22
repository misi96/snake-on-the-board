export class Node {
  constructor(state, parentNode, creatorOperator, operators) {
    this.state = state
    this.parentNode = parentNode
    this.creatorOperator = creatorOperator
    this.unusedOperators  = operators
      .filter(operator => operator.isApplicable(this.state.state))

    console.log('state', this.state)
    console.log('this.unused', this.unusedOperators)
  }
}
