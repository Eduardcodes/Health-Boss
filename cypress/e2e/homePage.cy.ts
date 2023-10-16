//TODO fix api checking, now only checking the api by sending request to it

describe("motivation api is working", () => {
  it("send request to MotivationQuoteApi", () => {
    cy.request("GET",'https://api.quotable.io/random?maxLength=30').then((response) =>{
      expect(response.status).to.eq(200)
      //expect(response.body.results.length).to.be.greaterThan(1)
    })
  });
});