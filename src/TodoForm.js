import React, { Component } from 'react';

export default class TodoForm extends Component {
    render() {
        return (
            <form className="TodoForm" onSubmit={(e) => { e.preventDefault(); }}>
                <input type="text" placeholder="Type a todo.."></input>
                <button onClick={this.props.addTodo} type="submit" className="addTodo">Add</button>
            </form>
        );
    }
}