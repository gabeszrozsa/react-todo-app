import expect, { createSpy, spyOn, isSpy } from 'expect';

import { getTodos, setTodos } from 'TodoAPI';

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
        test: 'test all files',
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
        test: 'test all files',
        completed: false
      }];

      localStorage.setItem('todos', JSON.stringify(todos));

      expect(getTodos()).toEqual(todos);
    });
  });
});
