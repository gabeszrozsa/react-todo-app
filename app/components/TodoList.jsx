import React from 'react';
import Todo from 'Todo';

export default class TodoList extends React.Component {
  render() {
    const {todos} = this.props;

    const renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="container__message">
            Nothing to do!
          </p>
        )
      }

      return todos.map((todo) =>
        <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
      );
    };

    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
}
