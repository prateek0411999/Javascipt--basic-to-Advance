//syntax
// let aa={}    curly brackets reflects that aa is a object that can have any no. of datavalues of anytype

let myYoutubeVideo={
    title: 'Loops in javascipt',
    //every entry in a object has a name and a value assigned to it
    videoLength: 15,
    videoCreator: 'Hitesh',
    videoDescription: ' This is a video description and a shorter one'

}
console.log(myYoutubeVideo);

//last m comma nhi aata 


//NOW WE'LL ACCESS THIS OBJECT
console.log(`Hey new Video on ${myYoutubeVideo.title} by ${myYoutubeVideo.videoCreator}`);
