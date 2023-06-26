import supertest from "supertest";
import { getAllUsers, getUserById } from "./user.service"
import app from "../../config/app";

const request = supertest(app);

describe('User Service', () => {
  describe('getAllUsers', () => {
    test('should return an instance of array', async () => {
      // Arrange
      const expected = Array;

      // Act
      const result = await getAllUsers();

      // Assert
      expect((result)).toBeInstanceOf(expected);
    });


    test('should return null if user is not found', async () => {
      // Arrange
      const roleId = "999";
      const expected = null;

      // Act
      const result = await getUserById(roleId);

      // Assert
      expect(result).toBeNull();
      expect(result).toEqual(expected);
    });
  })
});
