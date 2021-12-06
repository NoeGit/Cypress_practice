///<reference types="cypress"/>

describe('Hooks and fixtures testing suite', () => {


    // MUST USE 'globalThis' TO GET FIXURES TO WORK IF SET IN BEFORE HOOK
    before( () =>  {
        //runs once before all tests in the block
        cy.fixture('example').then((data) => {
            globalThis.data = data;
        })
    });
    
    it('Fixture test and adding custom functions', () => {    
        cy.visit('https://rahulshettyacademy.com/angularpractice/');    
        cy.get(':input[name="name"]:nth-child(2)').type(globalThis.data.name);
        cy.get('select').select(globalThis.data.gender);
        cy.get(':input[name="name"]:nth-child(1)').should('have.value', globalThis.data.name);

        //ASSERTION FOR MINIMUM LENGTH ATTRIBUTE
        cy.get(':input[name="name"]:nth-child(2)').should('have.attr', 'minlength', '2');
        //ALTERNATE WAY OF ASSERTING ATTRIBUTE VALUE
        cy.get(':input[name="name"]:nth-child(2)').then((el) => {
            const newElement = el.attr('minlength');
            expect(newElement).to.equal('2');
        });

        //ASSERTION FOR DISABLED RADIO BUTTON
        cy.get('#inlineRadio3').should('be.disabled');

        //GO TO STORE SHOP
        cy.get(':nth-child(2) > .nav-link').click();
        cy.get('h4.card-title').each(($el, index, list) => {
            if($el.text().includes('Blackberry')){
                //INDEX SERVES AS BUTTON THAT IS IN GROUP WITH BLACKBERRY
                cy.get('button.btn.btn-info').eq(index).click();
            }
        });

    });
});