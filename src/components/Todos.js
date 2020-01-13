import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types'

class Todos extends Component {
  render() {
    // avalia todos como map, de forma similar a um forEach
    return this.props.todos.map((todo) => (
        // props.markComplete chama a prop respectiva em App
        <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} /> // prop key foi inserida pois cada elemento filho em um array de ter uma key unica para o prop
    ));
  }
}
// abaixo, se declaramos "PropTypes" ao inves de "propTypes" recebemos o erro abaixo
// Warning: Component Todos declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?
// por que?
Todos.propTypes = { 
    todos: PropTypes.array.isRequired
}

export default Todos;
