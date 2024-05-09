describe('Покупка аватара', function () {

    it('Покупка аватара', function () {
         cy.visit('https://pokemonbattle.me/');
         cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN');
         cy.get('#password').type('USER_PASSWORD');
         cy.get('.auth__button').click();
         cy.get('.header__btns > [href="/shop"]').click();
         cy.get('.available > button').first().click();
         cy.get('.credit').type('4330 9976 6953 2939');
         cy.get('.k_input_date').type('0129');
         cy.get('.k_input_ccv').type('125');
         cy.get('.k_input_name').type('NAME');
         cy.get('.pay-btn').click();
         cy.get('#cardnumber').type('56456');
         cy.get('.payment__submit-button').click();
         cy.get('.payment__padding').contains('Покупка прошла успешно');
     })
 }) 