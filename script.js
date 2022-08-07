// prototype são as propriedades que posso usar depois do ponto

// Manipulando strings e numeros

// let word = 'programação';
// console.log(word.length);

// let number = 123;
// console.log(String(number).length);
// eu consigo usar a propriedade length
// apenas com strings e, portanto, é necessário
// converter o number para string

// ----------------------------------------

// TRANSFORMAR UM NUMERO QUEBRADO COM 2 CASAS DECIMAIS
// E TROCAR PONTO POR VIRGULA

// let number = 2872.232387823;
// console.log(number.toFixed(2).replace('.', ','));

// ----------------------------------------
// TRANSFORMAR MAIUSCULAS EM MINUSCULAS E VICE-VERSA
// let word = 'Progromar é muito bacana';
// console.log(word.toUpperCase());
// console.log(word.toLowerCase());

// ----------------------------------------
//Separe um texto que contem espaços, em um novo array
// onde cada texto é uma posição do array. Depois disso,
// transforme o array em um texto e onde eram espaços,
// coloque __

// let phrase = 'Eu quero viver o Amor!';
// let myArray = phrase.split(' ');
// let phraseWithUnderscore = myArray.join('_');
// console.log(phraseWithUnderscore);

// metodo split ele transforma o texto em um array
// e tbm ele usa o metodo de separação desse array
// o metodo join transforma de array para string
// e tbm posso utilizar um separador

// ----------------------------------------
//Verificar se o texto contém a palavra amor
// let phrase = 'Eu quero viver o Amor!';
// console.log(phrase.includes('Amor'));
// metodo includes verifica se tem a palavra amor

// ----------------------------------------
// Criar um array com construtor

// let myArray = ['a', 'b', 'c'];
// console.log(myArray);
// let myArray = new Array('a', 'b', 'c');
// console.log(myArray);

// ----------------------------------------

// transformar uma cadeia de caracteres em elementos
// de um array

// let word = 'manipulação';
// console.log(Array.from(word));

// ----------------------------------------
// let techs = ['html', 'css', 'js'];
// // // adicionar um item no fim
// techs.push('react');
// // // adicionar no começo
// techs.unshift('sql');
// // remover do fim
// techs.pop();
// remover do começo
// techs.shift();
// pegar somente alguns elementos do array
// console.log(techs.slice(1, 3));
// remover 1 ou mais itens em qualquer posição do array
// techs.splice(0, 2);
// encontrar a posição de um elemento no array
// let index = techs.indexOf('css');
// techs.splice(index, 1);
// console.log(index);

// const nome = 'matheus campos cunha rodrigues';
// console.log(nome.slice(10));

const nome = 'joao jose da silva xavier';
nameResultante = nome.slice(1, 9);
console.log(nameResultante);
