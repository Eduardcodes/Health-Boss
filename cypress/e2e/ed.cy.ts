describe("user not log in in homepage", () => {
    it("Visits all the nav bar", () => {
    cy.visit("http://localhost:3000/ed");
    cy.contains("Add New User").click();
    cy.get('input[name="userName"]').type('testName')
    cy.get('input[name="userName"]').should('have.value', 'testName')
    cy.get('input[name="email"]').type('testEmail')
    cy.get('input[name="email"]').should('have.value', 'testEmail')
    cy.get('input[name="password"]').type('testpassword')
    cy.get('input[name="password"]').should('have.value', 'testpassword')
    cy.contains("Submit").click();
    cy.wait(1000);
    cy.get('button.text-blue-700').last().click();
    cy.get('input[name="userName"]').should('have.value', 'testName')
    cy.get('input[name="email"]').should('have.value', 'testEmail')
    cy.get('input[name="userName"]').type('1')
    cy.get('input[name="userName"]').should('have.value', 'testName1')
    cy.get('input[name="email"]').type('1')
    cy.get('input[name="email"]').should('have.value', 'testEmail1')
    cy.contains("Submit").click();
    cy.wait(1000);
    cy.get("button.text-red-700").last().click();
    cy.contains("Yes").click();
    cy.wait(1000);
    cy.get('body').should('not.contain', 'testName');
    });
})