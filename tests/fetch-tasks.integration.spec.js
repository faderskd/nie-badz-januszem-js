import fetchTasksToDo from '../src/fetch-tasks-todo';

const mockServer = require('mockttp').getLocal();
const chai = require('chai');
const chaiFetch = require('chai-fetch');
chai.use(chaiFetch);


const {expect} = chai;

describe('async/await functions in js', () => {
  beforeEach(async () => {
    await mockServer.start(9000);
  });
  afterEach(async () => await mockServer.stop());

  it('should fetch tasks to do', async () => {
    // eslint-disable-next-line max-len
    await mockServer.get('/tasks').thenReply(200, JSON.stringify({tasks: ['learn js', 'learn webpack']}));
    const tasks = await fetchTasksToDo('http://localhost:9000/tasks');
    expect(tasks).to.include.members(['learn js', 'learn webpack']);
  });
});
