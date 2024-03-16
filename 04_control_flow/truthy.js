//truthy and falsey value
// const userEmail = "aman@gmail.com"

// if(userEmail) { //we have not compared but only assumed a truthy value
//     console.log("got user email");
// } else{
//     console.log("dont have user email");
// }

//falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN
//truthy values
//[], number, string, boolean, true, 1, "0",'false', {} function(){} = empty function, 
// const userEmail = []
// if(userEmail.length === 0) {
//     console.log("array is empty");
// }
// const emptyObj = {}
// if(Object.keys(emptyObj).length === 0) { //keys convert object to array
//     console.log("object is empty");
// }

// ***************************nullish coalescing operator(??) : NULL UNDEFINED***********
let val1; //when we use database , firebase or any any data calling app then we dont get responese directly in this we get two values in which there can be null or undefined in this case the code structure can be parean so this ?? is created
// val1 = 5 ?? 10
// val1 = null ?? 10 
// val1 = undefined ?? 15

// console.log(val1);
//terniary operator
// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice >= 80 ? console.log("less than 80") : console.log("greater than 80");