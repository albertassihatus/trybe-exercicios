// 1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados.

const a = 10;
const b = 30;

//Adição
console.log(a+b);

//Subtração
console.log(a-b);

//Multiplicação
console.log(a*b);

//Divisão
console.log(a/b);

//Módulo
console.log(a%b);



// 2. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

const c = 50;
const d = 80;

    if (c > d) {
        console.log(c, "é maior que", d);
    } else {
        console.log(d, "é maior que", c);
    }

// 3. Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const e = 100;
const f = 20;
const g = 50;

    if(e > f && e > g){
        console.log(e, "é o maior");
    } else if (f > e && f > g) {
        console.log(f, "é o maior");
    } else {
        console.log(g, "é o maior");
    }


// 4. Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

const pos = 5

    if (pos > 0){
        console.log("positive");
    } else if (pos <0){
        console.log("negative");
    } else{
        console.log("zero");
    }

// 5. Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.

const x = -90;
const y = 35;
const z = -60;
const result = (x+y+z);

console.log(result);

    if(result == 180){

        console.log(true);
    } 
    else if (result != 180 && result > 0){
        console.log(false);
    } else {
        console.log("invalido");
    }


// 6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)

const xadrez = "bispo";

    switch (xadrez.toLowerCase()){
        case 'bispo':
            console.log(xadrez, "-> Diagonal.");
            break;
        case 'rei':
            console.log(xadrez, "-> Qualquer direção 1x");
            break;
        case 'cavalo':
            console.log(xadrez, "-> Se move em L");
            break;
        default:
        console.log("Peça inválida")
    };


// 7. Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

const nota = 100;

    if(nota <= 0 || nota >= 101){
        console.log("erro");
    }
    else if (nota >= 90){
        console.log("A");
    } else if (nota >=80) {
        console.log("B");
    } else if (nota >=70) {
        console.log("C");
    } else if (nota >=60) {
        console.log("D");
    } else if (nota >=50) {
        console.log("E");
    } else {
        console.log("F");
    }


