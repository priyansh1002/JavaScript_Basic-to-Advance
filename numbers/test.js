const bal= new Number(100);

console.log(bal.toString().length);  //conversion to string
console.log(bal.toFixed(1)); // to precise the value 

const number=123.899;
console.log(number.toPrecision(3)); // to precise the value from start it will take

const num2=1000000;
console.log(num2.toLocaleString('en-IN')); // fro dividing the number accordingly eg. 10,00,000

 //+++++++++++++++++ MATH +++++++++++++++++++++++

 console.log(Math.random());
 console.log(Math.floor(Math.random()*10) + 1);