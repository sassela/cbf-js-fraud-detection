import request from 'supertest';
import app from '../src/server';

const defaultResponseLength = 10
const successStatusCode = 200;

describe('/transactions Endpoint Tests', () => {
  it('should respond with a 200 status code and return valid Elasticsearch results', async () => {
    const response = await request(app).get('/transactions');

    expect(response.status).toBe(successStatusCode);
    expect(response.body).toHaveProperty('hits');
    expect(response.body.hits).toHaveProperty('hits');
    expect(response.body.hits.hits).toHaveLength(defaultResponseLength);
  });

  describe('/similar-transactions Endpoint Tests', () => {
    it('should respond with a 200 status code and return valid Elasticsearch results', async () => {
      const searchQuery = {
        V1: "1.00734026030141"
      };

      const response = await request(app)
        .post('/similar-transactions')
        .send({ query: searchQuery });


      expect(response.status).toBe(successStatusCode);
      expect(response.body).toHaveProperty('hits');
      expect(response.body.hits).toHaveProperty('hits');
      expect(response.body.hits.hits).toHaveLength(defaultResponseLength);
    });
  });
});

describe('Test the /transaction/:id endpoint', () => {
  it('should respond with a 404 status when transaction is not found', async () => {
    const response = await request(app).get('/transaction/nonexistent-id');
    expect(response.status).toBe(404);
    expect(response.body).toEqual({ error: 'Transaction not found.' });
  });

  it('should respond with a 200 status and transaction data when transaction is found', async () => {
    const validTransactionId = '1gmOjooBs-LI1g6WCNWq';
    const response = await request(app).get(`/transaction/${validTransactionId}`);

    expect(response.status).toBe(successStatusCode);
    expect(response.body).toHaveProperty('_id');
    expect(response.body._id).toBe(validTransactionId);
  });
});
