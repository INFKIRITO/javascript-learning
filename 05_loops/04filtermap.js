// *********filter and foreach****************
// const coading = ['js', 'ruby', 'java', 'cpp']

// const values = coading.forEach( (items) => { //for each loop doesnot return any thing it only returns undefinrd
//     // console.log(items);
//     return items;

// })
// // console.log(values);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  let newNums= myNums.filter((num) => {return num > 5})
// // console.log(newNums);

// const newNums = []
// myNums.forEach((num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// })

// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// let bookDate = books.filter ((genr) => genr.genre === "Fiction")
 let bookDate = books.filter ((genr) => { 
    return genr.publish >= 1990 && genr.genre === "History"
})
//   console.log(bookDate);


//   **************************************maps*********************************

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // const newNums = myNums.map( (num) => { return num + 10 })

// const newNums = []
//  myNums.forEach((num) => {
//    if(num != 0){
//     newNums.push(num + 10) 
//    }
// })
// console.log(newNums);
// **********chaining************
// chaining means we can use two or more methods togehter one after another
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums
.map( (num) => num * 10 )
.map((num) => num + 1)
.filter((num) => num >= 40)

// console.log(newNums);



// **************************reduce**********

// const myNums1 = [2,3,4]

// const myTotal = myNums1.reduce((acc, curval) => {
//     console.log(`acc:- ${acc}and curval:- ${curval}`)
//     return acc + curval
   
// }, 0)
// console.log(myTotal);

const shoopingCart = [
  {
  itemName: "js course",
  price: 2999
},
{
  itemName: "py course",
  price: 999
},
{
  itemName: "mobile dev course",
  price: 5999
},
{
  itemName: "data science course",
  price: 12999
},
]
// const priceToPay = shoopingCart.reduce( (acc, item) => item.price + acc, 0)
const priceToPay = shoopingCart.reduce( (acc, item) => 
{
  return item.price + acc}, 
0)

console.log(priceToPay);
