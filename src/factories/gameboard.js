let ship = require('./ship');

function gameBoard() {
    let board = Array(10).fill().map(() => Array(10).fill(0));
    let ships = [];
    let missedShot = true;

    let addShip = (ship,coord,direction) => {
        if(direction === 'horizontal' && board[coord[0]]) {
            for(let i = 0; i < ship.length;i++) {
                board[coord[0]][coord[1]+i] = ship.id;
            }
        } else if (direction === 'vertical') {
            for(let i = 0; i < ship.length;i++) {
                board[coord[0]+i][coord[1]] = ship.id;
            }
        }
        ships.push(ship);
    };

    let receiveAttack = (coord) => {
        if(board[coord[0]][coord[1]] !== 0) {
            let id = board[coord[0]][coord[1]];
            ships[id-1].numHits++;
            this.missedShot = false;
        } else {
            this.missedShot = true;
        }
        board[coord[0]][coord[1]] = (missedShot === false) ? 'X' : '-';
        return this.missedShot;
    }

    let areAllShipsSunk = () => {
        for(let i = 0; i < ship.length;i++) {
            if(ships[i].numHits !== ships[i].length)
                return false;
        }
        return true;
    };

    return {board,addShip,receiveAttack,areAllShipsSunk}
}

module.exports = gameBoard;