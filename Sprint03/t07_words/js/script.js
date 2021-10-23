let addWords = (obj, wrds) => {
  let arrWords = obj.words.split(" ")
  let arr = wrds.split(" ")
  arr.forEach(i=>{
    if(arrWords.indexOf(i)===-1){arrWords.push(i)}
  })
  return obj.words = arrWords.join(" ")
}

let removeWords = (obj,wrds) => {
  let objArr = obj.words.split(" ")
  let wrdsArr = wrds.split(" ")
  wrdsArr.forEach((i,index)=>{
    objArr.forEach((a,item)=>{

    })
  })
  return obj.words = objArr.join(' ')
}

let changeWords = (obj, oldWrds, newWrds) => {
  let objArr = obj.words.split(" ")
  oldWrds = oldWrds.split(" ")
  newWrds = newWrds.split(" ")
  oldWrds.forEach((word,index)=>{
    if(objArr.indexOf(word)!= -1){
      newWrds.forEach((i,index)=>{
        objArr[objArr.indexOf(word)] = i
      })
    }
  })
  return obj.words = objArr.join(" ")
}

const obj = {
  words : "newspapers newspapers  books magazines newspapers"} ;

  console.log(obj); // {words: "newspapers newspapers  books magazines"}
  
  addWords(obj, "radio newspapers   ");
  console.log(obj); // {words: "newspapers books magazines radio"}
  
  removeWords(obj, "newspapers   radio");
  console.log(obj); // {words: "books magazines"}
  
  changeWords(obj, "books radio  magazines", "tv internet");
  console.log(obj); // {words: "tv internet"}