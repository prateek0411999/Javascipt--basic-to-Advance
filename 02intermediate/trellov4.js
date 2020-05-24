//const myTodos=['Buy Bread','Go to Gym','Record videos']
//console.log(myTodos.indexOf('Buy Bread'));

//const newTodos=[{},{},{}] array object
const newTodos=[{
    title: 'Buy Bread',
    isDone: false,
},{
    title: 'Go to Gym',
    isDone: false,

},{
    title: 'Record videos',
    isDone: true,   //yha comma lagana apni marzi hh
}]
//FindIndex takes function as a parameter -callback function
const index=newTodos.findIndex(function(todo,index){
    
    return todo.title === 'Go to Gym'
});
console.log(index);

const findTodo=function(anyTodos,title){
    const index=anyTodos.findIndex(function(todo,index){
        return todo.title.toLowerCase()===title.toLowerCase()
    })
    return anyTodos[index]
}


