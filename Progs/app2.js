const readlineSync = require('readline-sync');

function Prime(value) {
  if (value > 2) {
    let i, q;
    do {
        i = 3;
        value += 2;
        q = Math.floor(Math.sqrt(value));
        while (i <= q && value % i) {
            i += 2;
        }
    } while (i <= q);
    return value;
}
return value === 2 ? 3 : 2;
}

function interface (){
    let n = readlineSync.question(`Enter position: `);
    let answ = 0;
    for (var i = 0; i < n; i++) {  
      answ = Prime(answ);
    }
        
    console.log(`Your number: ${answ}`);
}
interface ();