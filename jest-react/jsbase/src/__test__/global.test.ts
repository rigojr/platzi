const text :string = "Hola Mundo";
const testArray :string[] = ["Banana", "Manzana", "Pera"];

test('Debe contener un texto', () => {
    expect(text).toMatch(/Mundo/);
})

test("Tenemos bananas ?", () => {
    expect(testArray).toContain("Banana")
})

test("Mayor", () => {
    expect(10).toBeGreaterThan(9)
})

test("boolean", () => {
    expect(true).toBeTruthy()
})

const reverString = ( str :string, callback :any ) :void => {
    callback( str.split("").reverse().join("") )
}

test("Probando un Callback", () => {
    reverString( "Rigo", (strReversed :string) => {
        expect(strReversed).toBe("ogiR")
    } )
})

const reverseString2 = ( str :string ) => {
    return new Promise( (resolve, reject) => {
        if (!str)
            reject(Error('String Vacio'))
        resolve( str.split("").reverse().join("") )
    })
}

test('Probando una promesa', () => {
    reverseString2("Rigo")
        .then( str => {
            expect(str).toBe("ogiR")
        })
})

test(' asycn/await ', async() => {
    const result = await reverseString2("Rigo");
    expect(result).toBe('ogiR');
})

// afterEach( () => {
//     console.log("After Each")
// })

// afterAll( () => {
//     console.log("After All")
// } )

// beforeEach( () => {
//     console.log("Before Each")
// } )

// beforeAll( () => {
//     console.log("Before All")
// })