const readlineSync = require('readline-sync');

function disp(arr){                            
  let avg = 0, disp = 0;
  
  for( let i = 0; i < arr.length; i++ )
  {
     avg += arr[i];
  }
  avg /= arr.length;
  
  for( i = 0; i < arr.length; i++ )
  {
    disp += ( arr[i] - avg ) * ( arr[i] - avg );
  }
  disp /= ( arr.length - 1 );

return disp;
}

function interface (){
  let arr1 = readlineSync.question(`Enter mas(using spaces): `);
  let arr = arr1.split(' ').map(Number);
  console.log(`Disp: ${disp(arr)}`);
}

interface ();