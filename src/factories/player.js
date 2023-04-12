let gameboard = require('./gameboard');

function player(name) {
    let pastMoves = [];

    let makeRandomMove = (gameboard) => {
        let row = Math.floor(Math.random() * gameboard.board.length);
        let column = Math.floor(Math.random() * gameboard.board.length);

        while(noRepeat(row, column) !== true) {
            makeRandomMove(gameboard);
        }
        pastMoves.push([row,column]);
        return [row,column];
    }

    let makeMove = (row, column, gameboard) => {
        if(noRepeat(row, column) === true) {
            pastMoves.push([row,column]);
            return [row,column];
        }
    }

    let noRepeat = (row, column) => {
        for(let i = 0; i < pastMoves.length; i++) {
            if(pastMoves[i][0] == row && pastMoves[i][1] == column) {
                return false;
            } else {
                return true;
            }
        }
        return true;
    }

    return {name, pastMoves,makeMove, makeRandomMove};
}

module.exports = player;