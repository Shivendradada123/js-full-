//Functions in Javascript

function hello() {
    console.log('hey shivendra')
}

hello()

// arguments

function sum(a, b){
    console.log(a + b)
}

function subtract(a, b){
    let ans = a-b;
    return a - b;
}

//parameter
sum(80, 4)
sum(10, 6)

let a = subtract(88, 4)
console.log("hey this is your answere", a + 8)
let b = subtract(88, 80)
console.log("answere is ", b)


//multiple argumnets

function addnumbers() {
    let ans = 0
    for(let i = 0; i < arguments.length; i = i + 1 ){
        ans = ans + arguments[i] 
            
        
       
    }
    return ans

}



   let result = addnumbers(10, 220, 50, 40, )
   console.log(result)

 //spread opretor
function addnumberskk(...shivendra) {
    let ans = 0
    for(let i = 0; i < shivendra.length; i++  ){
        ans = ans +shivendra[i]
    }
    
    
}
let resulte = addnumberskk(10, 220, 500, 40, )
   console.log(resulte)

