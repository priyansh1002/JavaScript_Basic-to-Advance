const namef="priyansh";  //declaring a string method 1
const gameName = new String('chaudhary') //declaring a string method 2
const repCount = 50;

console.log(`${namef} and ${repCount}`);

console.log(gameName.length);

console.log(namef.substring(0,4));
console.log(namef.slice(0,4));       //for taking specific part of the string

const newName="     hoppy    ";
console.log(newName.trim());  //this is used for removing extra spaces

const url="https://priyansh2001.com/hitesh20";
console.log(url.replace('20',"-")); //this si used for replacing any specific word by some another word

console.log(url.includes('2001')); // this is used to check if some specific word is there or not

console.log(url.split('/')); //this function is used to seperate the string on bases of some given characters

