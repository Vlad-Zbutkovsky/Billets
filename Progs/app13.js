const readlineSync = require('readline-sync');

function bubbleSort(arr){                            
    for (let i = 0, endI = arr.length - 1; i < endI; i++) {
        let wasSwap = false;
        for (let j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                wasSwap = true;
            }
        }
        if (!wasSwap) break;
    }
    return arr;
}

function Mediana(arr){
  if(!arr.length % 2 === 0){
    return arr[Math.ceil(arr.length/2) -1];
  }else{
    let answ = Math.ceil((arr[arr.length/2] + arr[(arr.length/2)+1])/2);
    return (answ);
  }
}

function interface (){
  let arr1 = readlineSync.question(`Enter mas(using spaces): `);
  let arr = arr1.split(' ').map(Number);
  arr = bubbleSort(arr);
  console.log(`Answer: ${Mediana(arr)}`);
}

interface ();