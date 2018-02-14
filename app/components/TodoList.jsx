import React from 'react';
import Todo from 'Todo';

export default class TodoList extends React.Component {
  render() {
    const {todos} = this.props;

    const renderTodos = () => {
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
