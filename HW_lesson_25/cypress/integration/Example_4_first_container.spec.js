require('cypress-xpath');
const FirstContainerExampleFour = require('../pageObjects/FirstContainerExampleFour');
const firstContainerExampleFour = new FirstContainerExampleFour();

describe('Testing first container', () => {

    beforeEach('Visit app', ()=>{

        cy.visit('http://localhost:3000/example-4');

    });

    afterEach('Reload page', () => {

        cy.reload();

    })

    it('Should contain the title of container .click() and .dblClick()', () => {

        cy.xpath(firstContainerExampleFour.clickAndDblClickText)
            .should('have.text', '.click() and .dblClick()')

    });

    it('Selected Item should be "nothing selected"', () => {

        cy.get(firstContainerExampleFour.selectedItemValue)
            .should('have.text', 'Nothing selected')

    });

    it('Highlight "Option One" should be color by default', () => {

        cy.get(firstContainerExampleFour.optionOne)
            .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')

    });

    it('Should "Selected Item: nothing" selected after click "Option One"', () => {

        cy.get(firstContainerExampleFour.optionOne)
            .click();

        cy.get(firstContainerExampleFour.selectedItemValue)
            .should('have.text', 'Nothing selected');

    });

    it('Should change highlight "Option One" after click', () => {

        cy.get(firstContainerExampleFour.optionOne)
            .click();

        cy.get(firstContainerExampleFour.optionOne)
            .should('have.css', 'background-color', 'rgb(221, 221, 221)')

    });

    it('Should change highlight "Option One" after doubleclick', () => {

        cy.get(firstContainerExampleFour.optionOne)
            .dblclick();

        cy.get(firstContainerExampleFour.optionOne)
            .should('have.css', 'background-color', 'rgb(221, 221, 221)')

    });

    it('Should change "Selected Item : Option One" ', () => {

        cy.get(firstContainerExampleFour.optionOne)
            .dblclick();

        cy.get(firstContainerExampleFour.selectedItemValue)
            .should('have.text', 'Option One');

    });

    it('Selected Item should be "nothing selected"', () => {

        cy.get(firstContainerExampleFour.selectedItemValue)
                .should('have.text', 'Nothing selected')

        });

    it('Highlight "Option Two" by default', () => {

        cy.get(firstContainerExampleFour.optionTwo)
            .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')

    });

    it('Should nothing selected after click "Option Two"', () => {

        cy.get(firstContainerExampleFour.optionTwo)
            .click();

        cy.get(firstContainerExampleFour.selectedItemValue)
            .should('have.text', 'Nothing selected');

    });

    it('Should change highlight "Option Two" after click', () => {

        cy.get(firstContainerExampleFour.optionTwo)
            .click();

        cy.get(firstContainerExampleFour.optionTwo)
            .should('have.css', 'background-color', 'rgb(221, 221, 221)')

    });

    it('Should change highlight "Option Two" after doubleclick', () => {

        cy.get(firstContainerExampleFour.optionTwo)
            .dblclick();

        cy.get(firstContainerExampleFour.optionTwo)
            .should('have.css', 'background-color', 'rgb(221, 221, 221)')

    });

    it('Should change "Selected Item : Option Two" ', () => {

        cy.get(firstContainerExampleFour.optionTwo)
            .dblclick();

        cy.get(firstContainerExampleFour.selectedItemValue)
            .should('have.text', 'Option Two');

    });

    it('Selected Item should be "nothing selected"', () => {

        cy.get(firstContainerExampleFour.selectedItemValue)
            .should('have.text', 'Nothing selected')

    });

    it('Highlight "Option Three" by default', () => {

        cy.get(firstContainerExampleFour.optionThree)
            .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')

    });

    it('Should nothing selected after click "Option Three"', () => {

        cy.get(firstContainerExampleFour.optionThree)
            .click();

        cy.get(firstContainerExampleFour.selectedItemValue)
            .should('have.text', 'Nothing selected');

    });

    it('Should change highlight "Option Three" after click', () => {

        cy.get(firstContainerExampleFour.optionThree)
            .click();

        cy.get(firstContainerExampleFour.optionThree)
            .should('have.css', 'background-color', 'rgb(221, 221, 221)')

    });

    it('Should change highlight "Option Three" after doubleclick', () => {

        cy.get(firstContainerExampleFour.optionThree)
            .dblclick();

        cy.get(firstContainerExampleFour.optionThree)
            .should('have.css', 'background-color', 'rgb(221, 221, 221)')

    });

    it('Should change "Selected Item : Option Three" ', () => {

        cy.get(firstContainerExampleFour.optionThree)
            .dblclick();

        cy.get(firstContainerExampleFour.selectedItemValue)
            .should('have.text', 'Option Three');

    });

    it('After Click on three items "Selected Item" should have value "nothing selected"" ', () => {

        cy.get(firstContainerExampleFour.optionOne)
            .click();
        cy.get(firstContainerExampleFour.selectedItemValue)
            .should('have.text', 'Nothing selected');

        cy.get(firstContainerExampleFour.optionTwo)
            .click();
        cy.get(firstContainerExampleFour.selectedItemValue)
            .should('have.text', 'Nothing selected');

        cy.get(firstContainerExampleFour.optionThree)
            .click();
        cy.get(firstContainerExampleFour.selectedItemValue)
            .should('have.text', 'Nothing selected');

    });

    it('After Click on three items highlight should be change" ', () => {

        cy.get(firstContainerExampleFour.optionOne)
            .dblclick();
        cy.get(firstContainerExampleFour.optionOne)
            .should('have.css', 'background-color', 'rgb(221, 221, 221)');

        cy.get(firstContainerExampleFour.optionTwo)
            .dblclick();
        cy.get(firstContainerExampleFour.optionTwo)
            .should('have.css', 'background-color', 'rgb(221, 221, 221)');

        cy.get(firstContainerExampleFour.optionThree)
            .dblclick();
        cy.get(firstContainerExampleFour.optionThree)
            .should('have.css', 'background-color', 'rgb(221, 221, 221)');

    });

});