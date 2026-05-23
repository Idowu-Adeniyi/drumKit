var drums = document.querySelectorAll(".drum");
//forEach loop
drums.forEach((drum)=>{
drum.addEventListener("click", ()=>{
    var audio = new Audio ("sounds/tom-1.mp3");
    audio.play();
})
})


//for loop
// for(var i = 0; i < drums.length; i++){
// drums[i].addEventListener("click", ()=> {
//     handleClick();
// });
    
// }


//while loop
// var i = 0;

// while(i < drums.length){
// drums[i].addEventListener("click", ()=> {
//     handleClick();
// });
//    i++; 
// }


function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}
function divide(num1, num2){
    return num1 / num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function calculator(num1, num2, calculate){
    return calculate(num1, num2)
}

console.log(calculator(5,2, divide))