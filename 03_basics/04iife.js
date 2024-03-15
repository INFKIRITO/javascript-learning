//IMMEDIATLY INVOKED FUNCTION EXPRESSIONS (IIFE)
// USED FOR two things to reduce  global scope population and imdiate execution

(function chai (){ //named iife
    console.log(`DB CONNECTED`);//globel scope ka pollution se problem hote ha aur us problem ko hatane me use hota ha iife
})(); //once the iife is executed it doesnot know when to stop so to stop it we have to put an semi-colon at the end ;

((name) => { //takes parameter here (simple iife)
    console.log(`DB CONNECT, ${name}`);
})('amna');//takes argumetn here