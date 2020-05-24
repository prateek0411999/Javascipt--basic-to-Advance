function myvalidation(){
    let myValue=document.getElementById('myform').myValue;

    if(isNaN(myValue) || myValue<1 || myValue>20){
        alert('Not a valid input enter it betweem 2 to 19')

    }
    else{
        alert('This input is cool')
    }

}

//FORM VALIDATION

document.querySelector('.myform').addEventListener('submit',(event)=> {
  event.preventDefault(); //ab URL m nhi dikhega
    //console.log(event.target.UserName.value)
    document.write(event.target.UserName.value)

   //apan URL m se username hide krenge
   //using preventDefault(); function
   //we write this in the begining of the fucntion

   //isse UserName ko empty string bhi assign kr skte hh
    //event.target.UserName.value=' '


})