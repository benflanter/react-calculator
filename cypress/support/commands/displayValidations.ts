Cypress.Commands.add(
  "validateDisplay",
  (displaySelector, expectedDisplayedValue) => {
    cy.getElementBySelector(displaySelector)
      .invoke("text")
      .should("equal", expectedDisplayedValue);
  }
);


