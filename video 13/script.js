
// Event listeners 


//  ype of listners 

// 01 listner 




// 02

const clickkar = document.getElementById("clickkaro");
const pulser = document.getElementById("pulser");
clickkar.addEventListener("click", () => {
   if( pulser.style.backgroundColor === "blue" ) {
     pulser.style.backgroundColor = "yellow"
   } else{
     pulser.style.backgroundColor = "blue
     "
   }
} );
