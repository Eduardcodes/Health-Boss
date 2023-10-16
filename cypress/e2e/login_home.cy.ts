describe("check buttons link work", () => {
  it("check 'Create an account' button route to createUser", () => {
    cy.visit("http://localhost:3002/");
    cy.contains("Create an account").click();
    cy.url().should("eq", "http://localhost:3002/createUser");
    cy.contains("User Name");
  });

  it("check 'I have an account' button route to loginUser", () => {
    cy.visit("http://localhost:3002/");
    cy.contains("I have an account").click();
    cy.url().should("eq", "http://localhost:3002/loginUser");
    cy.contains("Email");
  });

  //TODO check the text and jpeg is there?
});

