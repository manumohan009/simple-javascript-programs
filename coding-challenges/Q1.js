// Program to find the no of occurrences of a character in a string

let str = 'manumohanan'
let arr = []

for(i=0;i<str.length;i++){
    let count=0;
    let character;
    if(!arr.includes(str[i])){
        character = str[i]
    } else {
        continue
    }
    for(j=0;j<str.length; j++){
        if(str[j] === character){
            count ++
        }
    }
    arr.push(character)
    console.log(character, count)
}