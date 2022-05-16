const expectedResult = {
    author: {
      birthYear: 1948,
      name: 'George R. R. Martin',
    },
    genre: 'Fantasia',
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    releaseYear: 1991,
  };
  
  function getNamedBook() {
    // escreva seu código aqui
     return expectedResult.find((element) => element.name.length === 26);
  }
  
  console.log(getNamedBook());