import { getAllImage, getImageById } from "./image.service"


describe('location Service', () => {
  describe('getAllRol', () => {
    test('should return an instance of array', async () => {
      // Arrange
      const expected = Array;

      // Act
      const result = await getAllImage();

      // Assert
      expect((result)).toBeInstanceOf(expected);
    });


    test('should return null if location is not found', async () => {
      // Arrange
      const roleId = "666";
      const expected = null;

      // Act
      const result = await getImageById(roleId);

      // Assert
      expect(result).toBeNull();
      expect(result).toEqual(expected);
    });

  })
});
