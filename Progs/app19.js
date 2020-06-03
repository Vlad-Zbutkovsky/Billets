const readlineSync = require('readline-sync');
function mth (n,dist) {
    let b = Math.asin(n)
    return b.toFixed(dist);
}
function interface (){
    let n = readlineSync.question(`Enter number: `);
    let dist = readlineSync.question(`How many numbers after ",": `);
    console.log(`Your number: ${mth(n,dist)}`);
}
interface ();