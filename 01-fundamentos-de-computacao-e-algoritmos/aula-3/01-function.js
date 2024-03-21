// funções, comandos de repetição, de seleção e operações aritméticas

function avaliaParidade(limiteSuperior) {
    for (let i = 0; i < limiteSuperior; i++) {
      if (i % 2 == 1) {
        console.log(i + " é um número ímpar");
      } else {
        console.log(i + " é um número par");
      }
    }
  }
  
  avaliaParidade(10);