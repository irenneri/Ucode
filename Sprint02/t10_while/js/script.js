//  let i = 6;
// let res1 = " ";
// do{
//     res1 += i + " ";
//     i++;
// } while (i < 5);


// i = 6;
// let res2 = " ";
// while (i < 5)
// {
//     res2 += i + " ";
//     i++;
// }

// alert("do while: " + "while: " + res2);


let numL = new RegExp(/^[0-9]*$/);
let num;

do{
    num = prompt("Enter an integer:");
}
while(!(numL.test(num)));

let result = `Multiplication table:\n`;
let i = 1;
while(i < 11){
    result += `${num} * ${i} = ${num * i}\n`;
    i++;
}

alert(result);

