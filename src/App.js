import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/layout/header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
// import uuid from 'uuid'; // comentado para usar JSON.placeholder
import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data }));
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
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }))
    // a partir do array "todos" original, retorna um array com todos os outros itens que sao diferentes da id clicada em questao
    // o operador de propagacao (...) eh usado para redistribuir os ids no novo array "todos"
  }

  // adiciona Todo
  addTodo = (title) => {
    //// comentado para usar JSON.placeholder
    // const newTodo = {
    //   id: uuid.v4(),
    //   title, // em ES6, esta linha equivale a title:tile
    //   completed: false
    // }
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
     
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
