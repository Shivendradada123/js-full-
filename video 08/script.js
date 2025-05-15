//arrow function    

//syntax


const saybyee = () => {
    console.log("byee");
}

saybyee();

const sum = (num1, num2) => {
    return num1 + num2;
}

console.log (sum(2, 74));



let mines = (a, b) => a * b ; //one liner arrow function

console.log(mines (5, 7))

// arguments nums

let jod = (...pulser) => {
    console.log(pulser);
}

jod(2, 3, 4, 5, 6, 7, 8, 9, 10)

//one liner funtion

const addnum = (a, s) => a + s;
 console.log(addnum(80, 4))



 // hoisting



 const getnum = () => {
    console.log("hey this is mauhariya");

 }

 getnum();
console.log("apne me hi mast ai")