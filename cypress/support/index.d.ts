/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    getElementBySelector(selector: string): Chainable<void>;
  }
}
