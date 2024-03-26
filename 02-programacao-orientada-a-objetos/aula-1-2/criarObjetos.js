// CRIAÇÃO DE OBJETOS

// Literal
const novoObjeto = {
  atributo1: "valorAtributo1",
  atributo2: "valorAtributo2",
};


// Fábricas
function criaNovoObjeto(parametro1, parametro2) {
  return {
    parametro1,
    parametro2,
  };
}

const objetoFabricado1 = criaNovoObjeto("valorAtributo1", "valorAtributo2");
const objetoFabricado2 = criaNovoObjeto("valorAtributo1", "valorAtributo2");
