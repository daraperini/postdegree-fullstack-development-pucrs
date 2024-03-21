// O objetivo desse código foi aplicar o conceito de funções recursivas, aquelas que chamam a si mesmas até que o problema esteja resolvido

function fatorial(number) {
  if (number < 0) {
    return undefined;
  }

  let total = 1;
  for (let n = number; n > 1; n--) {
    total = total * n;
  }

  return total;
}

console.log(fatorial(5));

// Fatorial Recursivo

function fatorialRecursivo(n) {
  if (n === 1 || n === 0) {
    return 1;
  }

  return n * fatorialRecursivo(n - 1);
}

console.log(fatorialRecursivo(5));
