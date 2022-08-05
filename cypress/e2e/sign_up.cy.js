/// <reference types="cypress" />
// import '@testing-library/cypress/add-commands'

describe("Sign up", () => {
  it("visits the iLink", () => {
    cy.visit(Cypress.env("development"));
  });

  it("types a username and submit it to navigate to the signup", () => {
    cy.get("input").type("heavy_coder");
    cy.get("form").submit();
  });

  it("finds email and password fields and types valid values", () => {
    cy.get("#email").type("heavy@test.com");
    cy.get("#password").type("test123");
    cy.get("form").submit();
  });
});
