describe('Cadastro', () => {
    
    it('Usuário deve registrar como entregador', () => {
        cy.viewport(1440, 900)
        cy.visit('https://buger-eats.vercel.app')
        
        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text','Cadastre-se para  fazer entregas')
        
        //massa de teste
        var entregador = {
            nome: 'Douglas Davila',
            cpf: '00000000000',
            email: 'davila@gmail.com',
            whatsapp: '51000000000',
            endereco: {
                cep: '91180590',
                rua: 'Rua General Telino Chagastelles',
                numero: '1000',
                complemento: 'Ap 666',
                bairro: 'Parque Santa Fé',
                cidade: 'Porto Alegre/RS'
            }
            

        }

        cy.get('input[name="name"]').type(entregador.nome)
        cy.get('input[name="cpf"]').type(entregador.cpf)
        cy.get('input[name="email"]').type(entregador.email)
        cy.get('input[name="whatsapp"]').type(entregador.whatsapp)
        
        cy.get('input[name="postalcode"]').type(entregador.endereco.cep)
        //cy.realPress("Tab")
        cy.get('input[value="Buscar CEP"]').click()
        cy.get('input[name="address-number"]').type(entregador.endereco.numero)
        cy.get('input[name="address-details"]').type(entregador.endereco.complemento)
        
        cy.wait(2000)
        cy.get('input[name="address"]').should('have.value', entregador.endereco.rua)
        cy.get('input[name="district"]').should('have.value', entregador.endereco.bairro)
        cy.get('input[name="city-uf"]').should('have.value', entregador.endereco.cidade)

    
    
    })
})