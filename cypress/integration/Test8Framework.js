///<reference types="cypress"/>
import HomePage from '../integration/pageObjects/Homepage'; //IMPORT PAGE OBJECT
import ProductPage from './pageObjects/Productpage';
import CheckoutPage from '../integration/pageObjects/CheckoutPage';

describe('Hooks and fixtures testing suite', () => {


    // MUST USE 'globalThis' TO GET FIXURES TO WORK IF SET IN BEFORE HOOK
    before( () =>  {
        //runs once before all tests in the block
        cy.fixture('example').then((data) => {
            globalThis.data = data;
        })
    });
    
    it('Fixture test and adding custom functions', () => {   
        
        //DECLARE PAGE OBJECT
        const homePage = new HomePage();
        const productPage = new ProductPage();
        const checkoutPage = new CheckoutPage();

        cy.visit('https://rahulshettyacademy.com/angularpractice/');    
        homePage.getEditBox().type(globalThis.data.name);
        homePage.getGender().select(globalThis.data.gender);
        homePage.getTwoWayDataBinding().should('have.value', globalThis.data.name);

        //ASSERTION FOR MINIMUM LENGTH ATTRIBUTE
        cy.get(':input[name="name"]:nth-child(2)').should('have.attr', 'minlength', '2');
        //ALTERNATE WAY OF ASSERTING ATTRIBUTE VALUE
        cy.get(':input[name="name"]:nth-child(2)').then((el) => {
            const newElement = el.attr('minlength');
            expect(newElement).to.equal('2');
        }); 

        //ASSERTION FOR DISABLED RADIO BUTTON
        homePage.getEntrepeneurRadioButton().should('be.disabled');

        //GO TO STORE SHOP
        homePage.getShopTab().click();

        //ITERATE THROUGH SHOPPING CART AND USE EXAMPLE.JSON TO USE ARRAY OF PRODUCTS
        globalThis.data.productName.forEach((element) => {
            cy.selectProduct(element); //CUSTOMIZABLE COMMAND
        });

        //CHECKOUT
        productPage.getCheckoutBtn().click();  
        cy.contains('Checkout').click();
        cy.get('#country').type('India');
        cy.get('.suggestions > ul').click();
        cy.get('#checkbox2').click({force:true});
        cy.get('.ng-untouched > .btn').click();
        //THE FOLLOWING COMMENTED CODE DOES NOT WORK BECAUSE THERE ARE WHITESPACES IN STRING. USE .then() TO INVOKE TEXT AND USE 'INCLUDES'
        // cy.get('.alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-)')
        cy.get('.alert').then((el) => {
            const actualText = el.text();

            expect(actualText.includes("Success")).to.be.true;

            //OR YOU CAN USE THIS AS WELL

            expect(actualText).to.contain('Success! Thank you! Your order will be delivered in next few weeks :-).');
            
        });


    });
});