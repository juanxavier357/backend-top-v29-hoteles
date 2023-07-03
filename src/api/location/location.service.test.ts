import { getAllLocation, getLocationById } from "./location.service"


describe('location Service', () => {
  describe('getAllRol', () => {
    test('should return an instance of array', async () => {
      // Arrange
      const expected = Array;

      // Act
      const result = await getAllLocation();

      // Assert
      expect((result)).toBeInstanceOf(expected);
    });


    test('should return null if location is not found', async () => {
      // Arrange
      const roleId = "666";
      const expected = null;

      // Act
      const result = await getLocationById(roleId);

      // Assert
      expect(result).toBeNull();
      expect(result).toEqual(expected);
    });

  })
});
