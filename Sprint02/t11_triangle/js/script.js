function myTriangle(length) {
    let result = ""
  for (let i = 0; i <= length; i++) {
    result += "*".repeat(i) + '\n';
  }
  return result;
  }
  alert(myTriangle(6))
  
