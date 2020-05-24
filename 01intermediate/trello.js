const days=['Mon','Tue','Wed','Thr','Fri','Sat']

let sayHello2=function(){
    console.log('Greeting message for user');
    
}
//forEach -- accept functions as a parameter
//other then this we can simply define a whole function in forEach parenthesis
days.forEach(sayHello2);

//1st parameter - value
//2nd parameter - index

days.forEach(function(day){
    console.log(day)

})

days.forEach(function(day,index){
    console.log(`start with ${index}-> ${day}`);

})