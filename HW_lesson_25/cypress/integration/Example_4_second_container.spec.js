require('cypress-xpath');
const SecondContainerExampleFour = require('../pageObjects/SecondContainerExampleFour');
const secondContainerExampleFour = new SecondContainerExampleFour();

describe('Testing second container', () => {

    beforeEach('Visit app', () => {

        cy.visit('http://localhost:3000/example-4');

    });

    afterEach('Reload page', () => {

        cy.reload();

    })

    it('Should contain the title of container ".check() and .uncheck()"', () => {

        cy.xpath(secondContainerExampleFour.checkAndUncheckHeader)
            .should('have.text', '.check() and .uncheck()');

    });

    it('Count of selected checkboxes should be 0', () => {

        cy.get(secondContainerExampleFour.counterChexboxes)
            .should('have.text', '0');

    });

    it('Count of selected checkboxes should be 1(first checkbox)', () => {

        cy.xpath(secondContainerExampleFour.checkboxOptionOne)
            .click();

        cy.get(secondContainerExampleFour.counterChexboxes)
            .should('have.text', '1');

    });

    it('Count of selected checkboxes should be 1(second checkbox)', () => {

        cy.xpath(secondContainerExampleFour.checkboxOptionTwo)
            .click();

        cy.get(secondContainerExampleFour.counterChexboxes)
            .should('have.text', '1');

    });

    it('Count of selected checkboxes should be 1(third checkbox)', () => {

        cy.xpath(secondContainerExampleFour.checkboxOptionThree)
            .click();

        cy.get(secondContainerExampleFour.counterChexboxes)
            .should('have.text', '1');

    });

    it('Count of selected checkboxes should be 2 (first + second checkboxes)', () => {

        cy.xpath(secondContainerExampleFour.checkboxOptionOne)
            .click();
        cy.xpath(secondContainerExampleFour.checkboxOptionTwo)
            .click();
        cy.get(secondContainerExampleFour.counterChexboxes)
            .should('have.text', '2');

    });

    it('Count of selected checkboxes should be 2 (first + third checkboxes)', () => {

        cy.xpath(secondContainerExampleFour.checkboxOptionOne)
            .click();
        cy.xpath(secondContainerExampleFour.checkboxOptionThree)
            .click();
        cy.get(secondContainerExampleFour.counterChexboxes)
            .should('have.text', '2');

    });

    it('Count of selected checkboxes should be 2 (second + third checkboxes)', () => {

        cy.xpath(secondContainerExampleFour.checkboxOptionTwo)
            .click();
        cy.xpath(secondContainerExampleFour.checkboxOptionThree)
            .click();
        cy.get(secondContainerExampleFour.counterChexboxes)
            .should('have.text', '2');

    });

    it('Count of selected checkboxes should be 3 (all checkboxes)', () => {

        cy.xpath(secondContainerExampleFour.checkboxOptionOne)
            .click();
        cy.xpath(secondContainerExampleFour.checkboxOptionTwo)
            .click();
        cy.xpath(secondContainerExampleFour.checkboxOptionThree)
            .click();
        cy.get(secondContainerExampleFour.counterChexboxes)
            .should('have.text', '3');

    });

    it('First checkbox should unselected', () => {

        cy.xpath(secondContainerExampleFour.checkboxOptionOne)
            .click();
        cy.get(secondContainerExampleFour.counterChexboxes)
            .should('have.text', '1');

        cy.xpath(secondContainerExampleFour.checkboxOptionOne)
            .click();
        cy.get(secondContainerExampleFour.counterChexboxes)
            .should('have.text', '0');
    });

    it('Second checkbox should unselected', () => {

        cy.xpath(secondContainerExampleFour.checkboxOptionTwo)
            .click();
        cy.get(secondContainerExampleFour.counterChexboxes)
            .should('have.text', '1');

        cy.xpath(secondContainerExampleFour.checkboxOptionTwo)
            .click();
        cy.get(secondContainerExampleFour.counterChexboxes)
            .should('have.text', '0');
    });

    it('Third checkbox should unselected', () => {

        cy.xpath(secondContainerExampleFour.checkboxOptionThree)
            .click();
        cy.get(secondContainerExampleFour.counterChexboxes)
            .should('have.text', '1');

        cy.xpath(secondContainerExampleFour.checkboxOptionThree)
            .click();
        cy.get(secondContainerExampleFour.counterChexboxes)
            .should('have.text', '0');
    });

    it('After selected 2 checkboxes and unselect 1, should be 1 checkbox selected', () => {

        cy.xpath(secondContainerExampleFour.checkboxOptionOne)
            .click();
        cy.xpath(secondContainerExampleFour.checkboxOptionTwo)
            .click();
        cy.get(secondContainerExampleFour.counterChexboxes)
            .should('have.text', '2');

        cy.xpath(secondContainerExampleFour.checkboxOptionOne)
            .click();
        cy.get(secondContainerExampleFour.counterChexboxes)
            .should('have.text', '1');
    });
});