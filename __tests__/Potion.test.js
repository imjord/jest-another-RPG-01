const { TestWatcher } = require('jest');
const Potion = require('../lib/Potion.js');


// creating a test to make sure that a potion object holds a NAME and a VALUE 

test('creates a health potion object', () => {
    const potion = new Potion('health'); // creates a new POTION OBJECT
    // WHEN WE CREATE A NEW POTION IT WILL TAKE A STRING WE PASS IN AND ASSIN TO POTION NAME
    expect(potion.name).toBe('health'); // HAVE  A NAME PROPERTY IN OBJECT THAT IS TO BE HEALTH 
    expect(potion.value).toEqual(expect.any(Number)); // AND A VALUE PROPERTIES THAT IS A NUMBER OF SOME KIND 
    //                          EXPECT.ANY TAKES IN A CONSTRUCTOR WITH THE NAME NUMBER as its argument 
})