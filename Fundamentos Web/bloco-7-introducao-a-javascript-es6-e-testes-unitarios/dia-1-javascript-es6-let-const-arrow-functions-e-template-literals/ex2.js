const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const oCrescente = (a, b) => (a - b);
oddsAndEvens.sort(oCrescente);

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);