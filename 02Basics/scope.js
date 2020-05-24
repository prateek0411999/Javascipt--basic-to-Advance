// let and var difference

let iAmGlobal = 'someValue'
if(true){
    let iAmLocal='someMoreValue' 
    iAmGlobal='superMan' //abhi iski value apne ne inside block m change toh har change uski value change hogi 
    //jese hmne bhar print kra iAmGlobal ko toh bhar bhi superman hi print hua
    console.log(iAmGlobal);
    console.log(iAmLocal);
    
    
}
//console.log(iAmLocal) //this will return error as it is out of scope
console.log(iAmGlobal)

//now we'll change this let to var

var iAmGlobal1 = 'someValue'
if(true){
    var iAmLocal1='someMoreValue' 
    iAmGlobal1='superMan' //abhi iski value apne ne inside block m change toh har change uski value change hogi 
    //jese hmne bhar print kra iAmGlobal ko toh bhar bhi superman hi print hua
    console.log(iAmGlobal1);
    console.log(iAmLocal1);
    
}
console.log(iAmGlobal1);
console.log(iAmLocal1);

// KINGS PROBLEM
let king='John'
if(true){

    let king='Sam'

    if(true){
        let king='Ram'
         
        console.log(king);
        //yeh apne scope m king dekhege
        //agar yha p nhi hoga toh Sam aayega
    }
}
//iske bhar sab jaga John hi print hoga kyuki baki sab ka scope block tak hi hh

if(true){
    console.log("I am second part "+king);
    
}


//but agar apan declare hi na kre king ko like koi let nhi ya var nhi 

//let king='John'
if(true){

    //let king='Sam'

    if(true){
         king='Ram'
         //yha p hh jese

        console.log(king);
        }
}
//inn sab chhezz se data leakage ka issue rehta hh


if(true){
    //AGAR UPAR m let lga du fir yeh part error dega ki king is not declared krke
    
    console.log("I am second part "+king);
    
}
// Ram hi print hoga har jaga ab


//SO IT IS BEEN SEEN THAT ONE SHOULD ALWAYS DECLARE A VARIABLE EITHER USING VAR OR LET 
