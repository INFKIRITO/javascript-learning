const user = {
    username: "aman",
    price: 999,

    welcomeMessage: function(){ // this is used to access the current contaxt in a variable
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }
}
// user.welcomeMessage() //inside node environment this refers to an empty refernce so return value is empty 
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function cahi () {
//     let username = 'aman'
//     console.log(this.username); //output is undefined as in function this cannot acces the variable or its value
// }

// cahi()

// const chai = () => { //arrow function 
//     let username = "aman"
//     console.log(this); //this cannot be accessed in both arrow or normal function
// } 
// chai()

//  const addTwo = (num1, num2) => {//basic arrow function
//     return num1 + num2
// }
// const addTwo = (num1, num2) =>  num1 + num2 

// const addTwo = (num1, num2) =>  (num1 + num2) //implicit return -In this we dont have to input any parenthesis or any return type

const addTwo = (num1, num2) =>  ({username: 'aman singh'})
console.log(addTwo(6,3)); //if we wrap around paranthesis then we dont have to write return but if we use curly then we havw to use return 

const myArray = [2,3,5,3,5]
myArray.forEach(function() {} ) //correct
myArray.forEach(() => {} )
