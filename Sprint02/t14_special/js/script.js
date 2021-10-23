
let value = prompt("Please, enter value from 1 to 4");
if (value == 1) {
    let result = value * 2 / "a";
    alert(result);
}else if (value == 2) {
    let result = (value - value) / 0;
    alert(result);
} else if (value == 3) {
    let result = 0 * Infinity;
    alert(result);
}else if (value == 4) {
     let result = value * 40000000 == Infinity;
    alert(result);
}else {
    alert("Wrong input!")
}
