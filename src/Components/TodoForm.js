import React, { Component } from 'react';

class TodoForm extends Component {
    onChange = e => {
        this.setState({
            todo: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault();
        let todo = this.state.todo;
        this.props.onUpdateTodo(todo);
        this.setState({
            todo: ""
        })
    }
    render() {
        return(
            (
                <div className='todoForm'>
                    <form onSubmit={this.onSubmit}>
                        <input
                            autoFocus={this.props.autoFocus}
                            onChange={this.onChange}
                            placeholder='Write a todo here ...'
                            type='text'
                            value={(this.state && this.state.todo) || ''} />
                        <button type='submit'>{this.props.buttonName}</button>
                    </form>
                </div>
            )
        )
    }
}

export default TodoForm;