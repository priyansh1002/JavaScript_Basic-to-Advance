const myNums=[1,2,3];

const total=myNums.reduce((acc, currval)=>{
      return acc+currval         //reduce function
}, 0);

//console.log(total);

//shopping kart example

const shoppingCart =[
    {
        item: "js coarse",
        price: 989
    },
    {
        item: "c++ coarse",
        price: 98
    },
    {
        item: "java coarse",
        price: 199
    },
    {
        item: "python coarse",
        price: 89
    }
];

const sum= shoppingCart.reduce((acc,item)=>{
    return acc+ item.price
},0)

console.log(sum);