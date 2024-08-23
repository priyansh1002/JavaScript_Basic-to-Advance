
/* objects */
const user={
    username: "priyansh",
    price: 999,

    welcomeMessage: function(){  // "this" keyword is used to run the current context, this is user only in object
        console.log(`${this.username} , welcome to website`);
    }
}

/* functions */

user.welcomeMessage();

function chai(){   //"this" keyword id not used in function it will give undefined
    let username= "priyansh";
    console.log(this.username); //undefined will come
}

chai();


const add =(num1,num2)=>{  //a simple arrow function
   return num1+num2;      // this is a explicit arrow function
}

console.log(add(2,3));

const sub=(num1,num2)=> (num2-num1) //this is a implicite arrow function

console.log(sub(2,3));