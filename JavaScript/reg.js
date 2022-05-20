let text = "name:Xiang age:23 work:Student 88:1999";

let reg = /[0-9]+/g;
let reg2 = /^[a-z]+/g;
let reg2_1 = /[a-z]+/g;
let reg3 = /:[a-zA-Z]+/g;

/*console.log(text.match(reg))
console.log(text.match(reg2))
console.log(text.match(reg2_1))
console.log(text.match(reg3))*/
for(let i of text.match(reg3)){
    console.log(i)
    for (let j of i){
        if(j!=":")console.log(j);
        else;
    }
}