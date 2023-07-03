import supertest from 'supertest';
import app from '../../config/app';

const request = supertest(app);

describe('User controller', () => {
  describe('GET /api/user', () => {
    test('should return code 200 if the request is successful', async () => {
      const response = await request.get('/api/user');
      expect(response.status).toBe(200);
    });
  });

  describe('GET /api/user/:id', () => {
    test('should return code 200 if the user exists', async () => {
      const response = await request.get('/api/user/Hotel_User_1'); // Cambia el ID según tus datos de prueba
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id');
    });

    test('should return code 404 if the user does not exist', async () => {
      const response = await request.get('/api/user/999');
      expect(response.status).toBe(404);
      expect(response.body).toHaveProperty('message', 'user not found');
    });
  });

  describe('PATCH /api/user/:id', () => {
    test('should update an existing user and return code 202', async () => {
      const updatedUser = {
        lastName: 'Salirrosas (actualizado)',
      };
      const response = await request
        .patch('/api/user/Hotel_User_3') // Cambia el ID según tus datos de prueba
        .send(updatedUser);
      expect(response.status).toBe(202);
      expect(response.body).toHaveProperty('id');
      expect(response.body).toHaveProperty('lastName');
    });


    test('should return code 401 if you are Unauthorized', async () => {
      const response = await request.delete('/api/user/999');
      expect(response.status).toBe(401);
      expect(response.body).toHaveProperty('message', 'Unauthorized');
    });
  });
});
