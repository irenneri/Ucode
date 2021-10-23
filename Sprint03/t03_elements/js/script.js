let char = document.getElementById("characters").children

for (let i = 0; i < char.length; i++) {
    let getClass = char[i].getAttribute("class")
    let getData = char[i].getAttribute('data-element')
    if (!getClass || (getClass != 'good' && getClass != 'evil')) {
        char[i].className = "unknown"
    }
    if (!getData) {
        char[i].setAttribute("data-element", 'none')
    }
    getData = char[i].getAttribute('data-element').split(' ')
    char[i].appendChild(document.createElement('br'))
    for (let j = 0; j < getData.length; j++) {
        let div = document.createElement('div')
        div.className = `elem ${getData[j]}`
        if (getData[j] == 'none') {
            let line = document.createElement('div')
            line.className = 'line'
            div.appendChild(line)
        }
        char[i].appendChild(div)
    }
}