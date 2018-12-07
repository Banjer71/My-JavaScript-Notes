function myFunction(){
  let n = document.getElementById('numb').value;
  let text;
  let arr = [];
  for (let i = 0; i < 5; i++){
    if (n % 1 === 0 && n > 0) {
    text = "this is your array " + createArr(n);
       } else {
       n = prompt("It is not a valid number, try again, please");
       text = "End of the Game, refresh the page, if you want to play again ";
       } 
       document.getElementById("display-array").innerHTML = text;
      }
  }


  function createArr(n){
     arr = [];
      for (let i = 0; i < n; i++) {
          arr.push(Math.floor(Math.random() * 100) + 1);
        }
        return arr;
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
      document.getElementById("max-min-av").innerHTML = min;
  }
  
  
  //media
  function findMedia(arr){
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i] / arr.length;
    }
    document.getElementById("max-min-av").innerHTML = total;
  }
   