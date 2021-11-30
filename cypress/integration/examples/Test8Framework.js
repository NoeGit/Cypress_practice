///<reference types="cypress"/>
import data from '../../fixtures/example.json';


describe('Hooks and fixtures testing suite', () => {


    // MUST USE 'globalThis' TO GET FIXURES TO WORK IF SET IN BEFORE HOOK
    before( () =>  {
        //runs once before all tests in the block
        cy.fixture('example').then((data) => {
            globalThis.data = data;
        })
    });
    
    it('Fixture test', () => {
              
        cy.visit('https://rahulshettyacademy.com/angularpractice/');    
        cy.get(':input[name="name"]:nth-child(2)').type(globalThis.data.name);
        cy.get('select').select(globalThis.data.gender);
        
    });
});