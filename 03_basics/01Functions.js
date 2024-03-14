//the code written which may be of 1 2 or many line inside a package and use it in many places


function myName () {  
console.log("A");
console.log("M");
console.log("A");
console.log("N");
}

// myName()
//when we creata function defination then those are called parameter
// function addTwoNumber(number1, number2) {
//     console.log(number1 + number2);
// }
// addTwoNumber(7,"a") //while accesing the function those are called arguments
function addTwoNumber(number1, number2) {
    // let result = number1 + number2
    // return result //after return the function does not work 
    // console.log("aman");
    return number1 + number2
}
const result = addTwoNumber(3,5)
// console.log("Results: ", result);

//how many was to take parameters and arguments

function loginUserMessage(username){
    if(username === undefined){
        console.log("Plese enter a username");
        return
    }
    return `${username} just logged in `
}
// const message = loginUserMessage("aman")
// const message = loginUserMessage("aman")
// console.log(loginUserMessage());

// ***********************function 2*************

// function calculateCartPrice(...num1){ //... is called both rest and spread operator
//     return num1
// }

// console.log(calculateCartPrice(200, 300, 400));

function calculateCartPrice(val1, val2, ...num1){ //... is called both rest and spread operator
    return num1
}
//output = [400,2000] val1 = 200 and val2 = 300
// console.log(calculateCartPrice(200, 300, 400, 2000));

const newObject = {
    username: "aman",
    price: 299
}

function salesPrice (anyObject){
    console.log(`the coustomer ${anyObject.username} ordered an item worth ${anyObject.price}` );//we have to use function parameter inside string interpolation
}

//  salesPrice(newObject)
// salesPrice({
//     username: "sam",
//     price: "399"
// })

const newArr = [200, 300, 400, 700]

function retuSecondArray(getArray) {
    return getArray[2]
}
// console.log(retuSecondArray(newArr));
// console.log(retuSecondArray([200,34,435,546,2]));
//scope- function,global instance