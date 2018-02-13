import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect, { createSpy, spyOn, isSpy } from 'expect';
import $ from 'jquery';

import Todo from 'Todo';

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });
});
