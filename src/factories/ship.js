function ship(id,length) {
    let numHits = 0;
    let sunk = false;
    let hit = () => numHits++;
    let isSunk = () => (numHits === length) ? true : false;
    return {id,length,numHits,hit,isSunk};
}

module.exports = ship;