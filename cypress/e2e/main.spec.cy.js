const mensagem = 'Comentário de teste';


describe('template spec', () => {

  beforeEach(() => {
    cy.visit('localhost:5173/')
  })

  it('passes', () => {
    cy.get('[data-qa="comment-input"]').eq(0).type(mensagem);
    cy.get('[data-qa="publish-button"]').eq(0).click();
    cy.get('[data-qa="comment-text"]').eq(1).should('have.text', mensagem);
    cy.get('[data-qa="comment-text"]').eq(1).contains(mensagem);
    cy.get('[data-qa="comment-text"]').each(($element) => {
      if ($element.text() === mensagem) {
        cy.get($element).siblings('header').children('[data-qa="delete-button"]').click();

      }
    });
  })

})



