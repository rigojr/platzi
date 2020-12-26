const random = require('../index');

describe( 'Probando varias funcionalidades', () => {

    test("Probando funcionalidad", () => {
        expect( typeof (random())).toBe('string')
    })

    test("Probando que no existe", () => {
        expect( random() ).not.toMatch("Bolivar")
    })
    
} )