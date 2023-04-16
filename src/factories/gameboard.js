let ship = require('./ship');

function gameboard() {
    let board = Array(10).fill().map(() => Array(10).fill(0));
    let ships = [];
    let missedShot = true;

    let addShip = (ship,coord,direction) => {
        if(direction === 'horizontal') {
            for(let i = coord[1]; i < ship.length + coord[1];i++) {
                board[coord[0]][i] = ship.id;
            }
        } else if (direction === 'vertical') {
            for(let i = coord[0];i < ship.length + coord[0];i++) {
                board[i][coord[1]] = ship.id;
            }
        }
        ships.push(ship);
    };

    let receiveAttack = (row,column) => {
        if(board[row][column] !== 0 && board[row][column] !== 'X' && board[row][column] !== '-') {
            let id = board[row][column];
            ships[ships.length-id].numHits++;
            missedShot = false;
        } else {
            missedShot = true;
        }
        board[row][column] = (missedShot === false) ? 'X' : '-';
        return missedShot;
    }

    let areAllShipsSunk = () => {
        for(let i = 0; i < ship.length;i++) {
            if(ships[i].numHits !== ships[i].length)
                return false;
        }
        return true;
    };

    let autoPlaceShips = () => {
        let shipSize = 5;
        while(shipSize > 0) {
            let directionValue = Math.floor(Math.random()*2);
            let row = Math.floor(Math.random() * board.length);
            let column = Math.floor(Math.random() * board.length);

            if(directionValue === 1) {
                //check if there adqueate space for placement
                if(board.length - row >= shipSize && checkIfOccupied(row, column, shipSize, directionValue)) {
                    //we place ship on board
                    let currShip = ship(shipSize, shipSize);
                    addShip(currShip,[row,column], "vertical");
                    shipSize--;
                }
            } else if(directionValue === 0) {
                if(board[0].length - column >= shipSize && checkIfOccupied(row, column, shipSize, directionValue)) {
                    //we place ship on board
                    let currShip = ship(shipSize, shipSize);
                    addShip(currShip,[row,column], "horizontal");
                    shipSize--;
                }
            }
        }
    };
    
    let checkIfOccupied = (row, column, shipSize, directionValue) => {
        if(directionValue === 1) {
            for(let i = row;i < shipSize + row;i++) {
                if(board[i][column] !== 0)
                return false;
            }
            return true;
        } else {
            for(let i = column;i < shipSize + column;i++) {
                //check if all the spaces are not occupied by a ship already
                //if it is, return 0 and loop again
                if(board[row][i] !== 0)
                    return false;
            }
            return true;
        }
    }

    return {board,addShip,receiveAttack,areAllShipsSunk,autoPlaceShips}
}

module.exports = gameboard;