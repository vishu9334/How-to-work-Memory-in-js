// console.log("There are two types of memory in js");
// console.log("First: Stack memory & Second: Heap memory")

// console.log("Stack memory are used for Primitive dataType");
// console.log("Heap memory are used for Non-primitive dataType");
// ----------------------------------------------------------

// when we used Stack memeory in primitive dataType its give copy's variable from initialize variable.
// ex:-
// Stack memeory in primitive dataType
// ex:-
// let myYoutubename = "vishalkumardotcom";
// let anothername = myYoutubename 
// console.log(anothername);
// -------------------------------------------------

// define are non-primitive dataType inside Heap memory then we get return value is reference.
// ex:-
// let userOne = {
//     email: "user@gmail.com",
//     upi: "upi@rupay"
// }
// let userTwo = userOne

// userTwo.email = "vishu@gmail.com"
// console.log(userOne.email);
// console.log(userTwo.email);