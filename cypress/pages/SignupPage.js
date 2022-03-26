//Arquivo possui o mesmo nome da classe, em PascalCase

class SignupPage {
    //acessa a página onde está o formulário
    go() {
        //transferido para cypress.json
        //cy.viewport(1440, 900)

        //transferido para cypress.json
        //cy.visit('https://buger-eats.vercel.app')

        cy.visit('/')

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
    }

    fillForm(delivery) {
        cy.get('input[name="fullName"]').type(delivery.name)
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
            .attachFile('/images/' + delivery.cnh)
    }

    submit() {
        cy.get('button[class="button-success"]').click()
    }

    modalContentShouldBe(expectedMessage) {
        cy.get('div[class="swal2-html-container"]')
            .should('have.text', expectedMessage)
    }

    alertArrayMessageShouldBe(pos, expectedMessage) {

        //desta forma está se adquirindo a posição de cada um dos 
        //múltiplos elementos encontrados de acordo com a posição (pos) 
        //de cada que está sendo passado no teste como parâmetro.
        cy.xpath('(//span[@class="alert-error"])[' + pos + ']')
            .should('have.text', expectedMessage)
        
        //outra solução seria:
        /*
            cy.contains('.alert-error', expectedMessage).should('be.visible')
        */
    
    
    }

    alertMessageShouldBe(expectedMessage) {

        cy.contains('.alert-error', expectedMessage)
            .should('be.visible')
        
    }

}

//exporta a classe já instanciada
export default new SignupPage;

//substituído pela exportação da classe já instanciada
//export default SignupPage;