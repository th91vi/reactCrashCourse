import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/layout/header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import uuid from 'uuid';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(), // v4() gera uma id aleatória
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Diner with wife',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Meeting with boss',
        completed: false
      },
    ]
  }

  // marca/desmarca item como completado
  markComplete = (id) => {
    // setState eh um componente do React
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id){
        // propriedade completed recebe o oposto do estado atual
        todo.completed = !todo.completed;
      };

      return todo;
    }) })
  }

  // apaga Todo
  delTodo = (id) => {
    // a partir do array "todos" original, retorna um array com todos os outros itens que sao diferentes da id clicada em questao
    // o operador de propagacao (...) eh usado para redistribuir os ids no novo array "todos"
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  // adiciona Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title, // em ES6, esta linha equivale a title:tile
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
              </React.Fragment>
            )} />
            < Route path="/about" component={About}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
