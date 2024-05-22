# Arquitetura cliente-servidor para Aplicações Web

- `Introdução`:
  - Experiência do usuário:
    - Tempo de carregamento percebido
    - Acessibilidade
  - Renderização = injetar dados em um HTML
  - Renderização no lado do cliente, hoje em dia, não parece uma boa ideia? Front-ends muito pesados. Cliente faz solicitações separadas para cada dado necessário e o back responde com o dado solicitado.
  - Renderização no lado do servidor prepara a página no servidor e o cliente precisa somente realizar uma solicitação de um dado, que será enviado e exibido no browser. No passado funcionava melhor, sendo que se utilizava linguagens como PHP e Java para desenvolver as aplicações do lado do servidor e apenas enviar para o browser quando solicitado. A limitação de rede impedia que a renderização fosse feita no lado do cliente porque não era possível enviar todos os dados necessários de forma eficiente. Segurança só é totalmente garantida no lado do servidor.
  - Pré-renderização é uma boa estratégia.

- `Client-side Rendering`:
  - Angular e React permitem essa abordagem;
  - Browser faz a busca dos códigos no servidor, que serve apenas para hospedar os dados/códigos, e renderiza a página.
  - Solicitação é sempre direcionada para apenas um arquivo HTML (index.html)
    - SPAs
  - O browser compila tudo antes de renderizar o conteúdo.
    - Pode demorar mais no primeiro acesso
    - LocalStorage faz cache dos dados para deixar os próximos acessos mais rápidos
  - Com uma internet boa, é muito mais rápido que SSR
  - Hoje, num acesso a um site, o browser faz solicitação para o servidor e baixa a página HTML, e depois faz o mesmo com os arquivos JS (os dados).
    - No JS existem rotinas implementadas através do AJAX com objetivo de fazer a coleta dos dados que deverão ser inseridos no HTML passivo.
    - Rest API baixa os dados do JS.

- `Server-side Rendering`:
  - Era muito utilizada no passado.
  - Era possível criar uma página da Web no lado do servidor, onde já fazia a compilação, incluía os dados e entregava uma página HTML totalmente preenchida ao cliente, como se fosse uma imagem.
    - Sempre que o usuário nevagava para outra rota o servidor tinha que refazer esse processo
  - É usado para buscar dados e pré-preencher uma página com conteúdo persolanizado. 

- `Pré-renderização`:
  - Partes da aplicação são exibidos enquanto os dados ainda não chegaram ao browser.
  - Parte do lado do servidor, parte do lado do cliente.
  - Faz pré-renderização no lado do servidor e envia para o cliente enquanto os dados ainda não foram enviados.
    - Algumas partes da renderização é importante ser feita no lado do servidor:
      - Segurança - manter dados sensíveis no backend
        - Tela de login renderizando no server side, resto da aplicação no client side
  - Ainda é necessário um proxy ou algo que redirecione o usuário para o arquivo correto.
    - Em uma SPA, o sistema de rotas é mantido pelo lado do cliente. Recebe o index.html e faz o roteamento de acordo com a solicitação do usuário.
    - Informando ao proxy cada rota, ele consegue redirecionar o usuário para a rota solicitada. Faz a solicitação dos dados da rota silenciosamente.
  - loading screen => skeleton => fuly-rendered page

- `Node.js`: Faz o papel do navegador na utilização de JS no backend. É o compilador capaz de interpretar o código JS no backend.
  - `Nest.js`: framework mais utilizado para Node.js, mais opinado. Impede falhas, erros e construção errada de arquitetura.
  - `Express`: framework Node.js mais simples, menos opinado e mais difundido. Permite mais customização.
- `JS no backend`:
  - Vantagens:
    - Reutilização de códigos
    - Time com skills convergentes
    - Velocidade de desenvolvimento
  - Desvantagens:
    - Menor performance por ser uma linguagem interpretada
    - Apresenta problemas semânticos

- Independentemente da linguagem de backend escolhida, ela sempre vai necessitar de um framework para implementar um servidor web. É necessário ter um biblioteca que fará a comunicação HTTP.
  - As linguagens em forma vanilla por si só não têm a capacidade de implementar um servidor web porque foram criadas simplesmente para que os códigos possam ser interpretados e convertidos para linguagem que a máquina entenda (binário).
  - Não vem por padrão nas linguagens a camada simples de rede.

## Nest.js

- `JS Back-end Development`:
  - Produtividade
  - Performandce
  - Escalabilidade

- `Nest.js`: 
  - um framework opinado -> construído para que o programador seja direcionado para um caminho que siga boas práticas em termos de arquitetura.
    - Não permite que o desenvolvedor escolha como arquiteturar o software
  - Baseado em Express
  - Compatível com Fastify
  - Escrito em TypeScript
  - Respeita princípios de SOLID
  - Suporta DDD
  - @Decorators: são declarados antes da declaração de um método e podem modificar as definições desse método. Devem sempre estar acoplados a um método, função, classe...
    - `@Controller`: Define uma classe controller
    - `@Injectable`: Permite injetar dependências. Permite que a função seja utilizada como dependência.
    - `@Get`: Define que a função é executada quando o método get for utilizado na url definida.
    - `@Post`: Define que a função é executada quando o método post for utilizado na url definida.
    - `@Optional`: Permite que a dependência do componente/classe seja opcional.
    - `@Module`: Cria um módulo.
    - `@Global`: Dá acesso global ao componente. Não é uma boa prática.
    - `@Catch`: Para tratar excessões.
    - `@UsePipes`: Cria Pipes.
    - `@IsString`: Verificação. Utilizada dentro de classe para verificar em tempo de execução se o parâmetro passado é uma string. TypeScript só avalia tipos de parâmetros no tempo de build.
    - `@IsNotEmpty`: Verificação.
    - `@MinLength()`: Verificação.
    - `@IsURL()`: Verificação.

