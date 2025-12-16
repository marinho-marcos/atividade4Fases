const arr = [10, 15, 22, 34, 45, 60];

let processado = 0;

for (let i = 0; i < arr.length; i++) {
  const n = arr[i];

  // verifica se é divisível por 3
  if (n % 3 === 0) {
    // cria o objeto equivalente ao map
    const obj = {
      original: n,
      metade: n / 2
    };

    // soma a metade (equivalente ao reduce)
    processado += obj.metade;
  }
}

console.log(processado);
