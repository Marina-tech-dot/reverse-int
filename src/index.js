module.exports = function reverse (n) {
    
    (typeof n === 'number') ? n = n.toFixed() : 0;

    let numReverse = n.split("").reverse().join("");

    let numReverseCut = numReverse.slice(0, -1);

    return (numReverse[numReverse.length - 1] === "-") ? numReverseCut : numReverse;
}
