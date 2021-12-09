///<reference types="cypress"/>
///<reference types="cypress-iframe"/>
import 'cypress-iframe';

describe('Frames test', () => {
    it.skip('Demo example', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.frameLoaded('#courses-iframe');

        cy.iframe().find('a[href="#/mentorship"]').eq(0).click();
        cy.iframe().find('h1[class*="pricing-title text-white ls-1"]').should('have.length', 2);
    });

    it('fixture demo', () => {
        cy.fixture('example').then((data) => {
            console.log('data log: ' + data.name);

            cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
            cy.get('#name').type(data.name);
        });
    });
});