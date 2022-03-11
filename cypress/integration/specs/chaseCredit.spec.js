
/// <reference types="cypress" />
describe('Chase Credit Card Application', function () {
    it('Automate chase credit card application', function()
     {
        cy.visit("https://www.chase.com")
        cy.get('[data-id=product-2]').click()
        cy.xpath('//a[contains(text(),"Personal credit cards")]').click()
        cy.get('[data-pt-name=cc_freedom_ulim_allcc_name]').contains("Chase Freedom Unlimited").click()
        cy.get('[id=ApplyNow]').click()
        //cy.url()
    })
})
