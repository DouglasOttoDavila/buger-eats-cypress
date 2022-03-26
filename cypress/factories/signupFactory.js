//https://www.npmjs.com/package/@faker-js/faker
const { faker }  = require('@faker-js/faker');

//https://www.npmjs.com/package/gerador-validador-cpf
const cpf = require('gerador-validador-cpf');

export default {
    deliver: function() {

        var firstName = faker.name.firstName();
        var lastName = faker.name.lastName();
        
        var data = {
            
            name: `${firstName} ${lastName}`,
            //name: 'Douglas Davila',

            cpf: cpf.generate(),
            //cpf: '10797521022',

            email: faker.internet.email(firstName),
            //email: 'davila@gmail.com',
            whatsapp: '51000000000',
            address: {
                postal_code: '91180590',
                address: 'Rua General Telino Chagastelles',
                address_number: '1000',
                address_details: 'Ap 666',
                district: 'Parque Santa Fé',
                city: 'Porto Alegre/RS'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg',
            expectedMessage: null,
            alert: null
        }

        return data
    }
}