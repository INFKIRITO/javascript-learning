//call stack and code execution
// javascript execution context(jsec)
//js runs a code in 2 phase
//=> {} global ec is always created and global ec is kept in this veriable
// global ec is differnet for browser,node and other jre
//js is single threaded
//js ec => 1.global ec 2.function ec 3.eval ec
//A javascript code is run on two phases
//1.Memory creation phase -memory place is allocated in this phase
//2.execution phase-tthe logiacl operator , and all other methods are executed

let val1 = 10
let val2 = 5
function addNum(num1, num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)

// all steps of executoin for the above code