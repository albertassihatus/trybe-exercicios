let word = "tryber";
let inver = "";

for (let index = 0; index < word.length; index +=1){
    inver += word[word.length - 1 - index];
} 

console.log(inver);