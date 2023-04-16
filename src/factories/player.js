let gameboard = require('./gameboard');

function player(name) {
    let pastMoves = [];

    let makeRandomMove = () => {
        let row = Math.floor(Math.random() * 10);
        let column = Math.floor(Math.random() * 10);

        //while(noRepeat(row, column) !== true) {
        //    makeRandomMove();
        //}
        //pastMoves.push([row,column]);
        return [row,column];
    }

    let makeMove = (row, column) => {
        if(noRepeat(row, column) === true) {
            pastMoves.push([row,column]);
            return true;
        } else
        return false;
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