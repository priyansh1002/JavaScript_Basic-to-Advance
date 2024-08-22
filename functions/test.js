function say(){   // how to define function
    console.log("p");
    console.log("R");
    console.log("I");
}

// say();

function sum(number1, number2){   //number1 or number2 or any other in function are called parameters
    console.log(number1+number2);
}

sum(2,4); // giving the vakues in the brackets are called arguments

function mul(number1, number2){   // return is used to give a value and after return no staements will work it is the end
    return number1*number2;
}

let ans= mul(2,3);
console.log("answer is  :" + ans);

/*+++++++++++ Logged in function ++++++++++++*/

function isLoggedIn(username){
    if(username===undefined){
        console.log("please enter a username");
        return;
    }
    return `${username} just logged in`;
}

console.log(isLoggedIn());   //if nothing is passed in the argument then Undefined comes not null



/* ++++++++++++ spread operator or Rest operator ++++++++++ */

function calculateCartprice(...num1){
   return num1;
}

console.log((calculateCartprice(100,200,300)));


/*+++ object passed ++++ */

const sir={
    name:"priyansh",
    price: "500"
};

function handleObject(anyObject){
    console.log(`user name is ${anyObject.name} and price is ${anyObject.price}`);

}

handleObject(sir);

/* ++++++ array passed ++++++ */

const arr= new Array(1,2,3,4,5);

function value(getarray){
    return getarray[3];
}
console.log(value(arr));