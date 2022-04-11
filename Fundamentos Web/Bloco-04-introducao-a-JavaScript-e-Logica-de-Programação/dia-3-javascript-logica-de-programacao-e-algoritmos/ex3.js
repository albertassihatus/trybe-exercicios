
let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = "";
let menor = "";

for (let index = 0; index < array.length; index +=1){
    if( array[index] > array){
        maior += array[index];
        console.log(maior);
        break;

      }
    if( array[index] < array){
        menor += array[index];
        console.log(menor);

    }
}