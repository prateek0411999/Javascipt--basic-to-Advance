//this below concept of map objects is very very very useful
//iss hmm kya kr skte hh ki kahi database like NoSQL, mongoDB DB m se ek ek krke values nhi le pate hh 
//use liye hmara pass maps ka conept hota hh
//hmm ne sare object bnaye niche
//lagao sye sab DB m the
//toh hmm kya krte hh ki MAP() ka ek object bnate hh
//aur yeh MAP hAS A FUNCTIONALITY 
//IT STORES THE VALUE IN KEY VALUE PAIR
//toh hmm object ki help se 
//har object ki key bnakey
//map k object se set kr dete hh using SET() Method
//jese python m dictionary hh vese hi js m MAP HH
//iss keys ko apan extract krke pura values use kr skte hh
//and has a lot of functoins for performing the operations


//AUR FINALLY FOREACH LOOP YA FOROF LOOP K iterate krskte hh
//keys k upar se aur unke entries access kr sktehh
//very very useful concept



var john={
    name: ' I am john',
    age: 24,
    isActive: true
}
var marry={
    name: 'I am marry',
    age: 23,
    isActive: true,
}
var sam={
    name: 'I am sam',
    age: 29,
    isActive: false,
}

let users=new Map()
//KEY VALUE pair
users.set('john',john)
users.set('marry',marry)
users.set('sam',sam)

console.log(users);




//MAP ALWAYS RETURN ITERATOR SO THAT WE CAN LOOP THROUGH IT
console.log(users.size);
//O/P - 3
//MAP HAS THE PROPERTY TO CHECK HOW MANY OBJECTS ARE THERE
//BUT OBJECTS DON'T HAVE THAT





//KISI BHI OBJECT TOH ACCESS KRNE K LILYE 
//WE HAVE GET() FUNCTION THAT TAKES KEY AS  PARAMETER

console.log(users.get('john'));

//'john' is key we can name it whatever we want 
//john is the object that is assigned with the key 

console.log(typeof users);


console.log(users.keys());
//returns all the keys
//INN KEYS K UPAR ITERATE KRKE APAN EK HI BARI M SAB ACCESS KR SKTE

//WE'LL USE FOROF THIS TIME
for (const key of users.keys()) {
    console.log(key)
    
}

for (const a of users.values()) {
    console.log(a)
    console.log(a.name)
    
}
//entries gives the key value pair
for (const [key,value] of users.entries()) {
    console.log(key+ '='+ value.name)
    
}

//USING THE FOR EACH LOOP
//forEach takes function as parameter so we use arrow function simply 
users.forEach(  (value,key) => console.log(key+'='+value.name)    )

