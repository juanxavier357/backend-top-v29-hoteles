import supertest from 'supertest';
import app from '../../config/app';

const request = supertest(app);

describe('location controller', () => {
  describe('GET /api/location', () => {
    test('should return code 200 if the request is successful', async () => {
      const response = await request.get('/api/location');
      expect(response.status).toBe(200);
    }, 10000);
  });

  describe('GET /api/location/:id', () => {
    test('should return code 200 if the location exists', async () => {
      const response = await request.get('/api/location/Colombia_Hotel_1');
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id');
    }, 10000);

    test('should return code 404 if the location does not exist', async () => {
      const response = await request.get('/api/location/999');
      expect(response.status).toBe(404);
      expect(response.body).toHaveProperty('message', 'Location not found');
    }, 10000);
  });

  describe('PATCH /api/location/:id', () => {
    test('should update an existing location and return code 202', async () => {
      const updatedlocation = {
        address: 'address (actualizado)',
      };
      const response = await request
        .patch('/api/location/Colombia_Hotel_2')
        .send(updatedlocation);
      expect(response.status).toBe(202);
      expect(response.body).toHaveProperty('id');
      expect(response.body).toHaveProperty('address');
    }, 10000);

  });
});
