let animalHero = new RegExp(/^[a-z]{1,20}$/);
let genderHero = new RegExp(/^male|female\s?$/);
let ageHero = new RegExp(/^[1-9]{1,5}$/);
let animal, gender, age, description;

animal = prompt("What animal is the superhero most similar to?");
if(!animalHero.test(animal)){
    alert("Wrong input!");
}else{
    gender = prompt("Is the superhero male or female? Leave blank if unknown or other.");
    if(!genderHero.test(gender)){
        alert("Wrong input!");
    }else{
        age = prompt("How old is the superhero?");
        if(!ageHero.test(age)){
            alert("Wrong input!");
        }
    }
}

if(/^male$/i.test(gender) && age < 18){
    description = "boy";
}else if(/^male$/i.test(gender) && age > 18){
    description = "man";
}else if(/^female$/i.test(gender) && age < 18){
    description = "girl";
}else if(/^female$/i.test(gender) && age >= 18){
    description = "woman";
}else if(/\s$/i.test(gender) && age < 18){
    description = "kid";
}else if(/\s$/i.test(gender) && age >= 18){
    description = "hero";
}
alert(`The superhero name is:  ${animal}-${description}`);
