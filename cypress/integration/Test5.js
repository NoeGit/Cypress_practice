describe('Fifth Testing Suite', () => {
    it('Testing for tables and scanning through them', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
            const tableText = $el.text();

            if(tableText.includes("Python")){
                cy.get('tr td:nth-child(2)').eq(index).next().then((price) => {
                    const priceText = price.text();
                    console.log('Price should be: ' + priceText);

                    expect(priceText).to.equal('25');
                });
            }
        });
    });
});