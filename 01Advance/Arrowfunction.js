// const sayHello=function(name){
//     return 'Hey there,'+ name+" !"
// }
// console.log(sayHello('Sammy'));

//CONVERTING OUR REGULAR FUNCTION INTO ARROWFUN

//step-1   just remove the function word

//step-2  paranthesis k aage(  =>   ) yeh

const sayHello=(name)=>{
    //we usually don't use doulbe comman aur single comma we use this always
    //   return 'Hey there,'+ name+" !"
    return `hey there, ${name}`
}

//so this is our arrow function
//  ISKO ARROWFUN KO AUR BHI REDUCE KRKE LIKHA JATA HH
//BRACKETS HTAO
//AUR RETURN KEYWORD BHI 
//SIMPLY TYPE THIS
const sayHello2=(name1)=>   `Hey, there ${name1}`


console.log(sayHello('Sammy'));
console.log(sayHello2('Prateek'));



const todos=[{
    title: 'Buy Bread',
    isDone: true,
},{
    title: 'Go to Gym',
    isDone: true,

},{
    title: 'Record youtube videos',
    isDone: false,
}]
//filter bhi loop krta hh har ek p  jo condition meet krta hh usko return kr deta hh
// const thingsDone= todos.filter((todo)=>{
//     return todo.isDone===true
// })
//NOW WE'LL DO IT IN ONE LINE

const thingsDone= todos.filter((todo)=>  todo.isDone === true)
//EZ

console.log(thingsDone);








