import { AuthorValue } from "../author.value";

describe("AuthorValue", () => {
  it("should create a new AuthorValue object with a uuid and default rut", () => {
    // Arrange
    const author = {
      name: "John Doe",
      email: "john.doe@example.com",
      rut: "12313-3"
    };

    // Act
    const authorValue = new AuthorValue(author);

    // Assert
    expect(authorValue).toBeDefined();
    expect(authorValue.uuid).toBeDefined();
    expect(authorValue.name).toBe(author.name);
    expect(authorValue.email).toBe(author.email);
    expect(authorValue.rut).toBe("default");
  });

//   it("should create a new AuthorValue object with a uuid and custom rut", () => {
//     // Arrange
//     const author: Author = {
//       name: "Jane Doe",
//       email: "jane.doe@example.com",
//       rut: "12345678-9",
//     };

//     // Act
//     const authorValue = new AuthorValue(author);

//     // Assert
//     expect(authorValue).toBeDefined();
//     expect(authorValue.uuid).toBeDefined();
//     expect(authorValue.name).toBe(author.name);
//     expect(authorValue.email).toBe(author.email);
//     expect(authorValue.rut).toBe(author.rut);
//   });
});
