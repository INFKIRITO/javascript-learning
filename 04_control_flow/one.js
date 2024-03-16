//in javascript we have seen all the codes excectues but that should not happen the codes should run on conditional base this is called control flow or logic flow

// 1. if statement

// const isUserLoggedin = true
// if(isUserLoggedin) { //condition should be true to excecute the code inside of if || if the code is false then the code inside if will not execute
     
// }
// const tempreture = 41
// if(tempreture === 50) { //condition should be true to excecute the code inside of if || if the code is false then the code inside if will not execute
//     console.log("less then 50");
// }
//     else{
//         console.log("tempreature is greater than 50"); 
//     }

// const score = 200

// if(score > 100) {
//     const power = "fly" //variable defined here is passed on this scope only and cannt be used outside of this scope
//     console.log(`User Power: ${power}`);
// }
// console.log(`User Power: ${power}`); //this gives and error that power is not defined it is because of scope
// const balance = 1000

// // if(balance > 500) console.log("test"),  console.log("start");; //implicit scope - exceution is done only in one line || unreadeable code not a good practice

// if (balance < 500) {
//     console.log(`less than 500 balance: ${balance}`);
    
// }  else if(balance < 750) {
//     console.log(`less than 750 balance: ${balance}`);
// } else if(balance < 900) {
//     console.log(`less than 900 balance: ${balance}`);
// } else{
//     console.log(`less than 1200 balance: ${balance}`);
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = false

if(userLoggedIn && debitCard) {
    console.log("allow to buy course");
}
if(loggedInFromEmail || loggedInFromGoogle || true){
    console.log("User logged in");
}


