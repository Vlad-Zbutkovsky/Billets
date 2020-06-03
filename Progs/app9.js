const readlineSync = require('readline-sync');

function Similar(arr){
  let flag = 0;
  let found = 0;                            
 
  for (let i = 0; i < arr.length; i++) {        
   
    for (let j = 0; j < arr.length; j++) {
        
        if (arr[i] == arr[j] && i != j) {
            arr.splice(i,1);
        }
    }
  }  
return arr;
}

function interface (){
  let arr1 = readlineSync.question(`Enter mas(using spaces): `);
  let arr = arr1.split(' ').map(Number);
  console.log(`Answer: ${Similar(arr)}`);
}

interface ();