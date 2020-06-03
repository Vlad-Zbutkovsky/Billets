const readlineSync = require('readline-sync');
function Mat (A) {
    let N = A.length, B = [], denom = 1, exchanges = 0;
    for (let i = 0; i < N; ++i)
     { B[ i ] = [];
       for (let j = 0; j < N; ++j) B[ i ][j] = A[ i ][j];
     }
    for (let i = 0; i < N-1; ++i)
     { let maxN = i, maxValue = Math.abs(B[ i ][ i ]);
       for (let j = i+1; j < N; ++j)
        { let value = Math.abs(B[j][ i ]);
          if (value > maxValue){ maxN = j; maxValue = value; }
        }
       if (maxN > i)
        { let temp = B[ i ]; B[ i ] = B[maxN]; B[maxN] = temp;
          ++exchanges;
        }
       else { if (maxValue == 0) return maxValue; }
       let value1 = B[ i ][ i ];
       for (let j = i+1; j < N; ++j)
        { let value2 = B[j][ i ];
          B[j][ i ] = 0;
          for (let k = i+1; k < N; ++k) B[j][k] = (B[j][k]*value1-B[ i ][k]*value2)/denom;
        }
       denom = value1;
     }
    if (exchanges%2) return -B[N-1][N-1];
    else return B[N-1][N-1];
}
function matrixArray(rows,columns){
  let arr = new Array();
  for(let i=0; i<rows; i++){
    arr[i] = new Array();
    for(let j=0; j<columns; j++){
      arr[i][j] = Math.floor(Math.random() * Math.floor(100));
    }
  }
  return arr;
}
function interface (){
    let A = matrixArray(3,3);
    console.log(`Matrix: ${A}`);
    console.log(`Answer: ${Mat(A)}`);
}
interface ();