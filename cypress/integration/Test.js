/// <reference types="cypress"/>

describe('My First Test Suite', () => {

    it("My FirstTest case", () => {

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);
        //selenium get hit hurl in browser, cypress get acts like findElement in Selenium
        cy.get('.product').should('have.length', 5);
        cy.get('.product:visible').should('have.length', 4);
        //parent child chaining
        cy.get('.products').as('productLocator');
        cy.get('@productLocator').find('.product').should('have.length', 4);
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click();

        cy.get('.products').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text();
            cy.log(textVeg);

            if(textVeg.includes('Cashews')){

            }
            console.log($el);
        });

        cy.get('.brand').then(($element) => {
            cy.log($element.text());
        });
    });
});