// codigo original
const lista1 = [4, 8, 12, 16];
const r1 = lista.splice(1, 2);
console.log(lista, r);

// forma alternativa #1: slice retorna uma cópia dos elementos, mantendo lista intacta.
const lista2 = [4, 8, 12, 16];
const r2 = lista.slice(1, 3);

console.log(lista, r);

// forma alternativa #2: O splice atua apenas na cópia, preservando o array original.
const lista3 = [4, 8, 12, 16];
const copia = [...lista];
const r3 = copia.splice(1, 2);

console.log(lista, r);

