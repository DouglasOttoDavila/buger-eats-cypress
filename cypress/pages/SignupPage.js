//Arquivo possui o mesmo nome da classe, em PascalCase

class SignupPage {
    //acessa a página onde está o formulário
    go() {
        cy.viewport(1440, 900)
        cy.visit('https://buger-eats.vercel.app')
        
        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text','Cadastre-se para  fazer entregas')
    }

    fillForm(delivery) {
        cy.get('input[name="name"]').type(delivery.name)
        cy.get('input[name="cpf"]').type(delivery.cpf)
        cy.get('input[name="email"]').type(delivery.email)
        cy.get('input[name="whatsapp"]').type(delivery.whatsapp)
        
        cy.get('input[name="postalcode"]').type(delivery.address.postal_code)
        //cy.realPress("Tab")
        cy.get('input[value="Buscar CEP"]').click()
        cy.get('input[name="address-number"]').type(delivery.address.address_number)
        cy.get('input[name="address-details"]').type(delivery.address.address_details)
        
        cy.wait(2000)
        cy.get('input[name="address"]')
            .should('have.value', delivery.address.address)
        cy.get('input[name="district"]')
            .should('have.value', delivery.address.district)
        cy.get('input[name="city-uf"]')
        .should('have.value', delivery.address.city)
        

        cy.contains('.delivery-method li', delivery.delivery_method).click()

        //alternativa XPATH para o localizador acima utilizando extensão xpath (https://www.npmjs.com/package/cypress-xpath)
        //cy.xpath('//ul[@class="delivery-method"]//li//span[text()="'+entregador.metodo_entrega+'"]').click()

        cy.get('input[accept="image/*"]')
            .attachFile('/'+ delivery.cnh)
    }

    submit() {
        cy.get('button[class="button-success"]').click()
    }

    modalContentShouldBe(expectedMessage) {
        cy.get('div[class="swal2-html-container"]')
            .should('have.text', expectedMessage )
    }

    alertMessageShouldBe(expectedMessage) {
        //validar CPF inválido
        cy.get('.alert-error').should('have.text', expectedMessage)
    }

}

export default SignupPage;


