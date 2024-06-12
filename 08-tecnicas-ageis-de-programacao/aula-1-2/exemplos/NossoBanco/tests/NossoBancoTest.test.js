const ContaBancariaNossoBanco = require("../src/ContaBancariaNossoBanco");

describe("comportamento da ContaBancariaNossoBanco.jsx", () => {
  test("dado que meu saldo é R$600,00, quando solicito um saque de R$200,00 o saldo final deve ser R$400,00", () => {
    // DADO QUE
    //      meu saldo é +R$600,00
    const contaBancaria = new ContaBancariaNossoBanco(600);

    // QUANDO
    //      solicito sacar R$200,00
    contaBancaria.saque(200);

    // ENTÃO
    //      meu saldo passa a ser +R$400,00
    expect(contaBancaria.getSaldo()).toBe(400);
  });

  test("dado que meu saldo é R$600,00, quando solicito um saque superior a R$500,00 o saque não deve ser realizado e o saldo deve se manter em R$600,00", () => {
    // DADO QUE
    //      meu saldo é +R$600,00
    const contaBancaria = new ContaBancariaNossoBanco(600);

    // QUANDO
    //      solicito sacar valor acima de R$500,00
    contaBancaria.saque(501);

    // ENTÃO
    //      o saque não é realizado
    //      meu saldo deve permanecer +R$600,00
    expect(contaBancaria.getSaldo()).toBe(600);
  })
});
