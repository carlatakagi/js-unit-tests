/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (arrayNumero) => {
  // add your implementation here
  let soma = 0;
    
  if (arrayNumero.length === 0) {
    return undefined;
  }

  // for que percorre o array
  for (let i = 0; i < arrayNumero.length; i += 1) {
    // se o tipo do array na posição i for diferente de number, retorna undefined
    if (typeof arrayNumero[i] !== 'number') { // array vazio e aproximacao
      return undefined;
    }
    // se for number, soma a variavel soma com o numero na posicao que estiver o array
    soma += arrayNumero[i];
  }
  return Math.round(soma / arrayNumero.length); // retorna valor aproximado
};

// console.log(average([3, 4, 5]));

module.exports = average;
