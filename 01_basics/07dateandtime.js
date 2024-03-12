 const myDate  = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDatr = new Date(2023, 0, 23)
// let myCreatedDatr = new Date(2023, 0, 23, 5, 3)
// let myCreatedDatr = new Date("2023-01-14")
let myCreatedDatr = new Date("01-13-2023")
// console.log(myCreatedDatr.toLocaleString());
let mytimeStamp = Date.now()
// console.log(mytimeStamp);
// console.log(myCreatedDatr.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.toLocaleString());
console.log(newDate.getMonth());
console.log(newDate.getDay());

// `${newDate.getDay()}and the time`
newDate.toLocaleString('default',{
    weekday: "long",

})// help us to coustomize our date and how it is displyed