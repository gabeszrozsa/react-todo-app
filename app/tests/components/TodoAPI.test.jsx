import expect, { createSpy, spyOn, isSpy } from 'expect';

import { getTodos, setTodos, filterTodos } from 'TodoAPI';

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(getTodos).toExist();
    expect(setTodos).toExist();
  });

  describe('setTodos', () => {
    it('should set valid todos array', () => {
      const todos = [{
        id: 23,
        text: 'test all files',
        completed: false
      }];

      setTodos(todos);
      const actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);
    });

    it('should not set invalid todos array', () => {
      const badTodos = 'invalid';

      setTodos(badTodos);

      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('getTodos', () => {
    it('should return empty array for bad localStorage data', () => {
      expect(getTodos()).toEqual([]);
    });

    it('should return todo if valid array in localStorage', () => {
      const todos = [{
        id: 23,
        text: 'test all files',
        completed: false
      }];

      localStorage.setItem('todos', JSON.stringify(todos));

      expect(getTodos()).toEqual(todos);
    });
  });

  describe('filterTodos', () => {
    const todos = [
      {
        id: 1,
        text: 'Some text',
        completed: true
      },
      {
        id: 2,
        text: 'Other text',
        completed: false
      },
      {
        id: 3,
        text: 'Some text here',
        completed: true
      },
    ];

    it('should return all items if showCompleted is true', () => {
      const filteredTodos = filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });

    it('should return on item if showCompleted is false', () => {
      const filteredTodos = filterTodos(todos, false, '');
      expect(filteredTodos.length).toBe(1);
    });

    it('should sort by completed status', () => {
      const filteredTodos = filterTodos(todos, true, '');
      expect(filteredTodos[0].completed).toBe(false);
    });

    it('should return all todos if searchText is empty', () => {
      const filteredTodos = filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });

    it('should filter todos by searchText', () => {
      const filteredTodos = filterTodos(todos, true, 'Some');
      expect(filteredTodos.length).toBe(2);
    });
  });
});
