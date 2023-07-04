import supertest from 'supertest';
import app from '../../config/app';

const request = supertest(app);

describe('hotel controller', () => {
  describe('GET /api/hotel', () => {
    test('should return code 200 if the request is successful', async () => {
      const response = await request.get('/api/hotel');
      expect(response.status).toBe(200);
    }, 10000); // Aumentar el tiempo de espera a 10000 ms (10 segundos)
  });

  describe('GET /api/hotel/:id', () => {
    test('should return code 200 if the hotel exists', async () => {
      const response = await request.get('/api/hotel/Colombia_Hotel_1'); // Cambia el ID según tus datos de prueba
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id');
    }, 10000);

    test('should return code 404 if the hotel does not exist', async () => {
      const response = await request.get('/api/hotel/999');
      expect(response.status).toBe(404);
      expect(response.body).toHaveProperty('message', 'Hotel not found');
    }, 10000);
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
    }, 10000);

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
    }, 10000);
  });
});
