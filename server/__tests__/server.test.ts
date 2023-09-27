import request from 'supertest';
import app from '../src/server';

// TODO: mock elasticsearch
const elasticsearch_default_resp_length = 10

describe('/transactions Endpoint Tests', () => {
  it('should respond with a 200 status code and return valid Elasticsearch results', async () => {
    const response = await request(app).get('/transactions');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('hits');
    expect(response.body.hits).toHaveProperty('hits');
    expect(response.body.hits.hits).toHaveLength(elasticsearch_default_resp_length);
  });

  describe('/similar-transactions Endpoint Tests', () => {
    it('should respond with a 200 status code and return valid Elasticsearch results', async () => {
      const searchQuery = {
        V1: "1.00734026030141"
      };

      const response = await request(app)
        .post('/similar-transactions')
        .send({ query: searchQuery });

      const expectedStatusCode = 200;

      expect(response.status).toBe(expectedStatusCode);
      expect(response.body).toHaveLength(elasticsearch_default_resp_length);
    });
  });

  // it('should handle errors gracefully and respond with a 500 status code', async () => {
  //   jest.mock('elasticsearch', () => ({
  //     search: () => {
  //       throw new Error('Mocked Elasticsearch error');
  //     },
  //   }));

  //   const response = await request(app).get('/transactions');

  //   expect(response.status).toBe(500);
  //   expect(response.body).toEqual({ error: 'Internal server error.' });
  // });
});
