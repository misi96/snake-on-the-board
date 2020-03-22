import {start, State} from '../state';
import {operators} from '../operators';
import {Node} from '../node';

export function getSolution(terminal) {
  const solution = []
  for (let n = terminal; n.parentNode != null; n = n.parentNode) {
    solution.push(n.creatorOperator)
  }
  return solution.reverse()
}

export function search() {
  let actualNode = new Node(new State(start), null, null, operators)

  if(actualNode.state.isGoal()) {
    return getSolution(actualNode)
  }

  const condition = true

  while (condition) {
    if(actualNode.unusedOperators.length) {
      const operator = actualNode.unusedOperators.pop()
      const newState = operator.apply(actualNode.state.state)

      let isAlreadyReachedNode = false
      for(let n = actualNode; n !== null; n = n.parentNode) {
        if(n.state.equals(newState)) {
          isAlreadyReachedNode = true
        }
      }

      if(!isAlreadyReachedNode) {
        actualNode = new Node(newState, actualNode, operator, operators)

        if(actualNode.state.isGoal()) {
          return getSolution(actualNode)
        }
      }
    } else {
      if(actualNode.parentNode !== null) {
        actualNode = actualNode.parentNode
      } else {
        return null
      }
    }
  }
}
