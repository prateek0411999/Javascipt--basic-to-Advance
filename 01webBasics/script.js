//alert('FILE IS ATTACHED')
//querySelector m jispe bhi operation lagane ho usko mention krte hh
//jese hi 1st <p> tag aaeyga uspe yeh operation lagega
const myPElements=document.querySelector('p')
myPElements.textContent='i am being changed using js'

//now we'll change all of p tags using loop

const aa=document.querySelectorAll('p')
//querySelectorAll jo hh vo array return krta hh tabhi apan loop lageyge
aa.forEach(function(p){
    p.textContent='I am changed using loop in js'
    //to remove all the stuff ek ek krke chal rhe hh toh remove kr dega sabko
    //p.remove()
})
//using the arrow function
aa.forEach((p)=> p.textContent='using the arrow function we r changing the content')


document.title='I got Changed'

//console.log(document.getElementById('#idone'));
//(.classone)

//we have getElementByClassname


//But we have better options then this

//const myElement=document.queryS

//track input form
document.querySelector('button').addEventListener('click',(event)=>{
    event.target.textContent='I was Clicked.';
})

document.querySelector('#myform').addEventListener('input',(event)=>{
    console.log(event.target.value);
})