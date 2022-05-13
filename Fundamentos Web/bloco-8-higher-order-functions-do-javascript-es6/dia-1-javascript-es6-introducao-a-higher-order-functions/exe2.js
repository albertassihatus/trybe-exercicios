const gerarNumero = () => {
    const nSorteado =((Math.random()* 5)+1);
    return Math.floor(nSorteado);
}


const resultadoFinal = (nSorteado, callbackResult) => {
    return nSorteado === callbackResult() ? `Parabéns você ganhou` : `Tente novamente`;
}

console.log(resultadoFinal(5, gerarNumero));
