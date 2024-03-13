// ************part 1 objects****************

//to declare objects literal and constructor
//singleton - an object is created when we create one using constructor
//object literals
// Object.create => constructor method singleton is created

const mySym = Symbol("Key1")

const JsUsers = { // objects has key value pairs
    name: "Aman Singh",
    [mySym]: "myKey1",//this is wrong
    "full name": "Amman Singh",
    age: 22,
    email: "amanSingh@gamil.com",
    location: "Dhanbad",
    lastLoginDay: ["Monday", "Saturday"]
}

// console.log(JsUsers.email)
// console.log(JsUsers["email"]);//when accessing using [] we have to use the type in which we are accesisng
// console.log(JsUsers["full name"]);
// console.log(JsUsers[mySym]);

JsUsers.email = "aman970909@gmail.com"
// Object.freeze(JsUsers)
JsUsers.email = "amansdjf@gamil.coom"
// console.log(JsUsers.email);
// console.log(JsUsers);

JsUsers.greeting = function(){ 
    // console.log("Hello js users");
}

JsUsers.greetingtwo = function(){ 
    // console.log(`Hello js users, ${this.name}`); //string interpolation
}
// console.log(JsUsers.greeting());
// console.log(JsUsers.greetingtwo());

// *************part 2 objetcs*****************

//how to declare objects using constructor

const tinderUser = new Object() //this is singleton object
// const tinderUser = {} // this is not a singleton object
tinderUser.id = "1344"
tinderUser.name = "aman singh"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = { // we can create as mant nested object as we like
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "aman",
            lastname: "singh"
        }
    }
}
// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {
    1: "A",
    2: "b",
}
const obj2 = {
    3: "A",
    4: "b",
}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2) //optional value it gurrentes a result which will come {} used when there a large amount of value is there in the object
const obj3 = {...obj1, ...obj2}

// console.log(obj3);

//whenever values comes from database it comes in form of arrays of object

const users = [
    {
        id: 1,
        email: "some@gamil.com"
    },
    {
        id: 1,
        email: "some@gamil.com"
    },
    {
        id: 1,
        email: "some@gamil.com"
    }
]
 users[1].email

//  console.log(tinderUser);

//  console.log(Object.keys(tinderUser)); //intresting
//  console.log(Object.values(tinderUser));
//  console.log(Object.entries(tinderUser));

//  console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// **************************objetcs lecture 3********************
//de structuring => { }
const course = {
    name: "js-hindi",
    price: "999",
    courseInstructor: "aman"
}

// course.name => de-structuring
// const {courseInstructor} = course
//we can even give our own name to a name
const {courseInstructor: instructor} = course
// console.log(instructor);

// *********************API********************
// {
//     //JSON
//     "name": "aman",
//     "coursename": "js-hindi",
//     "Price": "free"

// }
