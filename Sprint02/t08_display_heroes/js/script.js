let blackwidow = {
    team: "Avengers" || "S.H.I.E.L.D.",
    universe: "Marvel",
    race: "human",
    eyeColor: "green",
    hairColor: "lightBrown/green"
}

let superman = {
    teams: "Justice League Of America" || "Teen Titans",
    universe: "DC Comics",
    race: "human" || "kryptonian",
    eyeColor: "blue",
    hairColor: "black"
}
let hero = blackwidow;

if ((hero.team === "Avengers" || hero.team === "S.H.I.E.L.D.")
        && hero.universe    === "Marvel"
        && hero.race        === "human"
        && hero.eyeColor    === "green"
        && hero.hairColor   === "lightBrown/green") {
            alert("This is Black Widow!");
    } else if ((hero.team === "Justice League Of America" || hero.team === "Teen Titans")
        && hero.universe === "DC Comics"
        && hero.race === "human" || "kryptonian"
        && hero.eyeColor === "blue"
        && hairColor=== "black"){
            alert("This is Superman or Robin!")
    } else {
        alert("Didn\'t recognize!");
    }