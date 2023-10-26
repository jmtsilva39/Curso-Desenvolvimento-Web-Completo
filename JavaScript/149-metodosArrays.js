let nomes = ["joao", "ana", "carlos"];


///extrair partes de um array (retorna um novo array);

console.table(nomes);
let nomes_extraidos = nomes.slice(0,2);
console.table(nomes_extraidos);

// juntar dois arrays.
console.table(nomes);
let outros_nomes = ["Joaquim", "carla", "manuel"];
nomes = nomes.concat(outros_nomes);
console.table(nomes);

//Procurar item num array

console.log(nomes.includes("carlos"));
console.log(nomes.includes("mane"));

//Procurar posição de item num array;

console.table(nomes);
console.log(nomes.indexOf('ana'));

// Converter um array numa string

let todos_os_nomes = nomes.join("-");
console.log(todos_os_nomes);

//Importante: outros métodos envolvem funções e metodologias.

