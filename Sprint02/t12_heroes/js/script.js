let heroes = ["Capitan America", "Hulk", "Thor", "Iron Man", "Spider-Man"]

function firstElements (arr, n) {
    let newArr = []
    if(n > 0){
        for(let i =0; i < n; i++){
            newArr.push(arr[i])
        }
    }return newArr

}
console.log(firstElements(heroes, 5));
// ["Captain America", "Hulk", "Thor", "Iron Man", "Spider-Man"]

console.log(firstElements(heroes, 1));
// ["Captain America"]

console.log(firstElements (heroes, 3));
// ["Captain America", "Hulk", "Thor"]

console.log(firstElements(heroes, 6));
// ["Captain America", "Hulk", "Thor", "Iron Man", "Spider-Man"]

console.log(firstElements(heroes, -1));
// []



