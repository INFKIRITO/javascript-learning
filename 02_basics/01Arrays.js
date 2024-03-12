//arrays
// const myArr = [0,1,"man","true"]
const myArr = [1,5,6,7,8] //resizablee and may contain any datatype
//cantain shallow copy - have same refernece value 
//deep copy = doesnot share same reference
const myHeros = ["hulk" , "thor"]
const myArr1  = new Array(1,2,3,4)
//console.log(myArr1[1]);

//arrays methods

// myArr.push(8) //adds values in array
// myArr.pop()//removes last element of array
//myArr.unshift(0) //implements add the starting index but time consuming for large number of arrays 
// myArr.shift()
// console.log(myArr.includes(8));
// console.log(myArr.indexOf(6));
// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// slice , splice

// 

// *****************************arrays part2 *********************

const marvelHeros = ['thor', 'hulk', 'spiderman']
const dcHeros = ['batman', 'superman', 'flash']

// marvelHeros.push(dcHeros) //it takes whole arrays as a single index
// console.log(marvelHeros);

// const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros);//concat joins the two arryas but in a new different array

const allNewHeros = [...marvelHeros, ...dcHeros]//spread operator
//console.log(allNewHeros);
 
const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realAnotherArray = anotherArray.flat(Infinity)//makes it a single arrays which have all the values
// console.log(realAnotherArray);
// console.log(Array.isArray("aman"));
// console.log(Array.from("aman"));//converts into arrays
// console.log(Array.from({name: "Aman"}));//intresting case as it cannot make a arays based on keys

let score1 = 233
let score2 = 253
let score3 = 563

console.log(Array.of(score1,score2,score3)); //makes a arrays by using of and makes arrays from a set of elements
