const readlineSync = require('readline-sync');
function Mat (A,B) {
    let rowsA = A.length, colsA = A[0].length,
    rowsB = B.length, colsB = B[0].length,
    C = [];
  if (colsA != rowsB) return false;
  for (let i = 0; i < rowsA; i++) C[ i ] = [];
  for (let k = 0; k < colsB; k++)
  { for (let i = 0; i < rowsA; i++)
    { let t = 0;
      for (let j = 0; j < rowsB; j++) t += A[ i ][j]*B[j][k];
      C[ i ][k] = t;
    }
  }
  return C;

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
    let n = parseInt(readlineSync.question(`Enter size of matrix: `));
    let A = matrixArray(n,n);
    let B = matrixArray(n,n);
    console.log(`First matrix: ${A}`);
    console.log(`Second matrix: ${B}`);
    console.log(`Answer: ${Mat(A,B)}`);
}
interface ();