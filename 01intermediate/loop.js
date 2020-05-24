const days=['Mon','Tue','Wed','Thr','Fri','Sat','Sun']

//for loop
for(let i=0;i<days.length;i++)
{
    let a=days[i];
    console.log(a);
    //console.log(days[i]);
    
    
}

//using forEach loop



const myTodos=[]
myTodos.push('Buy Bread')
myTodos.push('Record videos')
myTodos.push('Go to gym')
myTodos.push('Go to HOme')

myTodos.forEach(function(todo,i){
console.log(`Your task no. ${i+1} is $todo}`);


})