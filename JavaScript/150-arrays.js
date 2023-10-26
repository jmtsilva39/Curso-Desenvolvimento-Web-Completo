//ARRAYS
nomes = ["joao", "ana", "carlos", "xavier", "catarina", "fernanda"];

//  ordenar um array de forma ascendente (alfabetica) - IMPORTANTE: altera a estrutura do array.

nomes.sort()
console.table(nomes);

//ordena uma array de forma descendente

nomes.sort();
nomes.reverse();
console.log(nomes);



// //sintaxe alternativa.

nomes.sort().reverse();
console.table(nomes);

// //ou ainda.

console.table(nomes.sort().reverse())

//também funciona para arrays númericos, mas ....

let valores = [1,30,20,50,56,45,100]
valores.sort();
console.table(valores);
valores.reverse();
console.table(valores);


