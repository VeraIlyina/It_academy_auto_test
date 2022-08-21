// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (url) => {
//     cy.visit(url)
// })
const ThirdContainerExampleFour = require('../pageObjects/ThirdContainerExampleFour');
const thirdContainerExampleFour = new ThirdContainerExampleFour();

Cypress.Commands.add('enterDropdownMenu', (itemDropdownMenu) => {

    cy.get(thirdContainerExampleFour.selectDropdownMenu)
        .select(itemDropdownMenu);

    return cy.get(thirdContainerExampleFour.selectedItemValue)
        .should('have.text', itemDropdownMenu);

});

