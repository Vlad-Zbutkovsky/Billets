const readlineSync = require('readline-sync');
function NSK (n,k) {
  (n>k)?b=n:b=k;
  for(b;;b--){
    if( n % b === 0 && k % b === 0) return b;
  }  
}
function interface (){
    let n = readlineSync.question(`Enter first number: `);
    let k = readlineSync.question(`Enter second number: `);
    let answ = 0;
    answ = NSK(n,k);
    console.log(`Your number: ${answ}`);
}
interface ();