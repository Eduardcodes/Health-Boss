//TODO check API

describe("motivation api is working", () => {
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