///<reference types="cypress"/>

describe('7th Testing Suite', () => {
    it('Testing child windows and child tabs using jquery', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        
        cy.get('#opentab').then((el) => {
            const url = el.prop('href');

            cy.log(url);

            // cy.visit(url);
        })

    });
});