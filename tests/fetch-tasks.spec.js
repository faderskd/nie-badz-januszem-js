const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const fetch = require('node-fetch');

import fetchTasksToDo from '../src/fetch-tasks-todo';

describe('async/await functions in js', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should fetch tasks to do', async () => {
    // given
    const value = {tasks: ['learn js', 'learn webpack']};

    const response = new fetch.Response(null, {status: 200});
    sandbox.stub(response, 'json').returns(Promise.resolve(value));
    sandbox.stub(fetch, 'Promise').returns(Promise.resolve(response));

    // when
    const tasks = await fetchTasksToDo('localhost:9000/tasks');

    // then
    expect(tasks).to.include.members(['learn js', 'learn webpack']);
  });
});

