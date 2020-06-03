const readlineSync = require('readline-sync');
function fib (n) {
    let a = 1,
      b = 0;
    for (let i = 1; i <= n; i++) {
      let temp = a + b;
      a = b;
      b = temp;
    }
    return b;
}
function interface (){
    let n = readlineSync.question(`Enter position: `);
    let answ = 0;
    answ = fib(n);
    console.log(`Your number: ${answ}`);
}
interface ();