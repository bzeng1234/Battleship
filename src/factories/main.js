let gameboard = require('./gameboard');
let ship = require('./ship');
let player = require('./player');

export default function main() {
    let players = [];
    let boards = [];

    let initialize = (playerName) => {
        players.push(player(playerName));
        boards.push(gameboard());
        players.push(player("AI"));
        boards.push(gameboard());
    }

    



    return {players, boards, initialize};
}