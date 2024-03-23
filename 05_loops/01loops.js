//for

// for (let i = 0; i < array.length; j++) {
//     const element = array[index];
    
// }
// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element);
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(`the outer loop value is ${i}`);;
//     for (let j = 0; j < 10; j++) {
//         console.log(`inner loop value is ${j} and ${i}`);
//     }
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(`the outer loop value is ${i}`);;
//     for (let j = 0; j < 10; j++) {
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
// }
let myarr = ["falsh", "hulk", "superman", "batman"]
for (let index = 0; index < myarr.length; index++) {
    const element = myarr[index];
    console.log(element);
}
// Break and continue
// for (let index = 1; index < 20; index++) {
//     if(index == 5) {
//         console.log(`Detected : ${index}`);
//         break;
//     }
//     console.log(`value of index: ${index}`);
    
// }
for (let index = 1; index < 20; index++) {
    if(index == 5) {
        console.log(`Detected : ${index}`);
        continue;
    }
    console.log(`value of index: ${index}`);
    
}