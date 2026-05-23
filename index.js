var drums = document.querySelectorAll(".drum");

//forEach loop
drums.forEach((drum)=>{
    drum.addEventListener("click", (e)=>{
    var key = e.target.innerHTML;
        // Only change text color to white if the drum is clicked
        if (key === "w" || key === "a" || key === "s" || key === "d" || key === "j" || key === "k" || key === "l") {
            e.target.style.color = "blue";
        }

     if(e.target.innerHTML == "w"){
           var audio = new Audio ("sounds/tom-1.mp3");
            audio.play();
           
     }else if (e.target.innerHTML == "a"){
            var audio = new Audio ("sounds/tom-2.mp3");
            audio.play();
            
     }else if (e.target.innerHTML == "s"){
            var audio = new Audio ("sounds/tom-3.mp3");
            audio.play();
        
     }else if (e.target.innerHTML == "d"){
            var audio = new Audio ("sounds/tom-4.mp3");
            audio.play();

     }else if (e.target.innerHTML == "j"){
            var audio = new Audio ("sounds/crash.mp3");
            audio.play();
     }else if (e.target.innerHTML == "k"){
            var audio = new Audio ("sounds/kick-bass.mp3");
            audio.play();
     }else if(e.target.innerHTML == "l"){
         var audio = new Audio ("sounds/snare.mp3");
            audio.play();
     }else{
        console.log("Please click a drum!")
     }

    })
})


// Using Switch
// var btnInnerHTML = e.target.innerHTML;
// switch (btnInnerHTML) {
//     case "w":
//         var audio = new Audio ("sounds/tom-4.mp3");
//             audio.play();
//         break;

//     default:
//         console.log("Please click a drum!")
      
// }






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


