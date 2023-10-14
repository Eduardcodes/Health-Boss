describe("Add, edit and delete user", () => {
    it("test1", () => {
      cy.visit("http://localhost:3002/");
      cy.contains("Add New User").click();
      cy.get('input[name="userName"]').type("testName");
      cy.get('input[name="userName"]').should("have.value", "testName");
      cy.get('input[name="email"]').type("testEmail");
      cy.get('input[name="email"]').should("have.value", "testEmail");
      cy.get('input[name="password"]').type("testpassword");
      cy.get('input[name="password"]').should("have.value", "testpassword");
      cy.contains("Submit").click();
      cy.wait(1000);
    });
  
    it("edit new user", () => {
      cy.visit("http://localhost:3000/ed");
      cy.wait(1000);
      cy.get("button.text-blue-700").last().click();
      cy.get('input[name="userName"]').should("have.value", "testName");
      cy.get('input[name="email"]').should("have.value", "testEmail");
      cy.get('input[name="userName"]').type("1");
      cy.get('input[name="userName"]').should("have.value", "testName1");
      cy.get('input[name="email"]').type("1");
      cy.get('input[name="email"]').should("have.value", "testEmail1");
      cy.contains("Submit").click();
      cy.wait(1000);
    });
  
    it("delete new user", () => {
      cy.visit("http://localhost:3000/ed");
      cy.wait(1000);
      cy.get("button.text-red-700").last().click();
      cy.contains("Yes").click();
      cy.wait(1000);
      cy.get("h1").should("not.contain", "testName");
  });
  });