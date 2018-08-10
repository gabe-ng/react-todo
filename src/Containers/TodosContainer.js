import React, { Component } from "react";
import TodoModel from "../Models/Todo";
import Todos from "../Components/Todos";
import CreateTodoForm from "../Components/CreateTodoForm";

class TodosContainer extends Component {
  state = {
    todos: [],
    editingTodoID: null,
    editing: false
  };

  componentDidMount = () => {
    this.fetchData();
  };

  fetchData = () => {
    TodoModel.all().then(response => {
      this.setState({
        todos: response.data.todos,
        todo: ""
      });
    });
  };

  createTodo = todo => {
    let newTodo = {
      body: todo,
      completed: false
    };
    TodoModel.create(newTodo).then(response => {
      let todos = this.state.todos;
      let newTodos = todos.push(response.data);
      this.setState({ newTodos });
    });
  };

  deleteTodo = todo => {
    TodoModel.delete(todo).then(response => {
      let todos = this.state.todos.filter(todo => {
        return todo._id !== response.data._id;
      });
      this.setState({ todos });
    });
  };

  updateTodo = todoBody => {
    let todoId = this.state.editingTodoId;
    const isUpdatedTodo = todo => {
      return todo._id === todoId;
    };
    TodoModel.update(todoId, todoBody).then(response => {
      let todos = this.state.todos;
      todos.find(isUpdatedTodo).body = todoBody;
      this.setState({ todos: todos, editingTodoId: null, editing: false });
    });
  };

  editTodo = todo => {
    this.setState({
      editingTodoId: todo._id,
      editing: true
    });
  };

  render() {
    TodoModel.all().then(response => {
      console.log(response);
    });

    return (
      <div className="todosContainer">
        <Todos
          todos={this.state.todos}
          onDeleteTodo={this.deleteTodo}
          editingTodoId={this.state.editingTodoId}
          onEditTodo={this.editTodo}
          onUpdateTodo={this.updateTodo}
        />
        <CreateTodoForm createTodo={this.createTodo} />
      </div>
    );
  }
}

export default TodosContainer;
