let gameBoard = require('../gameboard');
let ship = require('../ship');

let board = gameBoard();
let battleship = ship(1, 2);

test('add ship', () => {
    board.addShip(battleship,[0,0],'vertical');
    expect(board.board[0][0]).toEqual(1);
    expect(board.board[0][0]).toEqual(1);
});

test('receive attack', () => {
    expect(board.receiveAttack(0,0)).toBeFalsy();
});

test('missed shots', () => {
    
    expect(board.receiveAttack(7,7)).toBeTruthy();
});

test('all ships have been sunk', () => {
    expect(board.areAllShipsSunk()).toBeFalsy();
});