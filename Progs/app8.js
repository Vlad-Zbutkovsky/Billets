const readlineSync = require('readline-sync');

function bubbleSort(arr){                            
    for (let i = 0, l = arr.length, k = l - 1; i < k; i++) {
        let indexMin = i;
        for (let j = i + 1; j < l; j++) {
            if (arr[indexMin] > arr[j]) {
                indexMin = j;
            }
        }
        if (indexMin !== i) {
            [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
        }
    }
    return arr;
}

function interface (){
  let arr1 = readlineSync.question(`Enter mas(using spaces): `);
  let arr = arr1.split(' ').map(Number);
  console.log(`Sorted mas: ${bubbleSort(arr)}`);
}

interface ();