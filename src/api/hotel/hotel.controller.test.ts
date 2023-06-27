import supertest from 'supertest';
import app from '../../config/app';

const request = supertest(app);

describe('hotel controller', () => {
  describe('GET /api/hotel', () => {
    test('should return code 200 if the request is successful', async () => {
      const response = await request.get('/api/hotel');
      expect(response.status).toBe(200);
    });
  });

  describe('GET /api/hotel/:id', () => {
    test('should return code 200 if the hotel exists', async () => {
      const response = await request.get('/api/hotel/Colombia_Hotel_1'); // Cambia el ID según tus datos de prueba
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id');
    });

    test('should return code 404 if the hotel does not exist', async () => {
      const response = await request.get('/api/hotel/999');
      expect(response.status).toBe(404);
      expect(response.body).toHaveProperty('message', 'Hotel not found');
    });
  });

  describe('POST /api/hotel', () => {
    test('should create a new hotel and return code 201', async () => {
      const newhotel = {
        hotel: 'Hotel de Ejemplo',
        about: 'Descripcion de ejemplo',
      };

      const response = await request.post('/api/hotel').send(newhotel);
      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('id');
      expect(response.body).toHaveProperty('hotel');
      expect(response.body).toHaveProperty('about');
    });
  });

  describe('PATCH /api/hotel/:id', () => {
    test('should update an existing hotel and return code 202', async () => {
      const updatedhotel = {
        hotel: 'Charleston Santa Teresa (Actualizado)',
      };
      const response = await request
        .patch('/api/hotel/Colombia_Hotel_1') // Cambia el ID según tus datos de prueba
        .send(updatedhotel);
      expect(response.status).toBe(202);
      expect(response.body).toHaveProperty('id');
      expect(response.body).toHaveProperty('hotel');
    });

    // describe("DELETE /api/hotel/:id", () => {
    //   test("should delete an existing hotel and return code 200", async () => {
    //     const response = await request.delete("/api/hotel/1"); // Cambia el ID según tus datos de prueba
    //     expect(response.status).toBe(200);
    //     expect(response.body).toHaveProperty("id");
    //     expect(response.body).toHaveProperty("name");
    //   });

    test('should return code 404 if there is not Hotel', async () => {
      const response = await request.delete('/api/hotel/999');
      expect(response.status).toBe(404);
      // expect(response.body).toHaveProperty('message', 'Unauthorized');
    });
  });
});