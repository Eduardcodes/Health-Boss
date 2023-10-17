describe("check input fields work", () => {
  it("check 'User Name field", () => {
    cy.visit("http://localhost:3002/createUser");

    cy.get("#userName").type("testUser").should("have.value", "testUser");
    cy.get("#firstName").type("testFirst").should("have.value", "testFirst");
    cy.get("#lastName").type("testLast").should("have.value", "testLast");
    cy.get("#email").type("testEmail").should("have.value", "testEmail");
    cy.get("#password")
      .type("testPassword")
      .should("have.value", "testPassword");
  });
});

// describe("check 'Create account' button ", () => {
//   it("give error if input fields empty", () => {
//     cy.visit("http://localhost:3002/createUser");
//   });
//   it("give error if userName is too short fields empty", () => {
//     cy.visit("http://localhost:3002/createUser");
//   });
// });

//TODO fix 'Create account button' test after error message is online
