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

    // As linhas abaixo (o laço .each) varrem todos os comentários exibidos na tela procurando 
    // pelo comentário que possui o texto exato que acabamos de criar. 
    // Ao encontrá-lo, o Cypress "embrulha" o elemento (wrap) para poder clicar no botão de apagar.
    cy.get('[data-qa="comment-text"]').each(($element) => {
      if ($element.text() === mensagem) {
        cy.wrap($element).siblings('header').children('[data-qa="delete-button"]').click()
      }
    });

    // Validamos se o comentário de teste não existe mais na tela

    cy.contains('[data-qa="comment-text"]', mensagem).should('not.exist');
    cy.get('[data-qa="comment-text"]').contains(mensagem).should('not.exist');
    // O laço .each varre novamente todos os comentários. 
    // Desta vez, usamos 'expect' para garantir que nenhum deles contenha o texto que foi apagado.  
    cy.get('[data-qa="comment-text"]').each(($element) => {
      expect($element.text()).to.not.include(mensagem);
    });
  })
})
