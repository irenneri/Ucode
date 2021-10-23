function transformation() {
    let place = document.getElementById("lab")
    let name = document.getElementById("hero")

    if(name.innerHTML === "Bruce Banner") {
        name.innerHTML = "Hulk";
        place.style.background = "#70964b";
        place.style.fontSize = "60px";
        place.style.letterSpacing = "2px"

    } else if (name.innerHTML === "Hulk") {
        name.innerHTML = "Bruse Banner";
        place.style.background = "#ffb300";
        place.style.fontSize = "130px";
        place.style.letterSpacing = "6px"
    }
}