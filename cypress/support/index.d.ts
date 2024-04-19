/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    getElementBySelector(selector: string): Chainable<void>;
    
    validateDisplay(
      displaySelector: string,
      expectedDisplayedValue: string
    ): Chainable<void>;
  }
}
