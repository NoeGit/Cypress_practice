

describe('Automation Practice', () => {
    it('More automation practice', () => {

        //Check boxes
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#checkBoxOption1').should('not.be.checked').check().and('be.checked');
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked');

        cy.get('input[type="checkbox"]').check(['option1', 'option3']);    
        
        //Static Dropdown
        cy.get('select').select('Option2').should('have.value', 'option2');

        //Dynamic dropdowns
        cy.get('#autocomplete').type('ind');
        cy.get('.ui-menu-item div').each(($el, index, $list) => {

            if($el.text() === "India") {
                $el.click();
            }
        });
        cy.get('#autocomplete').should('have.value', 'India');

        //Check visibility of elements
        cy.get('#displayed-text').should('be.visible');

        //Hide
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible');

        //Unhide
        cy.get('#show-textbox').click();
        cy.get('#displayed-text').should('be.visible');

        //Click radio buttons
        cy.get('input[type="radio"]').each(($el, index) => {
            if($el.val()==="radio2") {
                cy.wrap($el).check();
            }
        });

    });
});