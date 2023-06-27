import supertest from 'supertest';
import app from '../../config/app';

const request = supertest(app);

describe('contactInfo controller', () => {
  describe('GET /api/contactInfo', () => {
    test('should return code 200 if the request is successful', async () => {
      const response = await request.get('/api/contactInfo');
      expect(response.status).toBe(200);
    });
  });

  describe('GET /api/contactInfo/:id', () => {
    test('should return code 200 if the contactInfo exists', async () => {
      const response = await request.get('/api/contactInfo/Colombia_Hotel_1'); // Cambia el ID según tus datos de prueba
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id');
    });

    test('should return code 404 if the contactInfo does not exist', async () => {
      const response = await request.get('/api/contactInfo/999');
      expect(response.status).toBe(404);
      expect(response.body).toHaveProperty('message', 'ContactInfo not found');
    });
  });

  describe('POST /api/contactInfo', () => {
    test('should create a new contactInfo and return code 201', async () => {
      const newcontactInfo = {
        name: 'Hotel de Ejemplo',
        email: 'info@hotelesejemplo.com',
        phone: '+57 605 6543200',
        hotelId: 'Colombia_Hotel_1',
      };

      const response = await request
        .post('/api/contactInfo')
        .send(newcontactInfo);
      expect(response.status).toBe(201);
<<<<<<< HEAD
      expect(response.body).toHaveProperty('id');
=======
>>>>>>> 42d9cb7884aaeab8b78810e48fd064607841f2c0
      expect(response.body).toHaveProperty('name');
      expect(response.body).toHaveProperty('email');
      expect(response.body).toHaveProperty('phone');
      expect(response.body).toHaveProperty('hotelId');
    });
  });

  describe('PATCH /api/contactInfo/:id', () => {
    test('should update an existing contactInfo and return code 202', async () => {
      const updatedcontactInfo = {
        name: 'Charleston Santa Teresa (Actualizado)',
        email: 'info@hotelescharleston.com (Actualizado)',
        phone: '+57 605 6543201 (Actualizado)',
      };
      const response = await request
        .patch('/api/contactInfo/Colombia_Hotel_1') // Cambia el ID según tus datos de prueba
        .send(updatedcontactInfo);
      expect(response.status).toBe(202);
      expect(response.body).toHaveProperty('name');
      expect(response.body).toHaveProperty('email');
      expect(response.body).toHaveProperty('phone');
    });

    // describe("DELETE /api/contactInfo/:id", () => {
    //   test("should delete an existing contactInfo and return code 200", async () => {
    //     const response = await request.delete("/api/contactInfo/1"); // Cambia el ID según tus datos de prueba
    //     expect(response.status).toBe(200);
    //     expect(response.body).toHaveProperty("name");
    //     expect(response.body).toHaveProperty("email");
    //     expect(response.body).toHaveProperty("phone");
    //   });

    test('should return code 404 if there is not Contact Information', async () => {
      const response = await request.delete('/api/contactInfo/999');
      expect(response.status).toBe(404);
      // expect(response.body).toHaveProperty('message', 'Unauthorized');
    });
  });
});
