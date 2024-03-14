// // *************Scope-global and local****************
// let a = 10;
// const b = 30;
// var c = 60;
// if (true) {
//     let a = 30
//     const b = 67 //output for c is 86 this lead to error if some other programer is calling the scope and same name variable is there then this wiil lead to error
//     var c = 86

// }
// console.log(a);
// console.log(b);
// console.log(c);

let a = 10; //using let globel scope value is first outputted and then block scope
//globel scope values can be available at block scope but block scope value is not available in global scope
// if (true) {
//     let a = 30
//     const b = 67 
//     console.log("number:", a ); //output number:30 
// }
//  console.log(a);

//  ***************************scope and mini hoisting***********************

function one(){
    const username = "aman singh"
    function two(){
        const movie = "spiderman"
        console.log(username); //child can acces the parent here two can access the one variable but one cannot access the two variable
    }
    // console.log(movie);
    two()
}
// one()
if(true) {
    const username = "aman"
    if(username === "aman"){
        const movie = "hulk"
        // console.log(username + movie);
    }
    // console.log(movie);
    // console.log(username);
}
// console.log(username);
// console.log(movie);

console.log(addOne(5));
function addOne(num){
    return num + 1 //works fine output = 6
}

addtwo(5)  // in this there is an error and this is called hoisting in js. hoisting is how function are defined where it is saved and where it is used how variables are treated => executing context 
const addtwo = function (num){ //these are some times called expressions
    return num + 2
}