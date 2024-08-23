const score=200;  // if-else format
if(score>100){
    const power="fly";
    console.log(`user power: ${power}`);
}


const userLoggedIn=true;
const debitcard=true;

if(userLoggedIn && debitcard){
    console.log("allow to buy coarse");
}


const month=3;

switch (month) {   // switch format
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("january");
        break;

    case 3:
        console.log("january");
        break;

        default:
        console.log("wrong");
        break;
}


/* Truthy And Falsy values */

// Falsy Values :
/* false, 0, -0, BigInt 0n, null, undefined, NaN */

// Truthy Values :
/* All other than the upper are Truthy Values
"0", 'false', " ",[],{}, function(){} */


const emptyobj={};  // check if object is empty or not  

if(Object.keys(emptyobj).length === 0){
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val;
val=5??10;  //hte vaue is first it will take
val= null ?? 10 // in this 10 will be the answer as it will not take the null it will give the another answer
console.log(val);

//Nullish basic operation is to handle null or undefines  
