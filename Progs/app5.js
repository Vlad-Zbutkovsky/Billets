const readlineSync = require('readline-sync');

function primality(n) {
  for(let i = 2; i < n; i++) {
     if(n % i === 0) return false;
  }
  return n > 1;
 }

function interface (){
  let n = readlineSync.question(`Enter number: `);
  if(!primality(n)){
    let answ = [];
    let div = 2;
    while (n > 1){
      while (n % div == 0){
        answ.push(div);
        n = n / div;
        }
      div++;
      }
    console.log(`Answer: ${answ}`);
  }else{
    console.log(`It's prime number.`);
  }
}
interface ();