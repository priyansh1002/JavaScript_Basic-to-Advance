const arr=[1,2,3,4,5];

for (const num of arr) {  // for of loop
    console.log(num);
}

// Maps

const map=new Map();  // maps only take unique values and put everything in order as you have given the data
map.set('IN', "India"); //map is not iterable
map.set('FR', "France");

console.log(map);

//putting maps in array

for(const [key, value] of map){
    console.log(key, value);
}

// objects loop

const myObject={
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    go: "golang"

}
// for in loop
for(const key in myObject){
    console.log(key); // for keys
    console.log(myObject[key]);// for values of the key
}


//for each loop

const coding=["js", "ruby", "java", "python", "cpp"];

coding.forEach((val , index, arr)=>{  // callback functio in for each loop
  console.log(val , index, arr);
})


const myCoding=[
    {
         languageName: "Javascript",
         languageFileName: "js"
    },
    {
         languageName: "Java",
         languageFileName: "java"
    },
    {
        languageName: "pyhton",
        languageFileName: "py"
    }
]

myCoding.forEach((val)=>{
   console.log(val.languageName);
})


