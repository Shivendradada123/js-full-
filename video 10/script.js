//Arrays High Order Functions








//  1. foreach use                                                                

const student = ["shivendra", "aditya", "paisa", "chhot"];



student.forEach ((valu) => console.log(valu))

// 2. .map use 


const numbers = [1, 2, 3, 4, 5, 6, ];

function double(n) {
    return n * 3
}

let newarry = numbers.map(double);
console.log(newarry )

//








numbers.forEach( (num) => newarry.push(num * 2 ));
console.log(newarry)

// exapmle 01

const phone = ["iqooz10", "oppo", "paisa", "chhot"];





function print(s) {
    console.log(s);
}

phone.forEach(print);

//end of example 01
///done 












