const request = require('supertest');
const app = require('../app');

describe('app routes', () => {
  it('should get back the /getit route with Get', async() => {
    const response = await request (app).get('/getit');
    expect(response.body).toEqual('Sup Friend?');
  });
});
