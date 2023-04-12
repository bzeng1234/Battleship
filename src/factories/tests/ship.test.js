let ship = require('../ship');

let battleship;

beforeEach(() => {
    battleship = ship(1, 1);
});

test('ship id', () => {
    expect(battleship.id).toEqual(1);
});

test('ship size', () => {
    expect(battleship.length).toEqual(1);
});

test('sunk test', () => {
    battleship.hit();
    expect(battleship.isSunk()).not.toBeFalsy();
});