// TDD - Test Driven Development

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