//yeh username aur email abhi direct le rha hh
// vese apan web k data se krte hh
let useremail='LCO12'
let password='1234'
console.log(password.length);
//console.log(useremail.toLowerCase());

let userCheck=function(myString){
    if((myString.includes(123)) &&(myString.length>6) ){
        return true;

    }
    else return false;
}

let passChecker=function(pass){
    if(pass.includes(1234)&&(pass.length>8))
    {
        return true;
    }
    else return false;

}
console.log(passChecker(password));

console.log(userCheck(useremail)); //output -false

