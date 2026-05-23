var drums = document.querySelectorAll(".drum");

// KeyPress EventListener
document.addEventListener("keydown", (e)=>{
       var keypad = e.key;
       console.log(keypad)
        // Only change text color to white if the drum is clicked
        if(["w","a","s","d","j","k","l"].includes(keypad)){
   
              var activeDrum = document.querySelector("." + keypad);
             activeDrum.classList.add("pressed");
              activeDrum.style.color = "blue"; 
             setTimeout(()=>{
              activeDrum.classList.remove("pressed");
               activeDrum.style.color = ""; 
             },100)
                  
        }

     if(e.key === "w"){
        var audio = new Audio ("sounds/tom-1.mp3");
           audio.play();
          
     }else if(e.key === "a"){
         var audio = new Audio ("sounds/tom-2.mp3");
           audio.play();
              
     }else if(e.key === "s"){
         var audio = new Audio ("sounds/tom-3.mp3");
           audio.play();
              
     }else if(e.key === "d"){
         var audio = new Audio ("sounds/tom-4.mp3");
           audio.play();
               
     }else if(e.key === "j"){
         var audio = new Audio ("sounds/crash.mp3");
           audio.play();
               
     }else if(e.key === "k"){
         var audio = new Audio ("sounds/kick-bass.mp3");
           audio.play();
             
     }else if(e.key === "l"){
         var audio = new Audio ("sounds/snare.mp3");
           audio.play();
              
     }
  
})



// Click EventListener
//forEach loop
drums.forEach((drum)=>{
    drum.addEventListener("click", (e)=>{
    var key = e.target.innerHTML;

  // Only change text color to white if the drum is clicked
        if (key === "w" || key === "a" || key === "s" || key === "d" || key === "j" || key === "k" || key === "l") {
            e.target.style.color = "blue";
        }

         e.target.classList.add("pressed");
             setTimeout(()=>{
              e.target.classList.remove("pressed");
              e.target.style.color = "";
             },100)


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


  




