import { Before, After, BeforeStep, AfterStep } from "@badeball/cypress-cucumber-preprocessor";
import UrlLoader from "../utils/UrlLoader";

Before(() => {
  cy.log("🌟 Before each scenario");
  const environment = Cypress.env('ENV') || 'prod'; // Default to 'prod' if not passed
  const loginUrl = UrlLoader.getLoginUrl(environment);
  cy.visit(loginUrl); 
  cy.clearCookies();
  cy.clearLocalStorage();
});

After(() => {
  cy.log("✅ After each scenario");
});

BeforeStep(() => {
  cy.log("➡️ Before each step");
});

AfterStep(() => {
  cy.log("⬅️ After each step");
});