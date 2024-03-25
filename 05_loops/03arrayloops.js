// for of

// const arr = [23, 435, 546, 657, 8567]
// for (const num of arr) {
//   // console.log(num);
// }

// const greetings = "Hello World"
// for (const greet of greetings) {
//     if(greet == " "){
//         continue
//     }
//     console.log(`char at : ${greet}`);
    
// }

// const myHeros = ['hulk', 'superman', 'spiderman', 'magneto']

// for (const heros of myHeros) {
//     console.log
    
// }


//maps - data type that holds key value pairs
// const map = new Map()
// map.set('IN', "India")
// map.set('US', "United States Of America")
// map.set('FR', "france")
// console.log(map);
// for (const [maps, values] of map) {
//     console.log(`${maps} :- ${values}`);
// }

// // can we imply forof in obj
// const object = {
//     'game1': 'NFS',
//     'game2': 'spiderman'
// }
// for (const [key, value] of object) {
//     console.log(`${key} :- ${value}`);
// }

// part 2 forin loop used for objects and other
const myObject = {
    js: "javascript",
    cpp: "c++",
    java: "java",
    php: "php"
}

for (const key in myObject) {
    // console.log(key);
    // console.log(myObject[key]);
    // console.log(`${key} :- ${myObject[key]}`);
}

let myArr = [23, 45, 56, 67, 78] 
for (const key in myArr) {
    // console.log(` the number are :- ${key}`); 
}

// maps - data type that holds key value pairs
const map = new Map()
map.set('IN', "India")
map.set('US', "United States Of America")
map.set('FR', "france")

for (const key in map) { //maps are nor iterable in forin loops there is no output
    // console.log(key);
}

//foreach loop most used loop part 3
const coading = ['js', 'ruby', 'java', 'cpp'] 
// As foreach takes a function and takes it as a callback so the function name is not written 
// coading.forEach( (item,index) => {
//    // console.log(item, index);
// })
// coading.forEach(function(item) {
// console.log(item);
// }
// )

// function myLang(val) {
//     console.log(val);
// }

// coading.forEach(myLang)

const ProLang = [
    {
        languageName: "java",
        languageCode: "java"
    },
    {
        languageName: "javascript",
        languageCode: "js"
    },
    {
        languageName: "python",
        languageCode: "py"
    }
] 

ProLang.forEach((item) => {
    console.log(item.languageName);
})