import React, { Component } from 'react';
import Todo from './Todo';

class Todos extends Component {
    render() {
        let todos = this.props.todos.map( todo => {
            return (
                <Todo
                    key={todo.id}
                    todo={todo}
                    onDeleteTodo={this.props.onDeleteTodo}
                    editingTodoId={this.props.editingTodoId}
                    onEditTodo={this.props.onEditTodo}
                    onUpdateTodo={this.props.onUpdateTodo} />
            )
        })
        return (
            <div className="todos">
                {todos}
            </div>
        )
    }
}

export default Todos;