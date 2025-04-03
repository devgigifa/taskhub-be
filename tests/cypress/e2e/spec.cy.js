describe('The Home Page', () => {
  it('sucessfully loads', ()=>{
      cy.visit('http://localhost:5173')
      cy.contains('Sign In').click()
      cy.url().should('include', '/signin')
      cy.get('#email').type('teste25@teste.com')
      cy.get('#password').type('teste')
      cy.get('#botao-login').click()
      cy.contains('Projects').click()
      cy.contains('Create Project').click()
      cy.get('#name').type('teste')
      cy.get('#description').type('test project')
      cy.get('#owner').select('sda')
      cy.get('[data-cy=id-seletor').click().type('ramon{enter}')
      cy.get('[data-cy=id-seletorMembers').click().type('ramon{enter}teste{enter}')
      cy.get('#botao-project').click()
  })
})








