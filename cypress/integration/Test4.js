describe('Fourth Testing Suite', () => {
    it('Testing Alerts/pop ups and new tabs', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('#alertbtn').click();
        cy.get('[value="Confirm"]').click();
        //window alert
        cy.on('window:alert',(str) => {

            //mocha assertions
            expect(str).to.equal('Hello , share this practice page and share your knowledge');
        });

        //confirm alert
        cy.on('window:confirm',(str) => {

            //mocha assertions
            expect(str).to.equal('Hello , Are you sure you want to confirm?');
        });

        
        //Remove 'target=_blank' attribute so link does not open in new tab
        cy.get('#opentab').invoke('removeAttr','target').click();
        cy.url().should('equal', 'https://www.rahulshettyacademy.com/#/index');
        cy.go('back');
        cy.url().should('include', '/AutomationPractice/');
    });
});