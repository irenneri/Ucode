let newName, guest;
const username = /^[A-Z]{1}[a-z]+\s[A-Z]{1}[a-z]+/;

newName = prompt("Please enter your first name and last name", "John Doe");

if (username.test(newName)===false) {
    alert("Wrong input!")
} else{
    guest = newName;
    alert(`Wellcome, ${guest}!`)
}