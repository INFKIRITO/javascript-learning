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
console.log(loginUserMessage());