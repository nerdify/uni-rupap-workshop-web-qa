describe('test gallery', function () {
  beforeEach(function () {
    cy.visit('http://127.0.0.1:5500')
  })

  it('can move foward', function () {
    cy.get('.right-button').click()

    cy.get('.title').should('contain', 'Volcan')
  })

  it('can move from first image to last one', function () {
    cy.get('.left-button').click()

    cy.get('.title').should('contain', 'Cañones')
    cy.get('.image').should('have.attr', 'src', './images/6.jpg')
  })
})
