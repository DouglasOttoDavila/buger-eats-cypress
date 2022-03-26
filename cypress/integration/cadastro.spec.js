import SignupPage from '../pages/SignupPage'

describe('Cadastro', () => {
    
    it('User should be a delivery man', () => {
        
        //massa de teste
        var delivery = {
            name: 'Douglas Davila',
            cpf: '10797521022',
            email: 'davila@gmail.com',
            whatsapp: '51000000000',
            address: {
                postal_code: '91180590',
                address: 'Rua General Telino Chagastelles',
                address_number: '1000',
                address_details: 'Ap 666',
                district: 'Parque Santa Fé',
                city: 'Porto Alegre/RS'
            },
            delivery_method: "Moto",
            cnh: "cnh-digital.jpg"
        }

        var signup = new SignupPage();

        signup.go()
        signup.fillForm(delivery)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.';
        signup.modalContentShouldBe(expectedMessage)
   
        
    
    })

    it('CPF Incorreto', () => {

        //massa de teste
        var delivery = {
            name: 'Douglas Davila',
            cpf: '107975210AA',
            email: 'davila@gmail.com',
            whatsapp: '51000000000',
            address: {
                postal_code: '91180590',
                address: 'Rua General Telino Chagastelles',
                address_number: '1000',
                address_details: 'Ap 666',
                district: 'Parque Santa Fé',
                city: 'Porto Alegre/RS'
            },
            delivery_method: "Moto",
            cnh: "cnh-digital.jpg"

        }

        var signup = new SignupPage()

        signup.go()
        signup.fillForm(delivery)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')
        
    })
})