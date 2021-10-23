"use strict"

let und //undefined;
let num = 13;
let big = 69696969n;
let boo = true;
let str = "Superhero";
let sym = Symbol('id');
let obj = new Object();  
obj = {name:"Bruce Wayne", alias: "Batman"};
let nul = null;
function fun(){
    return "13";
}

let res = "num is " + typeof(num) + "\n";
res += "und is " + typeof(und)+ "\n";
res += "big is " + typeof(big)+ "\n";
res += "str is " + typeof(str)+ "\n";
res += "sym is " + typeof(sym)+ "\n";
res += "obj is " + typeof(obj)+ "\n";
res += "nul is " + typeof(nul)+ "\n";
res += "fun is " + typeof(fun)+ "\n";

alert(res);