let myTodos={
    day:'Monday',
    meetings: 0,
    meetDone: 0

}
//todo hmara object hh toh vo access krlega

let addMeeting=function(todo,meet=0)
{
    todo.meetings=todo.meetings+meet
}
//addMeeting(myTodos,2)
//jese apan ne object pass krdia 
//aur function ne object m update krdia mettings ko

let meetDone=function(todo,meet=0)
{
    todo.meetDone=todo.meetDone+meet;
}

let resetDay=function(todo){
    todo.meetings=0
    todo.meetDone=0

}
let getSummaryOfDay=function(todo)
{
    let meetLeft=todo.meetings-todo.meetDone;
    return `You have ${meetLeft} meetings Today`
}

addMeeting(myTodos,4)
addMeeting(myTodos,2)

meetDone(myTodos,5)

console.log(getSummaryOfDay(myTodos))