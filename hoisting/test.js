//+++++ declaring of function 1st method
console.log(add(2));  // this is hoisting in which where variables and function declarations are moved to the top of their scope before code execution

function add(num){
    return num+1;
}




// declaring of function second method

const sub = function(num){  // no hoisting in this as in this we are storing the value in another variable
    return num-3;
}

console.log(sub(6));
