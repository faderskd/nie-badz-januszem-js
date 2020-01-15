import fetchTasksToDo from '../src/fetch-tasks-todo';

const mockServer = require('mockttp').getLocal();
const chai = require('chai');
const chaiFetch = require('chai-fetch');
chai.use(chaiFetch);


const {expect} = chai;

describe('async/await functions in js', () => {
  beforeEach(() => mockServer.start(9000));
  afterEach(() => mockServer.stop());

  it('should fetch tasks to do', () =>
    // eslint-disable-next-line max-len
    mockServer.get('/tasks')
        .thenReply(200, JSON.stringify({tasks: ['learn js', 'learn webpack']}))
        .then(() => fetchTasksToDo('http://localhost:9000/tasks')
        // eslint-disable-next-line max-len
            .then((tasks) => expect(tasks).to.include.members(['learn js', 'learn webpack']))));
});
