describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:4173");
    cy.get("#h1").should("exist").should("have.text", "Chiner");
  });
});
