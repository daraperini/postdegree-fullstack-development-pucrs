# Arquitetura Server-side

- Construção de serviços, lógicas e informações.


- `MVC - Model View Controller`: separar em 3 grupos: dados (model), apresentação (view) e lógica de negócios (controller).
  - Model = operações e gerenciamento de dados / banco de dados
  - View = apresentação e interface de dados visíveis aos usuários
  - Controller = cérebro. Possui as regras e lógicas de negócios, processamento, funcionalidades...

- `Estruturando um projeto MVC`: 
  - Separar o arquivo em pastas:
    - `controllers`: funções que fazem conexão com o banco de dados e determinam o que deve ser feito ao fazer uma requisição.
    - `routes`: rotas que utilizam requisições (ex.: HTTP) e chamam as funções controllers de acordo com o objetivo da requisição.
      - Dentro do express utilizamos o express.Router() para gerenciamento de rotas.
    - `views`: componentes visuais.
    - `public`: arquivos estáticos.
    - `root`: 
      - `app.js`: onde setamos as rotas (var indexRouter = require('./routes/index') + app.use('/', indexRouter)) que serão utilizadas nas routes para fazer as requisições, setamos também as views, erros... 

- `Programação assíncrona`: paradigma de programação. Permite que uma aplicação execute tarefas em paralelo, em vez de sequencialmente. Ao invés de esperar que uma tarefa seja concluída antes de iniciar outra, elas podem ser executadas simultaneamente ou em segundo plano.
  - Node: por padrão é assíncrono. Vai resolvendo a aplicação enquanto outras coisas ainda não foram resolvidas.

- `Programação reativa`: paradigma de programação. Se concentra na criação de sistemas e aplicativos que respondem automaticamente a mudanças de estado e eventos. Útil para desenvolver aplicativos em tempo real, como aplicativos da web que exigem atualizações em tempo real com base em ações do usuário ou em eventos de sistema.

- `Node.js`: framework server-side baseado em JavaScript. Interpretador JS do lado do servidor. Facilmente escalável; usa modelo de I/O (acesso ao hd) direcionada a evento não bloqueante (que não bloqueia a informação para outra pessoa pegar enquanto node está utilizando), sendo mais leve e eficiente; ideal para aplicações em tempo real com troca intensa de dados através de dispositivos distribuídos (celulares).
  - `Node Package Manager - NPM`: ferramenta do Node.js para o gerenciamento de pacotes. Auxilia na intalação e desinstalação de pacotes, gerenciamento de versões e de dependências dos projetos.
  - `Express`: framework para aplicativo da web do Node.js que implementa serviço HTTP de forma mínima e flexível 
  - `Browser - cliente` request <=> JSON <=> HTTP verbs <=> HTTP <=> response `Node.js - servidor`

- `Express`: framework utilizado pra criação de aplicações server-side.
  - Podemos criar a aplicação seguindo o MVC - Model View Controller
  - no console:
    - `express --view ejs` seta o padrão da parte do view do projeto para ejs (padrão do express)

- `Postman`: para testagem de servidores back-end.
  - Em HTTP conseguimos testar apenas o verbo GET no browser. Os outros precisam de uma ferramenta para serem testados -> Postman
  - `Collections`: cada uma representa uma URL da API que deve ser testada. Pode criar quantas for necessário
    - Criar um template pro projeto utilizando os templates disponíveis nas collections
    - Dentro da pasta User testamos as requisições. Criar um exemplo para cada requisição.

![<Postman Collections>](<postman-collections.png>)

  - `Environments`: variáveis de ambiente. Conjunto de variáveis que podemos utilizar nas collections para fazer as testagens e ir alterando os ambientes de acordo com o necessário (as vezes estamos testando localmente, as vezes vamos testar fora do ambiente local).
    - Criar novo environment com variáveis e seus valores
    - Quando criar uma collectin setar o environment e utilizar as variáveis:
      - http://{{local}}:{{port}}/users
    - Depois podemos alterar as variáveis para fazer testagens em outros ambientes conforme necessário.

![<Postman Environments>](<postman-environments.png>)

- `MongoDB`: banco de dados não-relacional orientado a documentos (não utiliza tabelas e colunas pré-definidas).
  - Pode ser rodado no Docker
  - Dentro de um banco de dados não relacional temos collections, que são usadas para separar informações conforme necessário
  - Para utilizar um banco de dados do MongoDB em um projeto Express precisamos instalar o mongodb no projeto (npm i mongodb) e declarar as seguintes constantes quando quizermos criar funções para mexer no banco:
    - `const url` = 'mongodb://localhost:27017'; (local onde vai rodar o banco de dados localmente. Permite fazer a conexão do código com o banco.)
      - const client = new MongoClient(`url`)
    - `const dbName` = 'postcardsDB'; (nome do banco de dados)
    - `const collectionName` = 'postcards'; (collection que o banco de dados utiliza)

- `Nest.js`: framework Node.js progressivo para construção de aplicativos server-side eficientes, confiáveis e escaláveis. 
  - Assim como o Node.js, utiliza por baixo dos panos uma API Rest com Express
  - Trabalha bem as técnicas de SEO => Node tinha como ênfase a construção de aplicações back-end e não tinha como prioridade a aplicação das normas. O Nest.js, sendo uma ferramenta nova, inclui essas técnicas. 
  - É mais flexível que o Node.js e tende a trabalhar em um único servidor as partes do cliente e do servidor.
  - Usa typescript
  - `nest new nomeDoProjeto`
  - Gera CRUD automaticamente usando o comando `nest g resource nomeDaAPI`
    - Cria pastas `dto` e `entities`
    - Cria arquivos de controllers que já definem requisições e o que deve ser enviado/renderizado/... ao ser feita essa requisição