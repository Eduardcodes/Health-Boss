describe("check input fields work", () => {
  it("check 'User Name field", () => {
    cy.visit("http://localhost:3002/loginUser");

    cy.get("#email").type("testEmail").should("have.value", "testEmail");
    cy.get("#password").type("testPassword").should("have.value", "testPassword");
  });
});

// describe("check 'Create account' button ", () => {
//   it("give error if input fields empty", () => {
//     cy.visit("http://localhost:3002/loginUser");
//   });
//   it("give error if userName is too short fields empty", () => {
//     cy.visit("http://localhost:3002/createUser");
//   });
// });

//TODO fix 'Login' test after error message is online
