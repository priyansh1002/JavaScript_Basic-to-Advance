// Dates

let myDate = new Date();  // instance of a date object

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

let myCreateDate=new Date(2023, 0, 23);  // date that we want to give

console.log(myCreateDate.toDateString());

let myTimeStamp = Date.now();  // to get the eaxct date

console.log(myTimeStamp);
console.log(myCreateDate.getTime());

//conversion of miliseconds to seconds
console.log(Math.floor(Date.now()/1000));

//customizing date by use of toLocalString
console.log(myDate.toLocaleDateString('default',{
    weekday : "long",
}));