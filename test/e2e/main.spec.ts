describe('doescypresswork', () => {
  it('works', () => {
    cy.visit('http://localhost:1234')
    expect(1).to.equal(1)
  })
})
