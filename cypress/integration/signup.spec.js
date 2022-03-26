//importa a classe de signup
import signup from '../pages/SignupPage'

//importa o módulo signupFactory
import signupFactory from '../factories/signupFactory'

//substituído pela importação da classe já instanciada
//import SignupPage from '../pages/SignupPage'

describe('Signup', () => {

    //substituído pela importação da classe já instanciada
    //var signup = new SignupPage();

    /*
    before(function() {
        cy.log('Tudo aqui é executado uma única vez ANTES de TODOS os casos de teste.')
    })

    beforeEach(function() {
        cy.log('Tudo aqui é executado sempre ANTES de CADA os casos de teste.')
    })

    after(function() {
        cy.log('Tudo aqui é executado uma única vez DEPOIS de TODOS os casos de teste.')
    })

    afterEach(function() {
        cy.log('Tudo aqui é executado sempre DEPOIS de CADA os casos de teste.')
    })*/

    //substituído na importação do módulo signupFactory
    /* beforeEach(function () {
        cy.fixture('delivery.json').then((d) => {
            this.delivery = d
        })
    }) */

    it('User should be a deliveryman', function () {

        //instancia a camada signupFactory.deliver
        var deliver = signupFactory.deliver()
        deliver.expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'

        //movido para o describe no início
        //var signup = new SignupPage();

        signup.go()

        signup.fillForm(deliver)

        //camada de testes substituída pelo modulo signupFactory
        //signup.fillForm(this.delivery.signup)

        signup.submit()

        //substituído pelo objeto delivery.expectedMessage
        /* 
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.';
        */

        signup.modalContentShouldBe(deliver.expectedMessage)

    })

    it('Invalid CPF', function () {

        var deliver = signupFactory.deliver()
        deliver.cpf = '00000000000'
        deliver.alert = 'Oops! CPF inválido'

        //movido para o describe no início
        //var signup = new SignupPage();

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe(deliver.alert)

    })

    it('Invalid Email', function () {

            var deliver = signupFactory.deliver()
            deliver.email = 'douglasdavila.com'
            deliver.alert = 'Oops! Email com formato inválido.'

            //movido para o describe no início
            //var signup = new SignupPage();

            signup.go()
            signup.fillForm(deliver)
            signup.submit()
            signup.alertMessageShouldBe(deliver.alert)

        }),

        /* context('Required fields', function () {
            const messages = [{
                    field: 'name',
                    output: 'É necessário informar o nome'
                },
                {
                    field: 'cpf',
                    output: 'É necessário informar o CPF'
                },
                {
                    field: 'email',
                    output: 'É necessário informar o e-mail'
                },
                {
                    field: 'postalcode',
                    output: 'É necessário informar o CEP'
                },
                {
                    field: 'number',
                    output: 'É necessário informar o número do endereço'
                },
                {
                    field: 'delivery_method',
                    output: 'Selecione o método de entrega'
                },
                {
                    field: 'cnh',
                    output: 'Adicione uma foto da sua CNH'
                },
            ]

            before(function() {
                signup.go()
                signup.submit() 
            })

            messages.forEach(function(msg){
                it(`${msg.field} is required`, function(){
                    signup.alertMessageShouldBe(msg.output)
                })
            })
        }) */
    
    
    it('Required Fields', function () {

        var deliver = signupFactory.deliver()
        deliver.email = 'douglasdavila.com'
        deliver.alert = 'Oops! Email com formato inválido.'

        //movido para o describe no início
        //var signup = new SignupPage();

        signup.go()
        signup.submit()

        signup.alertArrayMessageShouldBe(1, 'É necessário informar o nome')
        signup.alertArrayMessageShouldBe(2, 'É necessário informar o CPF')
        signup.alertArrayMessageShouldBe(3, 'É necessário informar o email')
        signup.alertArrayMessageShouldBe(4, 'É necessário informar o CEP')
        signup.alertArrayMessageShouldBe(5, 'É necessário informar o número do endereço')
        signup.alertArrayMessageShouldBe(6, 'Selecione o método de entrega')
        signup.alertArrayMessageShouldBe(7, 'Adicione uma foto da sua CNH')
    })
})