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


// 3. .find use 

const number = [1, 99, 3, 4, 8, 6];

let ans = number.find((num) => num === 2*4);
console.log(ans)


//  04. .filters

 const codders = [
    {name: "shivendra", num: 84},
    {name: "aditya", num: 90},
    {name: "aura", num: 999}

 ];
 
 let pro = codders.filter(codders => codders.num > 50);

 console.log(pro)


 // 05. .slice use 

 const numbersss = [1, 2, 3, 4, 5, 6, 7, 8,] 
 let newarr = numbersss.slice(1, 6 );
 console.log(newarr);


 // 06 .Splice use

 const numberss = [1, 2, 3, 4, 5, 6, 7, 8,] 
 let newarrry = numberss.splice(1, 6 );
 console.log(newarrry);
 console.log(numberss)




















