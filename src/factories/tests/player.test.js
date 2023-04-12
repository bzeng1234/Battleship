let player = require('../player');
let gameBoard = require('../gameboard');
let ship = require('../ship');

let ai;
let game;
let battleship;
beforeEach(() => {
    ai = player('ai');
    game = gameBoard();
    battleship = ship(1, 3);
});

test('make ai player', () => {
    expect(ai.name).toEqual('ai');
});

test('ai make a move', ()=> {
    game.addShip(battleship, [0,0], 'vertical');
    expect(ai.makeRandomMove(game)).toBeInstanceOf(Array);
});

test('repeate move twice', () => {
    ai.makeMove(0,0);
    expect(ai.pastMoves.length).toEqual(1);
    ai.makeMove(0,0);
    expect(ai.pastMoves.length).toEqual(1);
});