let begin = prompt("Please, enter the number for the BEGINING of the range");
let end = prompt("Please, enter the number for the END of the range");
function checkDivision(begin = "1", end = "100"){
    let i = begin;
    while (i <= end){
        if (i % 2 == 0 && i % 3 == 0 && i % 10 == 0){
            console.log(i + "is even, a multiple of 3, a multiple of 10");
        }else if (i % 2 == 0 && i % 3 == 0){
            console.log(i + " is even, a multiple of 3");
        }else if (i % 2 == 0 && i % 10 == 0){
        console.log(i + " is even, a multiple of 10");
        }else if (i % 2 == 0){
            console.log(i + " is even");
        }else if (i % 3 == 0) {
        console.log(i + " is a multiple of 3")
        }else{
            console.log (i + " -")
        }
        i++;
    }
    } 
     checkDivision(begin, end);
    

     