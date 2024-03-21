// Código desenvolvido com o objetivo de explorar Maps no JavaScript.
// Utilização do Map de forma a demonstrar que esta estrutura de dados identifica dados de acordo com um par chave-valor
// Demonstração de sobreposição de valor quando evocada mesma chave em dois ou mais momentos diferentes.

var novoMapa = new Map();

class HistoryMap {

}

// Exemplo de histórico de navegação com acesso ao mesmo site várias vezes no mesmo minuto
novoMapa.set('11/11/2011 - 23:30 - URL', {title: 'Titulo do MESMO Site', url: 'url sozinha'});
novoMapa.set('11/11/2011 - 23:30 - URL', {title: 'Titulo do MESMO Site', url: 'url sozinha'});
novoMapa.set('11/11/2011 - 23:30 - URL', {}); // última chamada da chave sobrepõe todas as anteriores
novoMapa.set('11/11/2011 - 23:31 - URL', {});

var resultado = novoMapa.get('11/11/2011 - 23:30 - URL');

console.log(resultado);