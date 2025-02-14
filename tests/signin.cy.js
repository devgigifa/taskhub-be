describe('The Home Page', () => {
    it('sucessfully loads', ()=>{
        cy.visit('http://localhost:5173')
        cy.contains('Sign In').click()
        cy.url().should('include', '/signin')
        cy.get('#email').type('teste25@teste.com')
        cy.get('#password').type0('teste')
        cy.get('[data-cy=botao-login]').click()
    })
})