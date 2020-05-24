let num1=22;
let num2=7;
result=22/7;
//we can easily check the documentation 
// to use a function
console.log(result);

console.log(result.toFixed(2));
//toFixed - kitne decimal places tak print krna hh
//We can use Math Library also

let Floatres=result.toFixed(2);
console.log(Math.floor(Floatres));
console.log(Math.ceil(Floatres));


//RANDOM -intially gives random no. between 0 and 1
console.log(Math.random());
console.log(Math.random() * 10); 
console.log(Math.random()*5);
console.log('--------------------');

console.log(Math.random()* 5 + 1);
 console.log('--------------------');
 

let upper =6
let lower=1

// HERE IS THE ABSOLUTE THING THAT WE ARE ACTUALLY LOOKING FOR 
let myRandom=Math.floor(Math.random() *( upper - lower + 1)) 

//now if we want to have the no. between our range
//we'll simply add the lower bound to it  EZ
let myRandom1=Math.floor(Math.random() *( upper - lower + 1)) + lower

console.log(myRandom);
console.log(myRandom1);
