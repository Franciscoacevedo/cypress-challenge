/// <reference types= "cypress" />

describe('Input test suit', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/inputs ')
    });

    it('Introducing', () => {
        cy.get("[type='number']", {timeout:6000}).type('35');
    });
});