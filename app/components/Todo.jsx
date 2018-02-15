import React from 'react';
import moment from 'moment';

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {id, text, completed, createdAt, completedAt} = this.props;

    const todoClassName = completed ? 'todo todo-completed' : 'todo';

    const [msg, date] = (completed) ? ['Completed', completedAt] : ['Created', createdAt];
    const renderDate = () => `${msg}: ${moment(date).format('YYYY-MM-DD @ H:mm') }`;

    return (
      <div className={todoClassName} onClick={() => {
          this.props.onToggle(id);
        }}>
        <div>
          <input type="checkbox" checked={completed}/>
        </div>
        <div>
          <p>
            {text}
          </p>
          <p className="todo__subtext">
            {renderDate()}
          </p>
        </div>
      </div>
    );
  }
}
