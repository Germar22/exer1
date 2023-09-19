function displaySum() { 
   let firstNum = Number(document.getElementById('firstNum').innerHTML) 
   let secondNum = Number(document.getElementById('secondNum').innerHTML) 
  
   let total = firstNum + secondNum; 
   document.getElementById("answer").innerHTML = ` ${firstNum} + ${secondNum}, equals to ${total}` ; 
 } 
  
 document.getElementById('sumButton').addEventListener("click", displaySum); 
  
function displaydif() { 
   let firstNum = Number(document.getElementById('firstNum').innerHTML) 
   let secondNum = Number(document.getElementById('secondNum').innerHTML) 
  
   let total = firstNum - secondNum; 
   document.getElementById("answer2").innerHTML = ` ${firstNum} - ${secondNum}, equals to ${total}` ; 
 } 
  
 document.getElementById('difButton').addEventListener("click", displaydif);

function displayprd() { 
   let firstNum = Number(document.getElementById('firstNum').innerHTML) 
   let secondNum = Number(document.getElementById('secondNum').innerHTML) 
 
   let total = firstNum * secondNum; 
   document.getElementById("answer3").innerHTML = ` ${firstNum} * ${secondNum}, equals to ${total}` ; 
} 
 
document.getElementById('prdButton').addEventListener("click", displayprd);

function displayquo() { 
  let firstNum = Number(document.getElementById('firstNum').innerHTML) 
  let secondNum = Number(document.getElementById('secondNum').innerHTML) 

  let total = firstNum / secondNum; 
  document.getElementById("answer4").innerHTML = ` ${firstNum} / ${secondNum}, equals to ${total}` ; 
} 

document.getElementById('quoButton').addEventListener("click", displayquo);
