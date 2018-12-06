let arr = [];
function createArr(n){
  
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * 100) + 1);
      }
      return arr;
 }


function myFunction(){
let n = document.getElementById('numb').value;
let text;
//let myArr = createArr(n);
 if (n % 1 === 0 && n > 0) {
  //createArr(n);
  text = "this is your array " + createArr(n);
     } else {
     let n = prompt("It is not a valid number, try again, please");
     if (n % 1 === 0 && n > 0) {
        //createArr(n);
        text = "this is your array " +  createArr(n);
     } else {
       text = "end of the game"
     }
    }
    document.getElementById("display-array").innerHTML = text;
} 







//max
function checkMax(arr){
  let max = arr[0];
  let text;
  for ( let i = 0; i < arr.length; i++) {
    if(arr[i] > max) {
    max = arr[i];
    }
  } 
  //return max;
  document.getElementById("max-min-av").innerHTML = max;
}
 

//min
function checkMin(arr){ 
let min = arr[0];
  for ( let i = 0; i < arr.length; i++) {
    if( arr[i] < min) {
    min = arr[i];
    }
  } 
    //return min;
    document.getElementById("max-min-av").innerHTML = min;
}


  //media
  function findMedia(arr){
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i] / arr.length;
   }
   //return total;
   document.getElementById("max-min-av").innerHTML = total;
  }
