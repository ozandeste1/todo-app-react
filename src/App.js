import React, { Component } from 'react';
import './App.css';
import TodoForm from './TodoForm.js';
import TodoList from './TodoList';

class App extends Component {
  state = { todos: [], searchTodo: " "};

  clearTodo = (e) => {
    e.target.previousElementSibling.value = "";
  }

  addTodo = (e) => {
    let todo = e.target.previousElementSibling.value;
    let newTodos = this.state.todos;
    let lowerTodos = newTodos.map(e => {
      return e.toLowerCase();
    });

    if (todo === "") {
      console.log("You typed a null value.");
    }
    else {
      if (lowerTodos.indexOf(todo.toLowerCase()) === -1) {
        newTodos.push(todo);
        this.setState(newTodos);
        localStorage.setItem("todos", JSON.stringify(newTodos));
      }
      else {
        console.log("This todo still exists.");
      }
    }
    this.clearTodo(e);
  }

  removeTodo = (e) => {
    let todos2 = JSON.parse(localStorage.getItem("todos"));
    let todo = e.target.previousElementSibling.textContent;
    
    todos2.splice(todos2.indexOf(todo), 1);

    localStorage.setItem("todos", JSON.stringify(todos2));
    this.setState({todos: todos2});
  }

  searchTodo = (e) => {
    this.setState({searchTodo: e.target.value});
  }

  componentDidMount() {
    let todos2 = JSON.parse(localStorage.getItem("todos"));

    this.setState({todos: todos2});
  }

  render() {
    return (
      <div className="App">
        <div className="logo">Todo<b>APP</b> 
        <input type="text" placeholder="Search a todo.." onKeyUp={this.searchTodo}></input>
        </div>
        <TodoForm addTodo={this.addTodo}></TodoForm>
        <TodoList filterTodo={this.state.searchTodo} removeTodo={this.removeTodo} todos={this.state.todos}></TodoList>
      </div>
    );
  }
}

export default App;
