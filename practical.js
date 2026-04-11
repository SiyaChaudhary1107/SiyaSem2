function calculateSum(){

let n = document.getElementById("num").value;

let sum = 0;

for(let i = 1; i <= n; i++){

if(i % 2 == 0){

sum += i;

}

}

document.getElementById("result").innerHTML =
"Sum of even numbers = " + sum;

}