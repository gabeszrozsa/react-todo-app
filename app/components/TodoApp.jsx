import React from 'react';

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Clean the yard'
        }
      ]
    }
  }

  render() {
    return (
      <div>
        Csá Dude!
      </div>
    );
  }
}
