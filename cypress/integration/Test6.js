///<reference types="cypress"/>

describe('6th Testing Suite', () => {
    it('Testing Mouse Hover actions', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('[class="mouse-hover-content"]').invoke('show');
        cy.contains('Top').click();
        cy.url().should('include', '#top');
    });
});