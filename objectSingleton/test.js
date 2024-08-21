const obj1={
    1: "a",
    2: "b"
}
const obj2={
    3:"a",
    4:"b"
}

const obj3=Object.assign({},obj1, obj2);// this is used to merge many objects
console.log(obj3);

const obj4={...obj1, ...obj2};// most preffered method for mergeing objects
console.log(obj4);


console.log(Object.keys(obj1)); //to access keys from the object
console.log(Object.values(obj1));// to access values of thet keys from thet object

/*+++++++++ destructuring ++++++++*/

const course={
    coursename: "priyansh zoom",
    price: "999",
    courseInstructure : "hitesh"
}

const {courseInstructure} = course;

console.log(courseInstructure);