# Web Services

- Hoje, soluções web são utilizadas para criar os serviços que os usuários necessitam, devido a baixa complexidade de distribuição das soluções web.
- Usuário interage através de entrada de dados e espera receber uma saída de dados ou feedback.

- Hoje, uma empresa desenvolve um serviços que é composto por diversos microsserviços
  - Novas arquiteturas fazem integração entre microsserviços, e os webservices permitem essa integração.

- `Web Service`: é um componente de software independente fracamente acoplado que engloba funcionalidade discreta que pode ser atribuída e acessada por meio de uma aplicação, através de protocolos padrão.
  - Tem como função *expor funcionalidades* de um sistema de informação e *torná-lo disponível*
    - Estabelece as comunicações necessárias para isso
  - Características:
    - Objetos remotos
    - Residem em um servidor web e têm um endereço URL
    - Trabalham sobre o modelo de requisição/resposta
    - Utilizam protocolos que facilitam a comunicação entre sistemas independentes do sistema operacional e da linguagem de programação
    - Objetos para soluções fracamente acopladas

## Arquiteturas Web

- Entrada de dados se dá através dos usuários ou sistemas externos
- Saída de dados para os usuários ou para locais de persistência (banco de dados)

- Base de uma arquitetura de web service:
  - `Camada de apresentação`: onde o usuário/sistema externo faz a entrada de dados para realizar uma solicitação
  - `Camada de serviços`: recebe os dados/solicitação e faz a comunicação com os microsserviços, distribuindo os dados conforme as resposabilidades
  - `Camada de business`: onde efetivamente os microsserviços fazem sua função
  - `Camada de dados`: recebe os dados de serviços concluídos e armazena de forma persistente (ou envia para outro serviço, que fará algo a mais com os dados reunidos)

- `Web`: World Wide Web é um espaço de infos no qual os recursos são identificados por identificadores globais chamados Uniform Resource Indentifiers (URI)

- `Protocolo HTTP (Hipertext Transfer Protocol)`: Utilizado para comunicação entre servidores e aplicativos web. Manual de instruções definido globalmente para todas as comunicações web.
  - Protocolo de nível de aplicação (implementado no navegador e no serviço web)
  - Textual
  - Baseado em mensagens de requisição/resposta no modelo cliente/servidor
    - Enquanto resposta não chega o usuário pode ficar bloqueado
  - Sem manutensão de estado
  - `URL - Uniform Resource Locator`: identificada um servidor
  - `Requisição HTTP`: consiste em:
    - Uma linha inicial
    - Um ou mais campos de cabeçalho
      - Informações referentes ao protocolo que deve ser encaminhado com a mensagem para que ela chegue no seu destino (ex.: URL)
    - Uma linha em branco
    - Possivelmente um corpo da mensagem
  - `Resposta HTTP`: consiste em:
    - Uma linha de status com seu código e mensagem associada
    - Um ou mais campos de cabeçalho
    - Uma linha em branco
    - Possivelmente um corpo de mensagem
  - `Métodos`:
    - GET
      - Utilizando filtros na própria URL (query string), não passa dados pelo corpo da requisição, passa pelo próprio cabeçalho.
    - POST: Fornece a entrada para um comando do lado do servidor e devolve o resultado
      - Dados enviador pelo corpo da requisição (pode ser qualquer tipo). Requisição envelopada. No cabeçalho já diz que é uma requisição do tipo POST e indica qual é o tipo de dados que está sendo enviado no body (Content-Type, Content-Lenght).
    - PUT: Update
    - DELETE
    - TRACE: Rastreia a comunicação com o servidor

## Web Services

### SOAP

- Padrão de payload (parte dos dados transmitidos que é a mensagem real pretendida): XML
- Protocolo SOAP *define regras* de como descrever, organizar, o que deseja acessar no usuário, *através do payload*
- Ele diz respeito a padronização da mensagem, e não sobre como o transporte da mensagem deve ser realizado
  - `WSDL`: arquivo que descreve todas as operações que existem dentro daquele web service
- Troca de mensagens acontece com envelpes SOAP que encapsulam dados XML
  - Possui nome do método, parâmetros e valores de retorno do método
  - As requisições são feitas dentro do próprio payload
- Possibilita utilização de segurança e assinatura dentro da própria mensagem (payload) SOAP

### REST

- Padrão de payload pode ser qualquer um, comumente `JSON`: Isso porque *passamos pelo cabeçalho todas as informações referentes ao tipo de método que queremos utilizar*, e não no payload como é no SOAP. Não existe um padrão de payload porque as mensagens não precisam ser estruturadas de x maneiras para o web service entender o que queremos.
  - Pela facilidade de serialização pelas linguagens opta-se normalmente pelo JSON
- Estilo arquitetural de uso do HTTP
- Web Services que utilizam REST são chamados RESTfull

- `Características`:
  - Serviço sem estado
  - Baseado no protocolo HTTP/HTTPS
    - Utiliza os próprios verbos HTTP para descrever o tipo de operação e lista os métodos disponíveis com aquela operação
  - Dados e funcionalidades são acessados via URIs
  - Infraestrutura mais leve que SOAP

- `Arquitetura`: baseada em 4 princípios:
  - Identificação dos recursos que devem ser externalizados atraves de URIs (cada uma precisa ter o seu caminho)
  - Interface uniforme de acesso aos recursos (operações de criação, leitura, alteração e remoção)
  - Mensagens autodescritivas
  - Iteração com manutenção de estado através de hiperlinks

### GraphQL

- Evolução do SOAP e REST
- Começa com a definição de um `esquema` (template): descreve todas as consultas que se pode fazer em uma API do GraphQL e todos os tipos que retornam
- Cliente pode validar consulta 
- Operações do GraphQL é interpretada em todo o esquema e resolvida com dados para o aplicativo de front-end. É enviada uma consulta massiva ao servidor e retornado uma resposta com a mesma forma dos dados solicitados
  - Permite fazer uma requisição com uma única URI que será convertida em múltiplas requisições resolvidas por multiplos microsserviços.
  - Query permite filtros, evitando envio de dados desnecessários (acontece quando utilizado REST)
- Muito utilizada em arquiteturas orientadas a microsserviços

- *gRPC*: faz a comunicação entre microsserviços
