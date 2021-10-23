let sum = total(1, 0.1, 0);
sum = total(1, 0.2, sum);
sum = total(1, 0.78, sum);
console.log(sum);

total = (addCount, addPrice, currentTotal) => {
let price = (addCount * addPrice) + currentTotal;
price = price.toFixed(2);
return Number(price)
}