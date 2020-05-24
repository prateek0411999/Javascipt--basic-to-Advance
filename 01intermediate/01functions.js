let sayHello=function(){
    console.log('Hey user');
    
}

sayHello()


//parameterized function

let sayHello1=function(para1){
    console.log(`Hey ${para1}`);

}
sayHello1('John')




let fullNameMaker=function(firstName,lastName){
console.log(`Welcome to LCO `)
console.log(`Happy to have you, ${firstName} ${lastName} `)
}
fullNameMaker('Prateek','Sharma');




//now we'll return the value
let myAdder=function(a,b){
    return a+b;
}
let aa=myAdder(1,2)
console.log(aa);

let myMultiplier=function(num1,num2){
    return num1*num2;

}
let mm=myMultiplier(10,20);
console.log(mm);




let guestUser=function(name,couseCount){
return 'hello' + name +'and your course count is '+ couseCount;
}
console.log(guestUser()); //agar parameter pass nhi krege toh undefined show krta hh 
console.log(guestUser('Prateek',5));
// DEFAULT PARAMETERS
let guestUser1=function(name='unNAMED',couseCount=0)
{
    //toh ese apan default value de skte hh agar koi value pass nhi ki hui ho toh

}
