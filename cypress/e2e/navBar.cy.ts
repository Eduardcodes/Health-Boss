describe("check navBar button", () => {
    it("'profile icon' go to profile page ", () => {
      cy.visit("http://localhost:3002/loggedin");
      cy.get('#navProfile').click();
     cy.wait(500).url().should("eq", "http://localhost:3002/loggedin/profile");
    });

    it("'statistics icon' go to statistics page ", () => {
        cy.visit("http://localhost:3002/loggedin");
        cy.get('#navStatistics').click();
        cy.wait(500).url().should("eq", "http://localhost:3002/loggedin/statistics");
      });

      it("'Home icon' go to Home page ", () => {
        cy.visit("http://localhost:3002/loggedin/statistics");
        cy.get('#navHome').click();
        cy.wait(500).url().should("eq", "http://localhost:3002/loggedin");
      });

      it("'exercise icon' go to exercise page ", () => {
        cy.visit("http://localhost:3002/loggedin");
        cy.get('#navExercises').click();
        cy.wait(500).url().should("eq", "http://localhost:3002/loggedin/exercises");
      });

      it("'meals icon' go to meals page ", () => {
        cy.visit("http://localhost:3002/loggedin");
        cy.get('#navMeals').click();
        cy.wait(500).url().should("eq", "http://localhost:3002/loggedin/meals");
      });

  });