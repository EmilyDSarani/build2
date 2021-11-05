const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  it('should get back the /posty route with POST', async() => {
    const response = await request.post('/posty').send('this is a posty post');
    expect(response).toEqual('this is a posty post');
  });
});
