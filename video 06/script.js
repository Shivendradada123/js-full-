//loops in java script 
//types of loops 


//1. for 

for(let i = 1; i <= 20; i = i + 1  ) {
    console.log("shivendra mauhariya" + i )
}

//2. while

let man = 0; 
let school = 100;
while(man != school){
    man = man + 1;
    console.log("step" + man)
}

//do while

let number = 84;

let guess = 0;

do {
    guess = parseInt(prompt("guess a number"))
    if(guess == number){
        alert('you are win')
        break;
    }
       
}while(guess != 0 )








