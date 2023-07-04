import supertest from 'supertest';
import app from '../../config/app';

const request = supertest(app);

describe('image controller', () => {
  describe('GET /api/image', () => {
    test('should return code 200 if the request is successful', async () => {
      const response = await request.get('/api/image');
      expect(response.status).toBe(200);
    }, 10000);
  });

  describe('GET /api/image/:id', () => {
    test('should return code 200 if the image exists', async () => {
      const response = await request.get('/api/image/Colombia_Hotel_1');
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id');
    }, 10000);

    test('should return code 404 if the image does not exist', async () => {
      const response = await request.get('/api/image/999');
      expect(response.status).toBe(404);
      expect(response.body).toHaveProperty('message', 'Image not found');
    }, 10000);
  });

  describe('PATCH /api/image/:id', () => {
    test('should update an existing image and return code 202', async () => {
      const updatedimage = {
        url: 'https://cdn.pixabay.com/photo/ejemplo.jpg (Actualizado)',
      };
      const response = await request
        .patch('/api/image/Colombia_Hotel_1')
        .send(updatedimage);
      expect(response.status).toBe(202);
      expect(response.body).toHaveProperty('url');
    }, 10000);


    test('should return code 404 if there is no image', async () => {
      const response = await request.delete('/api/image/999');
      expect(response.status).toBe(404);
    }, 10000);
  });
});
