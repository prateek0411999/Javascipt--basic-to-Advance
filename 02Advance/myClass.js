class User{
    constructor(firstname,ls,credit){
        this.firstname=firstname;
        this.lastname=ls;
        this.credit=credit;

    }
    getFullName(){
        let fullname=  `${this.firstname} ${this.lastname} is my full name`
        return fullname;
    }
    editName(newName){
        const myName=newName.split(' ');
        //split array bnadeta hh space se seperate krke

        this.firstname=myName[0]
        this.lastname=myName[1]


    }

}
const  obj1=new User('john','anderson',34);
    console.log(obj1);
//const sammy=new User();
//console.log(sammy);

obj1.editName('Johhny Anderson');
console.log(obj1.getFullName());

//will output undefined


//INHERITANCE
//extends keyword hi use hota hh

// class Teacher extends User{
//     constructor(firstname,lastname,credit,subject){
//         super(firstname,lastname,credit);
//     }
    
// }
// const t1=new Teacher();