const { TestWatcher } = require('jest');
const Player = require('../lib/Player');
const Potion = require('../lib/Potion');

jest.mock('../lib/Potion');



console.log(new Potion())

test('creates a player object', () => {
    const player = new Player('Dave');
    // creates a new player object 
    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));

    // test for player inventory using mocked potions 
    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
    );
})

test('gets players stats as an object', () => {
    const player = new Player('Dave');

        // gets the getstats method properties 
    expect(player.getStats()).toHaveProperty('potions');
    expect(player.getStats()).toHaveProperty('health');
    expect(player.getStats()).toHaveProperty('strength');
    expect(player.getStats()).toHaveProperty('agility');

    // checking getstats method returns an object with four specific properties 

});


test('gets inventory from player or returns false', () => {
    const player = new Player('Dave');

    expect(player.getInventory()).toEqual(expect.any(Array));
    // call to player inventory should return an empty  array at start  
    player.inventory = [];
    expect(player.getInventory()).toEqual(false);
})
