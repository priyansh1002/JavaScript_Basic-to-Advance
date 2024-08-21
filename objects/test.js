//singleton //Object.create : constructor method in which singleton is made

//object literals  // no singleton is made

const jsUser={
    name:"priyansh",
    age: 22,
    location: "jaipur",
    email: "mmm@google.com",
    isLoggedIn: false,
    lastLogin:["Monday", "Saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]); // both are used to access the objects

jsUser.email="ppp@microsoft.com";// changed the value of email
console.log(jsUser["email"]);

Object.freeze(jsUser); // used to freeze the object so that we can not change the value
jsUser.email="kkk@gmail.com";
console.log(jsUser);

jsUser.greetings=function(){
    console.log(`hello js user , ${this.name}`); // "this" function is used to access all the elements in the objects
}

console.log(jsUser.greetings());


