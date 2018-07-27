// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/view1')
    cy.contains('h2', 'This is View 1')
  })
})
