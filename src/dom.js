import main from './factories/main';
import ship from './factories/ship';
import './styles.css'

let game = main();
game.initialize("Brandon");

let directionValue = "vertical";
let shipSize = [5,4,3,2,1];

let directionBtn = document.querySelector('.direction');
directionBtn.addEventListener('click', () => {
    if(directionBtn.value === "vertical") {
        directionBtn.value = "horizontal";
        directionBtn.textContent = "Horizontal";
        directionValue = directionBtn.value;
    } else {
        directionBtn.value = "vertical";
        directionBtn.textContent = "Vertical";
        directionValue = directionBtn.value;
    }
});

let gameStatusElem = document.querySelector('.game-status');

let cellBtnList = document.querySelectorAll('.player-gameboard > .cell');
    cellBtnList.forEach(cell => {
        cell.addEventListener('mouseover', cover);
        cell.addEventListener('mouseout', uncover);
        cell.addEventListener('click', addship);
    });
let oppCellBtnList = document.querySelectorAll('.ai-gameboard > .cell');

function cover(e) {
    let column = Number(e.target.attributes[1].value);
    let row = Number(e.target.attributes[2].value);

    let colList = document.querySelectorAll(`.player-gameboard > .cell[data-x=\"${column}\"]`);
    let rowList = document.querySelectorAll(`.player-gameboard > .cell[data-y=\"${row}\"]`);

    if(directionValue === "vertical") {
        if(rowList.length - row >= shipSize[0]) {
            let shipsize = shipSize[0];
            for(let i = row;i < shipsize + row;i++) {
                if(colList[i].getAttribute('id') === 'ship')
                    return
            }
            for(let i = row;i < shipsize + row;i++) {
                if(colList[i].getAttribute('id') !== 'ship')
                    colList[i].style.background = "blue";
            }
        } else {
            for(let i = row;i < colList.length;i++) {
                if(colList[i].getAttribute('id') !== 'ship')
                    colList[i].style.background = "red";
            }
        }
    } else if(directionValue === "horizontal") {
        if(colList.length - column >= shipSize[0]) {
            let shipsize = shipSize[0];
            for(let i = column;i < shipsize + column;i++) {
                if(rowList[i].getAttribute('id') === 'ship')
                    return
            }
            for(let i = column;i < shipsize + column;i++) {
                if(rowList[i].getAttribute('id') !== 'ship')
                    rowList[i].style.background = "blue";
            }
        } else {
            for(let i = column;i < rowList.length;i++) {
                if(rowList[i].getAttribute('id') !== 'ship')
                rowList[i].style.background = "red";
            }
        }
    }
}

function uncover(e) {
    let column = Number(e.target.attributes[1].value);
    let row = Number(e.target.attributes[2].value);

    let colList = document.querySelectorAll(`.player-gameboard > .cell[data-x=\"${column}\"]`);
    let rowList = document.querySelectorAll(`.player-gameboard > .cell[data-y=\"${row}\"]`);

    if(directionValue === "vertical") {
        for(let i = row;i < colList.length;i++) {
            if(colList[i].getAttribute('id') !== 'ship')
                colList[i].style.background = "white";
        }
    } else if(directionValue === "horizontal") {
        for(let i = column;i < rowList.length;i++) {
            if(rowList[i].getAttribute('id') !== 'ship')
                rowList[i].style.background = "white";
        }
    }
}

function addship(e) {
    let column = Number(e.target.attributes[1].value);
    let row = Number(e.target.attributes[2].value);

    let colList = document.querySelectorAll(`.player-gameboard > .cell[data-x=\"${column}\"]`);
    let rowList = document.querySelectorAll(`.player-gameboard > .cell[data-y=\"${row}\"]`);

    if(directionValue === "vertical") {
        if(rowList.length - row >= shipSize[0]) {
            for(let i = row;i < shipSize[0] + row;i++) {
                if(colList[i].getAttribute('id') === 'ship')
                    return
            }
            let shipsize = shipSize.shift();
            for(let i = row;i < row + shipsize;i++) {
                colList[i].setAttribute('id', 'ship');
                colList[i].style.background = "green";
            }
            let currShip = ship(shipsize, shipsize);
            game.boards[0].addShip(currShip,[row,column], directionValue);
        }
    } else if(directionValue === "horizontal") {
        if(colList.length - column >= shipSize[0]) {
            for(let i = column;i < shipSize[0] + column;i++) {
                if(rowList[i].getAttribute('id') === 'ship')
                    return
            }
            let shipsize = shipSize.shift();
            for(let i = column;i < column + shipsize;i++) {
                rowList[i].setAttribute('id', 'ship');
                rowList[i].style.background = "green";
            }
            let currShip = ship(shipsize, shipsize);
            game.boards[0].addShip(currShip,[row,column], directionValue);
        }
    }

    if(shipSize.length === 0) {
        console.log(game.boards[0].board);
        console.log(game.boards[1].board);
        cellBtnList.forEach(cell => {
            cell.removeEventListener('mouseover', cover);
            cell.removeEventListener('mouseout', uncover);
            cell.removeEventListener('click', addship);
        });
        gameStatusElem.textContent = "Play Game!";
        oppCellBtnList.forEach(cell => {
            cell.addEventListener('click', makeMove);
        })
    }
}

function makeMove(e) {
    let column = Number(e.target.attributes[1].value);
    let row = Number(e.target.attributes[2].value);

    if(game.players[0].makeMove(row, column)) {
        //we hit
        if(game.boards[1].receiveAttack(row, column) === false) {
            e.target.style.background = "red";
            gameStatusElem.textContent = "Hit!"
        } else {
            e.target.style.background  = "#71717a";
            gameStatusElem.textContent = "Missed!"
        }
        
        if(game.boards[1].areAllShipsSunk() === true) {
            gameStatusElem.textContent = "You Won!";
        }

        let aiMove = game.players[1].makeRandomMove();
        let cellElem = document.querySelector(`.player-gameboard > .cell[data-x=\"${aiMove[1]}\"][data-y=\"${aiMove[0]}\"`)
        if(game.boards[0].receiveAttack(aiMove[0],aiMove[1]) === false) {
            cellElem.style.background = "red";
        } else {
            cellElem.style.background = "#71717a";
        }
        if(game.boards[0].areAllShipsSunk() === true) {
            gameStatusElem.textContent = "AI Won!";
        }
    }
}