const readlineSync = require('readline-sync');
function answ (a,b,c) {
  if (a+b < c || a+c < b || c+b < a){
    console.log(`Wrong data`);
  }else if(Math.sqrt(a) + Math.sqrt(b) === Math.sqrt(c) || Math.sqrt(a)+Math.sqrt(c) === Math.sqrt(b) || Math.sqrt(c)+Math.sqrt(b) === Math.sqrt(a)){
    console.log(`Трикутний`);
  }else if(Math.sqrt(a) + Math.sqrt(b) > Math.sqrt(c) || Math.sqrt(a)+Math.sqrt(c) > Math.sqrt(b) || Math.sqrt(c)+Math.sqrt(b) > Math.sqrt(a)){
    console.log(`Гострокутний`);
  }else if(Math.sqrt(a) + Math.sqrt(b) < Math.sqrt(c) || Math.sqrt(a)+Math.sqrt(c) < Math.sqrt(b) || Math.sqrt(c)+Math.sqrt(b) < Math.sqrt(a)){
    console.log(`Тупокутний`);
  }

}
function interface (){
    let a = parseInt(readlineSync.question(`Enter length a: `));
    let b = parseInt(readlineSync.question(`Enter length b: `));
    let c = parseInt(readlineSync.question(`Enter length c: `));
    answ(a,b,c);
}
interface ();