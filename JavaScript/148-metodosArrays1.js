//ARRAYS
let nomes = ['joao', 'ana', 'carlos']
//alterar dados de um array

//quantos elementos tem um array
    console.log(nomes.length)

//adicionar mais elementos no final do array

    nomes.push('mario');
    console.table(nomes);

//adicionar elementos no início do array

    nomes.unshift('jose');
    console.table(nomes);

// como remover do início

    nomes.shift();
    console.table(nomes);

// como remover um elemento do fim ?

    nomes.pop()
    console.log(nomes)

// remover elementos permite guardar o valor removido numa variável.

let removido = nomes.pop();
console.log(removido);
console.log(nomes);

//remover e/ou adicionar elementos em qualquer posição dentro do array.

console.table(nomes);
let eliminados = nomes.splice(1,2,'joaquim', 'manuel','rui')
console.table(nomes);





