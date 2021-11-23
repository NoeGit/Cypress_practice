/// <reference types="cypress"/>

describe('Second Test', () => {

    it("My Second test case", () => {

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);

        //parent child chaining
        cy.get('.products').as('productLocator');
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {

            const textVeg= $el.find('h4.product-name').text();
            cy.log(textVeg);
            if(textVeg.includes('Cashews'))
            {
               cy.wrap($el).find('button').click();
            }
        });
        cy.get('.cart-icon > img').click();
        cy.contains('PROCEED TO CHECKOUT').click();
        cy.url().should('contain', 'cart');
        cy.contains('Place Order').click();
        cy.url().should('contain', '/country');
    });
});