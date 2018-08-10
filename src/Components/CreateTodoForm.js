import React, { Component } from "react";

class CreateTodoForm extends Component {
  state = {
    todo: ""
  };

  onInputChange = e => {
    this.setState({
      todo: e.target.value
    });
  };

  onFormSubmit = e => {
    e.preventDefault();
    let todo = this.state.todo;
    this.props.createTodo(todo);
    this.setState({
      todo: ""
    });
  };
  render() {
    return (
      <div className="createForm todoForm">
        <h2>Create Todo Here!</h2>
        <form onSubmit={this.onFormSubmit}>
          <input
            onChange={this.onInputChange}
            placeholder="Write a todo here..."
            type="text"
            value={this.state.todo}
          />
          <button type="submit">Create Todo!</button>
        </form>
      </div>
    );
  }
}

export default CreateTodoForm;
