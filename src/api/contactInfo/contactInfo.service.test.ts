import supertest from "supertest";
import { getAllContactInfo, getContactInfoById } from "./contactInfo.service"
import app from "../../config/app";

const request = supertest(app);

describe('User Service', () => {
  describe('getAllUsers', () => {
    test('should return an instance of array', async () => {
      // Arrange
      const expected = Array;

      // Act
      const result = await getAllContactInfo();

      // Assert
      expect((result)).toBeInstanceOf(expected);
    });


    test('should return null if contact info is not found', async () => {
      // Arrange
      const roleId = "999";
      const expected = null;

      // Act
      const result = await getContactInfoById(roleId);

      // Assert
      expect(result).toBeNull();
      expect(result).toEqual(expected);
    });
  })
});
