/// <reference types="cypress" />

describe("User Flow", () => {
  before(() => {
    cy.visit(`${Cypress.env("development")}/login`); // switch to production to test the deployed app
    cy.get("#email").type("heavy@test.com");
    cy.get("#password").type("test123");
    cy.get("form").submit();
  });

  describe("Dashboard - Links", () => {
    it("creates a new link", () => {
      cy.get("input[name='title']").type("New Link");
      cy.get("input[name='link_address']").type("https://google.com");
      cy.get("[data-testid='save']").click();
    });

    it("updates the link", () => {
      cy.get("input[name='title']").first().type(" - TEST");
      cy.get("[data-testid='update']").click();
    });

    it("deletes the link", () => {
      cy.get('[data-testid="delete"]').click();
    });
  });

  describe("Dashboard - Appearance", () => {
    before(() => {
      cy.visit(`${Cypress.env("development")}/dashboard/appearance`);
    });

    it("adds profile title & bio", () => {
      cy.get("input[name='profile_title']").click().type("Valid Username");
      cy.get("textarea[name='bio']").type("Hi There!");
    });

    it("selects background theme", () => {
      cy.get("select").select("green").should("have.value", "green");
    });

    it("attaches a picture", () => {
      cy.fixture("profile.jpeg").as("myProfile");
      cy.get("input[type=file]").selectFile("@myProfile", { force: true });
      cy.get("[data-testid='save']").click();
    });
  });
});
