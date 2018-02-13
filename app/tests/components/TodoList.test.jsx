import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect, { createSpy, spyOn, isSpy } from 'expect';
import $ from 'jquery';

import TodoList from 'TodoList';
import Todo from 'Todo';

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render on Todo component for each todo item', () => {
    const todos = [
      {
        id: 1,
        text: 'Do something'
      },
      {
        id: 2,
        text: 'Check mail'
      },
    ];

    const todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    const todosComponent = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

    expect(todosComponent.length).toBe(todos.length);
  });
});
