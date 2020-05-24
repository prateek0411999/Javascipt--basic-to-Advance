let myTodos={
    day:'Monday',
    meetings: 0,
    meetDone: 0,

    addMeeting: function(num){
        //console.log('heyyy, i am a function');
        //console.log(this); //here this will refer to all the items in object
        this.meetings=this.meetings+num
    
    },
    summary:function(){
        return `you have ${this.meetings} meetings today`
    }

}
myTodos.addMeeting(4);
console.log(myTodos.summary());

// let myTodosTwo={
//     day:'Tuesday',
//     meetings: 0,
//     meetDone: 0,

//     addMeeting: function(){
//         //console.log('heyyy, i am a function');
//         console.log(this); //here this will refer to all the items in object
        
//     }
// }

// myTodosTwo.addMeeting();

