import supertest from "supertest";
import { getAllRoles, getRoleById } from "./role.service"
import app from "../../config/app";

const request = supertest(app);

describe('role Service', () => {
  describe('getAllRol', () => {
    test('should return an instance of array', async () => {
      // Arrange
      const expected = Array;

      // Act
      const result = await getAllRoles();

      // Assert
      expect((result)).toBeInstanceOf(expected);
    });


    test('should return null if task is not found', async () => {
      // Arrange
      const roleId = "999";
      const expected = null;

      // Act
      const result = await getRoleById(roleId);

      // Assert
      expect(result).toBeNull();
      expect(result).toEqual(expected);
    });
  })
});
