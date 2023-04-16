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

let addBtn = document.querySelector('.add');
addBtn.addEventListener('click', () => {
    let ship1 = ship(1,2);
    game.boards[0].addShip(ship1,[2,2], "vertical");
    console.log(game.boards)
});

let cellBtnList = document.querySelectorAll('.cell');
    cellBtnList.forEach(cell => {
        cell.addEventListener('mouseover', cover);
        cell.addEventListener('mouseout', uncover);
        cell.addEventListener('click', addship);
    });

function cover(e) {
    let column = Number(e.target.attributes[1].value);
    let row = Number(e.target.attributes[2].value);

    let colList = document.querySelectorAll(`[data-x=\"${column}\"]`);
    let rowList = document.querySelectorAll(`[data-y=\"${row}\"]`);

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

    let colList = document.querySelectorAll(`[data-x=\"${column}\"]`);
    let rowList = document.querySelectorAll(`[data-y=\"${row}\"]`);

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

    let colList = document.querySelectorAll(`[data-x=\"${column}\"]`);
    let rowList = document.querySelectorAll(`[data-y=\"${row}\"]`);

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
        cellBtnList.forEach(cell => {
            cell.removeEventListener('mouseover', cover);
            cell.removeEventListener('mouseout', uncover);
            cell.removeEventListener('click', addship);

            cell.addEventListener('click', makeMove);
        });
    }
}

function makeMove(e) {
    let column = Number(e.target.attributes[1].value);
    let row = Number(e.target.attributes[2].value);
}