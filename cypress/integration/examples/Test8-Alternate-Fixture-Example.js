///<reference types="cypress"/>

//INSTEAD OF USING CY.FIXTURE(), YOU CAN IMPORT THE JSON FILE (I used 'data' as a variable and imported the right path to example.json)

import data from '../../fixtures/example.json';


describe('Hooks and fixtures testing suite', () => {

    it('Fixture test', () => {
           
        cy.visit('https://rahulshettyacademy.com/angularpractice/');   
        
        //SIMPLY INPUT 'data.name' or 'data.-whichever extension now
        cy.get(':input[name="name"]:nth-child(2)').type(data.name);
        cy.get('select').select(data.gender);
        
    });
});