- `main no Nest.js`:
    - ex.:
`       async function bootstrap() {
          const app = await NestFactory.create(ModuloRaiz);
          await app.listen(3000);
        }
        bootstrap()`
  - Em que ModuloRaiz importa módulos que criam a aplicação

- `REST API`:
  - Modelo de comunicação Webservice
  - Padrão restfull
  - Padrão que tem como objetivo fornecer os dados, não fornecer os códigos:  
    - Os códigos são baixados pelo cliente através do protocolo HTTP

- `Controllers`: Representam camada de arquitetura que faz o tratamento dos dados que chegam por um canal HTTP.
    - Client side faz a requisição HTTP, que ativam os controllers no backend, que resolvem múltiplas APIs, com resposabilidades isoladas.
      - Requisições de dados!
    - Classe que possui todas as callbacks para tratar todas as requisições
    - ex.:
`       import {Get, Controller} from '@nestjs/common'
        @Controller('url')
        export class NomeController {
          constructor ((@Optional) injeção de dependência) {}
          @Get()
          funcaoController{retorno}
        }`

- `Providers`: São os services. Acessam serviços externos, biblioteca externas, frameworks, midwares... se conectam com outros componentes para prover alguma funcionalidade dentro da arquitetura. 
  - ex.: acessa banco de dados, busca o dado necessário e retorna o dado. 
  - ex.: 
`       import {Injectable} from '@nestjs/common'
        @Injectable()
        export class NomeProvider {
          funcaoProvider(){
            retornaServiço
          }
        }`
      - Injectable = Costumamos usar em serviços porque normalmente o controller depende do serviço, assim podemos injetar o provider dentro da classe controller.

- `Modules`: Quebra do sistema em partes menores.
  - Facilitam reuso de código. 
  - Pode-se pensar neles como microsserviços.
    - Organizados internamente por múltiplas camadas com múltiplas responsabilidades.
      - Cada Module possui camada de serviços, de controllers, de model...
    - Podem existir submódulos que dependam de outros módulos
      - Como uma arquitetura em árvore
  - ex.: 
`       import {Module} from '@nestjs/common'
        @Module({
          imports: [],
          controllers: [],
          providers: [],
          exports: [],
        })
        export class NomeModulo {}`
  - class CoreModule {}: onde importamos e exportamos módulos que serão usados de forma mais global no sistema.
    - Também podemos usar @Global.

- `Middlewares`: Faz a intermediação de acesso entre duas entidades.
  - Muito utilizado em cloud computing.
    - Dentro do Nest.js, pode ser visto como um provider.
  - ex.: 
`       import {Injectable} from '@nestjs/common'
        @Injectable()
        export class NomeClasseMiddleware implements NomeMiddleWare {
          funcaoProvider(){
            retornaServiço
          }
        }`

- `Pipes`: Muito utilizado em streaming de dados.
  - Pega o dado de saída de um componente e insere na entrada de outro.
  - Mecanismo para conectar uma entrada com uma saída de diferentes componentes.
  - Muito utilizado para transformar dados.

- `Testing`: jest é padrão para construção de testes unitários.
  - Analisa se a saída da função é a esperada.

- `API Doc`: documentação de Rest API.
  - Indica como terceiros devem se comunicar com a sua API, os tipos de dados...
  - Pode utilizar Swagger para criar documentação.
  - ex.:
`       async function bootstrap() {
          const app = await NestFactory.create(ModuloRaiz);

          const options = new DocumentBuilder()
            .setTitle('')
            .setDescription('')
            .setVersion('')
            .addTag('')
            .build();
          const document = SwaggerModule.createDocument(app, options);
          SwaggerModule.setup('api', app, document);

          await app.listen(3000);
        }
        bootstrap()`

- `Interceptors`: interceptar requisições e respostas da API
- `Guards`: definir autorizações dentro dos endpoints
- `GraphQL`: alternativa ao Rest API utilizado muito em microsserviços no backend
- `CORS`: resolução de cross domains
- `Microservices`: implementação de maneira simplificada dos microsserviços
- `WebSockets`: comunicação bidirecional (pode iniciar pelo lado do cliente ou do servidor)
- `CLI`: criação de componentes controller e provider com esqueleto pronto
- `Authentication`:
- `ORM`: para interfacear com camadas de persistência
- `CQRS`: comunicação orientada a eventos entre microsserviços
- `Caching`: aumentar velocidade e performance de requisições
- `Execution context`: 
- `Prisma`: noSQL manager, comunicação com banco de dados