import React from 'react';
import moment from 'moment';

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {id, text, completed, createdAt, completedAt} = this.props;

    const [msg, date] = (completed) ? ['Completed', completedAt] : ['Created', createdAt];
    const renderDate = () => `${msg}: ${moment(date).format('YYYY-MM-DD @ H:mm') }`;

    return (
      <div onClick={() => {
          this.props.onToggle(id);
        }}>
          <input type="checkbox" checked={completed}/>
          {text} <i>({renderDate()})</i>
      </div>
    );
  }
}
