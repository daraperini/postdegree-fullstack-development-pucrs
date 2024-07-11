const funcoes = require("./funcoes");

test("Dois mais dois deverá ser quatro", () => {
  expect(funcoes.somarDoisValores(2, 2)).toBe(4);
});

test("Deve ser null", () => {
  expect(funcoes.sempreNulo()).toBeNull();
});

// Códigos válidos: 100, 101, 500, 999
// Códigos inválidos: -1, 5, 1000

test("Codigo 100 deve ser permitido", () => {
  expect(funcoes.codigoValido(100)).toBeTruthy();
});

test("Codigo 101 deve ser permitido", () => {
  expect(funcoes.codigoValido(101)).toBeTruthy();
});

test("Codigo -1 deve ser permitido", () => {
  expect(funcoes.codigoValido(-1)).toBeFalsy();
});

// Inverter string
// Java -> avaJ
test("Deve inverter uma String Java -> avaJ", () => {
  expect(funcoes.inverterString("Java")).toEqual("avaJ");
});

const casosInversaoStrings = [
  ["Daniel", "leinaD"],
  ["ANA", "ANA"],
  ["Jest", "tseJ"],
];
describe("Inversao de Strings", () => {
  test.each(casosInversaoStrings)(
    "inversao de %p -> %p",
    (original, inversaoEsperada) => {
      const resultado = funcoes.inverterString(original);
      expect(resultado).toEqual(inversaoEsperada);
    }
  );
});

// Não testar a funcao funcaoNaoTestada()
// jest --coverage anuncia que não existe um caso de teste para essa função

// Teste de chamadas de APIs
// jsonplaceholder.typicode.com

// Usando Promise
test("[Promise] Deve carregar o primeiro usuário de teste -> Leanne Graham", () => {
  expect.assertions(1); // por ser chamada assíncrona especifica quantas asserções espera
  return funcoes.buscarUsuario1().then((dados) => {
    expect(dados.name).toEqual("Leanne Graham");
  });
});

// Usando Async Await
test("[AsyncAwait] Deve carregar o primeiro usuário de teste -> Leanne Graham", async () => {
    expect.assertions(1); // por ser chamada assíncrona especifica quantas asserções espera
    const dados = await funcoes.buscarUsuario1();
    expect(dados.name).toEqual("Leanne Graham");
  });
