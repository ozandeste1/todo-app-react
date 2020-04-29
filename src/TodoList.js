import React, { Component } from 'react'

export default class TodoList extends Component {
    render() {
        if (this.props.filterTodo === "" || this.props.filterTodo === " ") {
            return (
                <div className="TodoList">
                    <ul>
                        {
                            this.props.todos.map((todo, index) => (
                                <li key={index}><span>{todo}</span> <button type="button" onClick={this.props.removeTodo}>X</button></li>
                            ))

                        }
                    </ul>
                </div>
            )
        }
        else {
            let filterValue = this.props.filterTodo.toLowerCase();
            let todos = JSON.parse(localStorage.getItem("todos"));
            let searchedTodos = [];

            todos.forEach(element => {
                const text = element.toLowerCase();
                if (text.indexOf(filterValue) !== -1) {
                    searchedTodos.push(element);
                    return (
                        <li><span>{text}</span></li>
                    )
                }
                else {
                    return (
                        <h1>Hiçbir şey bulunamadı</h1>
                    );
                }
            });

            return (
                searchedTodos.length < 1 ? (<h1>Hiçbir şey bulunamadı</h1>) : (
                    <div className="TodoList">
                        <ul>
                            {
                                searchedTodos.map((todo, index) => (
                                    <li key={index}>{todo}</li>
                                ))
                            }
                        </ul>
                    </div>
                )
            );
        }
    }
}
