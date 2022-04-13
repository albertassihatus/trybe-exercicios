let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

//   console.log('Bem-vinda, ' ,info.personagem);

 info.recorrente = 'Sim';

// console.log(info);

// for (let index in info){
//     console.log(info[index]);
// }

let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
  };


  for (let index3 in info){
      if (index3 === 'recorrente' && info[index3] === 'Sim' && info2[index3] === 'Sim')
      {console.log('Ambos recorrentes');
  } else {
      console.log(info[index3] , ' e ' , info2[index3]);
  }
      }
