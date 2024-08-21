const myArr=[0,1,2,3,4,5];
const myHeros=["batman", " shaktimaan", "doga"];   //these are the declarations of arrays
const myArr2=new Array(1,2,3,4,5);


//Array Methods

myArr.push(6);
// console.log(myArr);
myArr.pop();
// console.log(myArr);
console.log(myArr.includes(9)); 

const newArr= myArr.join(); // this join is used to convert a rray into string
console.log(newArr);

 /* +++++++++++slice and splice operations++++++++++ */

 const arr= new Array(1,2,3,4,5);
 console.log("A  "+ arr);
 console.log(arr.slice(0,3)); // it gives the srray elements within the range given but does not alter the original array

 console.log(arr.splice(1,3));  // it gives the array elements but it also alters the original array it removes the elements within the range given
 console.log("B  "+ arr);

 /*+++++++++++operations+++++++++*/

 const hero= new Array("bat","ball","table");
 const hero2=new Array("A" ,"B", "C");

 const add= hero.concat(hero2); //concat is used to add both the array into one (only two array can be joined)
 console.log(add);


 /*+++++ spreading in js +++++++*/
 const allnewhero=[...hero, ...hero2];
 console.log(allnewhero);  //both spreadind and concat is same (many array can be joined)


 //using flat function
 const another_array=[1,2,[3,4,5],7,[9,9,[1,3]]];

 console.log(another_array.flat(Infinity)); // by using flat we can make all these subarray into a single array

console.log(Array.isArray("priyansh"));
console.log(Array.from("priyansh")); //this will convert the string into a array
console.log(Array.from({name: "priyansh"})); //it will give empty because you have not specified what in the object to become a array


let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));



