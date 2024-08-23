/* Immediately Invoked Function Expressions (IIFE) */

(function chai(){  //name IIFE
    console.log("DB Connected");
})();

((name)=>{        //NO Named IIFE
    console.log(`${name} good job`);
})("priyansh"); 

//there is problem with global scope pllution so by dealing with that we used IIFE which immediately called as soon as the programme run