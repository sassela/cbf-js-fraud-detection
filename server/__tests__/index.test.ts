import request from 'supertest';
import app from '../src/index';

// TODO: mock elasticsearch
describe('/search Endpoint Tests', () => {
  it('should respond with a 200 status code and return valid Elasticsearch results', async () => {
    const response = await request(app).get('/search');
    const elasticsearch_default_hits = 10

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('hits');
    expect(response.body.hits).toHaveProperty('hits');
    expect(response.body.hits.hits).toHaveLength(elasticsearch_default_hits);
  });

  // it('should handle errors gracefully and respond with a 500 status code', async () => {
  //   jest.mock('elasticsearch', () => ({
  //     search: () => {
  //       throw new Error('Mocked Elasticsearch error');
  //     },
  //   }));

  //   const response = await request(app).get('/search');

  //   expect(response.status).toBe(500);
  //   expect(response.body).toEqual({ error: 'Internal server error.' });
  // });
});
