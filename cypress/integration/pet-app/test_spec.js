/* global describe, ir, expect */

describe('Petgram', function () {
    it('Funcionamiento de rutas y Modales', function () {
        cy.visit('/')
        cy.get('#historiaBtn').contains('Siguiente').click()
        cy.get('button').contains('Entrar').click()
        cy.get('div').contains('Rocky').click()
        cy.get('.modalPet__exit').click()
        cy.get('nav').contains('Favoritos').click()
        cy.get('nav').contains('Mensajes').click()
        cy.get('.chat').click()
        cy.get('.modaluser__exit').click()
        cy.get('nav').contains('Perfil').click()
        cy.get('button').contains('Salir').click()
    })
})