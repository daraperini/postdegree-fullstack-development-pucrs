# Programação para Web

## Arquitetura

- Arquitetura de 3 camadas (cliente-servidor):
  - camada de apresentação (front)
  - camada de negócios (back)
  - camada de dados (bd)

- Arquitetura orientada a serviços:
  - divisão da aplicação em serviços independentes, que podem ser acessados por outros serviços ou aplicativos
  - cada serviço é responsável por uma tarefa específica
  - podem ser atuializados ou substituídos sem afetar outros serviços

- Arquitetura baseada em microsserviços:
  - variação da última, dividida em microsserviços independentes que se comunicam entre si por meio de APIs

- Dimensões do projeto:
  - estrutural: define organização das infos a serem tratadas pela aplicação e seus relacionamentos
  - navegacional: define como as infos serão acessadas através da aplicação
  - apresentação: define como as infos e o acesso a elas serão apresentados ao usuário

## Aplicações web x Web sites

- Aplicações web:
  - enfatizam aspectos relacionados à aplicabilidade e funcionalidade

- Web sites:
  - ênfase na aparesentação, aparência e navegação

## Protocolos

- Convenção que controla e possibilita conexão, comunicação e transferência de dasdos entre 2 sistemas computacionais
- Regras que governam a sitaxe, semântica e sincronização da comunicação

- De transporte: 
  - comunicação confiável e eficiente entre aplicativos em diferentes dispositivos
  - TCP: complementado pelo IP. Adequado pra grandes redes de computadores (www). Garante transmissão e chegada correta e na ordem correta (confiabilidade).
  - UDP: sem garantia de que o pacote de dados chegue ao destino de forma correta. IPv4 e IPv6. Não confiável e menos seguro, mas mais rápido. Principalmente para jogos.

- De aplicação: 
  - comunicação entre aplicativos em diferentes dispositivos de rede
  - comunicação confiável e correta, sem erros
  - HTTP: transferência de dados na web. Define como e o formato dos dados. Solicitação-resposta. HTTPS: seguro (http sobre TLS).
  - FTP: upload e download de arquivos entre um cliente e um servidor. Transferência de grandes arquivos é possível.
  - SMTP: transferência de emails.
  - DNS: resolve nomes de domínio em endereços IP.
  - SSH: comunicação segura entre computadores em uma rede. Permite acesso remoto seguro.
  - TLS: critografia e comunicação entre computadores em uma rede.


## SPA

arquitetura:
- view: camada de apresentação
- modelo: camada de dados que contém lógica de negócios e os dados do app
- controlador: controla todas as interações do usuário e atualiza modelo e view
- serviços: faz chamadas ao servidor, disponibiliza dados em tempo real
- roteamento: para navegar em diferentes partes da aplicação sem recarregar a página
- gerenciador de estado: mantém o estado da aplicação e garante que seja consistente em toda ela

## MPA

Ações do usuário resultam no carregamento de uma nova página específica.
Cada página tem sua lógica de negócio.
Comunicação por solicitação HTTP em resposta de solicitaçao do usuário.

arquitetura:
- desenvolvida no lado do servidor
- cada página é carregada a partir do servidor em resposta a uma requisição do cliente
- front, back, bd
- camada de middleware

estratégias para melhora de performance:
- minimizar o tamanho dos recursos
- cache 
- otimização de imagens
- carregamento assíncrono de recursos
- CDN (servidor de entrega de conteúdo)
- minimizar solicitações HTTP
- otimização do bd
- monitoramento de desempenho

## PWA - Progressive WebApps

Experiência semelhante a um app móvel nativo, mas executado em navegador web.

Para ser uma PWA deve:
- ser encontrável por mecanismos de busca
- ser instalável
- ser compartilhável por meio de URL
- funcionar offline 
- usar aprimoramento progressivo
- enviar notificações
- ser responsiva
- ser segura

Sempre hospedadas em HTTPS

- Service workers: uma das principais tecnologias que tornam PWA possíveis. Scripts em segundo plano que executam funções sem a necessidade de interação do usuário e permitem o funcionamento offline. Intermediário entre app web e rede, interceptando solicitações de rede e permitindo que os apps respondam com conteúdo armazenado em cache, mesmo sem conexão com a internet. Quando a conexão é restabelecida, sincronizam as atualizações com o servidor.
  - Cache de recursos
  - atualização em segundo plano
  - notificações push
  - gerenciamento de erros
  - sincronização em segundo plano

- O Manifesto da Web em PWA: arquivo JSON que contém infos sobre a PWA. Configura experiência do usuário ao instalar e atualizar a PWA em dispositivos móveis. Permite que a aplicação crie um ícone no dispositivo móvel.

## Projetos web

1- interface
2- layout -  cores, como dividir conteúdo...
3- conteúdo - o que deve incluir
4- navegação - como será a navegação
5- arquitetura
6- componentes

arquiteturas:
- Modelo-Visão-Controlador: modelo contém todo conteúdo e lógica de processamento específicos, visão contém todas as funções específicas e possibilita apresentação do conteúdo e lógica de processamento, controlador gerencia o acesso ao modelo e à visaõ e coordela fluxo de dados entre eles