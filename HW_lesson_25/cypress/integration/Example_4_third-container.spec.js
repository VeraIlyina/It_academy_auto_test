require('cypress-xpath');
const ThirdContainerExampleFour = require('../pageObjects/ThirdContainerExampleFour');
const thirdContainerExampleFour = new ThirdContainerExampleFour();

describe('Testing third container', () => {

    beforeEach('Visit app', () => {

        cy.visit('http://localhost:3000/example-4');

    });

    afterEach('Reload page', () => {

        cy.reload();

    })

    it('Should contain the title of container ".select()"', () => {

        cy.xpath(thirdContainerExampleFour.headerSelectText)
            .should('have.text', '.select()');

    });

    it('By default selected item should be "Nothing selected"', () => {

        cy.get(thirdContainerExampleFour.selectedItemValue)
            .should('have.text', 'Nothing selected');

    });

    it('Should select "Option One"', () => {

        cy.enterDropdownMenu('Option One');

    });

    it('Should select "Option Two"', () => {

        cy.enterDropdownMenu('Option Two');

    });

    it('Should select "Option Three"', () => {

        cy.enterDropdownMenu('Option Three');

    });

    it('Should change "Option One" to "Option Two"', () => {

        cy.enterDropdownMenu('Option One');
        cy.enterDropdownMenu('Option Two');

    });

    it('Should change "Option Two" to "Option Three"', () => {

        cy.enterDropdownMenu('Option Two');
        cy.enterDropdownMenu('Option Three');

    });

    it('Should change "Option Three" to "Option One"', () => {

        cy.enterDropdownMenu('Option Three');
        cy.enterDropdownMenu('Option One');

    });

    it('Should change "Option Two" to "Option One"', () => {

        cy.enterDropdownMenu('Option Two');
        cy.enterDropdownMenu('Option One');

    });

});