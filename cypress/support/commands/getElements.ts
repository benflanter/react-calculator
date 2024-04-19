import { getDataCy } from "../functions/dataCy";

Cypress.Commands.add("getElementBySelector", (selector) => {
  cy.get(getDataCy(selector));
});
