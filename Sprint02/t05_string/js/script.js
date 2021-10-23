let str1 = "You're catnip to a girl like me. Handsome, dazed, and to die for...";
let str2 = "Batman: \"I tried to save you.\""
let str3 = "Selina Kyle: catwoman\"Mmm seemsCatwomanlike everyCatWomanwoman you try to save windsCatWOMANup dead... or deeply resentful.\""
let str;



str = "Just string: " + str1 + "\n";
str += "Length: " + str1.length + "\n";
str += "Character number 2 is " + str1[2] + "\n";
str += "To uppercase " + str1.toUpperCase()+ "\n";
str += "Concatanation in a phrase: " + str1.concat(" " , "- Catwoman")+ "\n";
str += "[Batman Returns] " + str2 + '\n';
str += str3.replace(/catwoman/ig, ' ');

alert(str);

// str1.length;
// str1[2];
// str1.toUpperCase(); 
// str1.slice(0, 32)
// `${str1} - Catwoman` 
// str3.replace(/catwoman/i, " ")

// alert("
// Just string: ${str1}
// Length: ${str1.length}
// Character number 2 is ${str1[1]}
// To uppercase ${str1.toUpperCase()}
// Concatanation in a phrase: ${str1.concat(" ", "- Catwoman")}
// [Batman Returns] ${str2}
// ${str3.replace(/catwoman/i, " ")}
// ")