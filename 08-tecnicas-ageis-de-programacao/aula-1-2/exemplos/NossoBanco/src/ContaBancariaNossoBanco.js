module.exports = class ContaBancariaNossoBanco {
  constructor(saldo) {
    this.saldo = saldo;
  }

  saque(valor) {
    if (valor > 500) return;
    this.saldo -= valor;
  }

  getSaldo() {
    return this.saldo;
  }
};
