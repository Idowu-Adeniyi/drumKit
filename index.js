var drums = document.querySelectorAll(".drum");

function handleClick(){
    alert("I got clicked!");
}


//for loop
// for(var i = 0; i < drums.length; i++){
// drums[i].addEventListener("click", ()=> {
//     handleClick();
// });
    
// }


//forEach loop
drums.forEach((drum)=>{
drum.addEventListener("click", ()=>{
    alert("I got clicked");
})
})


//while loop
// var i = 0;

// while(i < drums.length){
// drums[i].addEventListener("click", ()=> {
//     handleClick();
// });
//    i++; 
// }

// drum.addEventListener("click", ()=> handleClick())

// drum.addEventListener("click", handleClick);

// var names = ["Mike", "Tony", "Lake"];

// function whoIsPaying(list) {
//     return list[1]; // Returns the first item from the array passed in
// }

// var personPaying = whoIsPaying(names); // Pass the 'names' array into the function

// console.log(personPaying); // Outputs: Mike



// var names = ["Mike", "Tony", "Lake"];

// function pickRandomName(list) {
//     // 1. Generate a random index between 0 and the list length minus 1
//     var randomIndex = Math.floor(Math.random() * list.length);
    
//     // 2. Return only the name at that random index position
//     return list[randomIndex]; 
// }

// var winner = pickRandomName(names);
// console.log(winner); // Outputs a different random name each time, e.g., "Tony"



// var names = ["Mike", "Tony", "Lake"];

// function logAllNames(list) {
//     // The loop goes through each item one by one
//     for (var name of list) {
//         console.log("Hello, " + name);
//     }
//     // No return statement needed here because we are just printing, not creating data
// }

// logAllNames(names);
var names = ["Mike", "Tony", "Lake"];
names.forEach((name)=>{
    console.log("Mr " + name);
})




var milkItem = Number(prompt("Enter number of milk"));
    console.log(typeof milkItem)

if(isNaN(milkItem)){
    alert("Error: Please enter a valid number, not letters!")
}else {
    function getMilk(milk){
    var costPerMilk = 5;
    return milk * costPerMilk;
}
var numOfMilk  = getMilk(milkItem);
    console.log(numOfMilk)
    alert(`Number of Milk is ${milkItem} and Total Price of Milk is: $${numOfMilk}`)
}


