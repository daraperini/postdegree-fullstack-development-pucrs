# Web Services

[Repositório](https://github.com/cassiowt/CursoWEBService/tree/master) do Prof. Cassio com exemplos explicados. 

## Histórico

- `ARPANET`:
  - 1969 nos EUA
  - Primeira rede de computadores, desenvolvida para transmissão de dados militares sigilosos e interligação dos departamentos de pesquisa 
  - Importante lembrar que, para existir comunicação entre computadores, existem protocolos de comunicação:
    - TCP - Protocolo de Controle de Transmissão
    - IP - Protocolo de Internet
      - TCP/IP - Protocolo de Transmissão de IPs
      - IP = número que representa uma máquina 
    - FTP - Protocolo de Transferência de Arquivos

- `Tecnologias de rede de computadores`:
  - `LAN (Local Area Network)`: rede local. Alta velocidade, acesso privativo, limitada a uma área geográfica.
  - `MAN (Metropolitan Area Network)`: rede intermediária entre LAN e WAN. Área geográfica maior, conectando várias LANs. Alta disponibilidade e velocidade.
  - `WAN (Wide Area Network)`: conexão entre várias LANs em diferentes locais, podendo ser próximos ou em outro continente.

- `Internet` = sistema global de redes de computadores interligadas
  - Utiliza TCP/IP para fazer conexão entre redes
  - Rede de várias outras redes
  - Alcance local e global
  - Ligada por uma ampla variedade de tecnologias
  - `www = world wide web`: sistema de documentos em hipermídia que roda em cima da internet

- `World Wide Web`:
  - Funciona com o protocolo `HTTP`:
    - protocolo responsável por distribuir todos os dados que serão enviados e recebidos no web service.
    - HEADER: caracteriza o tipo, formato e contexto da mensagem
    - HTTPS: HTTP com dados criptografados


`Internet - TCP/IP` -> `LAN / MAN / WAN` ->  `World Wide Web - HTTP` -> `Web Services`


- `Arquitetura monolítica`: como os códigos eram arquiteturados inicialmente. Todo o código ficava em um arquivo. Códigos de difícil entendimento e manutenção.
  - Simples de desenvolver (tudo no mesmo arquivo)
  - Simples de testar (mas 1 erro quebrava todo o sistema)
  - Simples de fazer o deploy (mas muito demorado e necessário fazer redeploy sempre que tiver uma alteração)
  - Simples de escalar ("só" adicionar)

- `Arquitetura microsserviços`: divisão de código em partes menores que devem conversar entre si. Utilização de serviços internos e externos.
  - Reutilização de serviços dentro e fora da empresa
  - Produtividade alta por causa da reutilização de serviços
  - Flexibilidade - mudanças são feitas com mais facilidade devido ao isolamento da estrutura dos serviços
  - Manutenção facilitada pelo baixo acoplamento
  - Alinhamento com o negócio
  - Governança (gerenciamento nos processamentos de negócio por meio dos serviços)
  - Interoperabilidade (serviços independem da plataforma e da tecnologia)
  - Integração com outros serviços, aplicativos e sistemas legados
  - Padronizado
  - Abstração - serviços totalmente abstraídos da sua implementação, não interessa como é implementado, apenas que funciona


## Web Services

- É uma nuvem de serviços criados e disponibilizados na internet, que podem ser consumidos por aplicações. Tem as caracterísiticas da arquitetura de microsserviços citadas anteriormente.
  
- `Web Services`: 
  - São componentes de aplicativos
  - Se comunicam usando protocolos abertos (SOAP e ..............)
  - Autocontidos (só resolvem o problema que prometem resolver e mais nada) e autodescritivos (quando olha pra ele você sabe o que ele faz)
  - Podem ser descobertos usando UDDI
    - framework para descrever e integrar serviços de negócios usando a internet
  - Podem ser usados por outros aplicativos
  - Baseados em HTTP e XML
    - XML = Linguagem de Marcação Extensível

- `W3C`: consórcio de grandes empresas da internet que define os padrões da web, inclusive web services.

- `SOAP - Protocolo Simples de Acesso a Objetos`: protocolo de troca de informação estruturadas em uma plataforma descentralizada e distribuída. 
  - Baseado em XML
  - Constituido de um Envelope (funciona como um recipiente de todos os outros elementos da mensagem), com um Cabeçalho e um Corpo
  - APENAS manda uma informação e recebe um resultado
  - SOAP é um(a):
    - Mecanismo para a definição de unidades de comunicação
    - Modelo de processamento
    - Mecanismo para manipulação de erros
    - Modelo de extensibilidade
    - Mecanismo flexível para representação de dados
    - Convenção para a representação de chamadas remotas de procedimentos e respostas
    - Estrutura para um protocolo de vinculação
  - `WSDL - Web Services Description Language`: arquivo com notação XML .wsdl que descreve como o serviço web será utilizado dentro do protocolo SOAP. É um arquivo obrigatório dentro de um servidor SOAP.
    - Cada definição do arquivo é composto por linha de definição, de mensagem e de partes da mensagem.
    - Sempre teremos uma definição de request e outra de response pra cada propriedade do arquivo. Ex.: somarRequest, somarResponse
    - No final do arquivo sempre encontramos o nome do serviço e a porta, e é utilizando esses 2 dados que conseguimos fazer requisições e receber respostas do web service SOAP.

- `REST - Representational State Transfer`: estilo de arquitetura de software que define um conjunto de restrições a serem usadas para a criação de web services. 
  - Usa verbos HTTP para executar informações
    - Envia verbos pelo Header da requisição HTTP
  - Manda, recebe, altera, deleta, inclui dados
    - GET: solicita a apresentação de um recurso específico, retorna apenas dados. Única requisição que é executada pelo browser.
    - POST: submete uma entidade a um recurso específico, frequentemente causando mudança no estado do recurso ou efeitos colaterais no servidor. Executado através de um formulário.
    - DELETE
    - PUT
    - PATH
  - Baseado em arquivos JSON
    - Envia arquivos JSON com requisições HTTP, devolve arquivos JSON com resposta do HTTP

## Web Services na Nuvem

- `Cloud computing`: 
  - Disponibilização sob demanda de recursos computacionais.
  - Armazenamento de dados e capacidade de computação

## Anotações sobre os exemplos práticos

- Criação de servidor com Node.js:
  - `npm init` -inicia projeto node e cria arquivo package.JSON
  - adicionar arquivo `index.js` ao repositório e subir servidor:
    - ver exemplo `helloWorld/index.js`
  - `node index.js`- subir servidor
  - acessar porta do localhost

- Biblioteca SOAP:
  - Para utilizar web services SOAP
  - Quando utilizamo web services SOAP abrir o arquivo WSDL, descer até o final e achar a proriedade name do service e a port
    - A partir dessas 2 propriedades e tendo a url do WSDL podemos criar um cliente que consome o web service e nos devolve uma leitura mais fácil do WSDL
    - Ver exemplo `exemploClienteSOAP/index.js`

- Express para criação de servidor SOAP Node.js:
  - `npm init`
  - `npm install soap` - se for servidor SOAP instalar dependência soap
  - `npm install express` - instala dependência express
    - Todas as dependências ficam dentro do package.json - conferir lá se foi instalado
  - Criar arquivo WSDL - podemos usar ferramentas para criação 
  - Criar `index.js`+
    - importar dependências
    - definir `app = express()`
      - Ver exemplo `exemploServerSOAP/index.js`
  - Para testar, criar cliente que consuma o serviço

- Express para criação de API REST Node.js:
  - Divisão do projeto em:
    - src
      - controllers
      - routes
    - server.js
    - package.json
  - `npm init`
  - `npm install express` - instala dependência express
  - Criar divisão de pastas
    - Ver exemplo `exemploServerREST`
  - Testagem de servidor local REST: postman

![<Testagem do exemploServerREST no Postman>](<testesPostman.png>)

- AWS para criação de web service:
  - Utilização de FaaS para criação de um web service sem necessidade da criação de um servidor ou banco de dados => tudo isso configurado na AWS
  - `DynamoDB` - Banco de dados NoSQL. Criar table para servir como banco de dados:

![<Table DynamoDB>](<tableDynamoDB.png>)

  - `Lambda` - Function as a Service (FaaS). Criar função para consumir o serviço FaaS, linkando com o banco de dados DynamoDB:

![<Serviço criado utilizando LAMBDA>](<lambdaFaaS.png>)

  - `API Gateway` - Roteamento (substitui o express no node puro). Criar API Gateway e definir rotas utilizando os verbos. Associar as funcionalidades Lambda à API Gateway:

![<Criando API com url genérica>](<APIGatewayAttached.png>)

 - SEMPRE AO FINAL LIMPAR TUDO!
   - Se não limpar a AWS continua gerando custos!
   - Lembrar de deletar grupo de log no CloudWatch e roles no IAM.



