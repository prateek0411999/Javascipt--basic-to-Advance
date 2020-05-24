//  &&- AND operator - BOTH SIDES NEED TO BE TRUE

//  || - OR operator- ONE SIDE NEED TO BE TRUE

let isVerified=true
let isLoggedIn=true
let hasPaymentToken =true
let isGuest=true

if(isVerified && isLoggedIn && hasPaymentToken){ //all of these condition need to be true
    console.log('greeting messager to user')
    console.log('grant access to paid course')
}else if(isVerified || isGuest)
{
    console.log('Allow free preview to the courses')
}else{
    console.log('Please contact the admin')
}
