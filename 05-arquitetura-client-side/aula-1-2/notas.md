# Arquitetura Client-Side

- Arquiteturas modernas são compostas por:
  - Front-end: páginas web e apps móveis
  - Middlewares: protocolos de redes e redes
  - Backend: serviços e servidores

- Sistemas distribuídos fazem a comunicação entre todas as forças do nexus
  
- Arquitetura de software é composta por:
  - Princípios de Design
  - Características 
  - Estrutura arquitetural
  - Decisões arquiteturais 

- Arquitetura client-side:
  - Contexto
  - Sistema
  - Componentes
    - `HTML` - criação da página com linguagem de marcação (hipertexto)
     - head:
      - identifica e dá identidade à página
      - metatags: cache, descrição, recursos extras:
        - OpenGraph: imagem que aparece quando você compartilha uma url:
        - *<meta property="og:nomeDaPropriedade" content="" >*
    - `CSS` - estilo da página - SASS
    - `JavaScript` - interação e manipulação do DOM
    - `TypeScript` - JS com tipagem, validações de erro, recursos orientados à objeto

  - Serviços na web:
    - `API REST`: boas práticas para criação de APIs
      - Organizar APIs ao longo de recursos
      - Padronizar APIs
      - Evitar APIs anêmicas (que não traz o dado representativo)
      - Criar APIs simples
      - Usar protocolos HTTPS/SSL
      - Versionar as APIs
      - Estabelecer paginação para coleções com grandes volumes de dados
      - Usar corretamente os métodos de retorno HTTP
    - métodos API
      - GET
      - POST
      - PUT
      - DELETE

  - `Client Side Rendering`: apps altamente interativos, interações mais rápidas e com maior fluidez. Mecanismos de busca que procuram em servidores web para buscar app não vão encontrá-los, carregamento mais lento da primeira página, JS é baixado para a máquina do usuário e causa vulnerabilidade (XSS - permite a injeção de códigos maliciosos nos navegadores dos usuários)
    - Pede para iniciar a página
    - Recebe HTML e CSS
    - Pede JS
    - Recebe JS
    - Faz requisição de conteúdos dinâmicos
    - Recebe conteúdos dinâmicos

  - `Server Side Rendering`: encontrada por mecanismos de busca SEO, útil para entregar conteúdo de página rapidamente (pode ser um conteúdo ainda não interativo). Experiência ao longo da aplicação é penalizada: toda vez que precisar clicar em algum lugar para fazer algo que ainda não foi renderizado, o servidor precisa renderizar antes de enviar.
    - Pede para iniciar a página
    - Servidor pré-renderiza a página pedindo para a API os dados necessários
    - Renderiza os dados no servidor
    - Recebe a página cheia renderizada

  - `Universal Rendering`: permite percepção rápida de chegada a primeira página, é encontrado por mecanismos de busca SEO, otimiza recursos do app (NextJS, ExpressJS). Exige maior experiência no desenvolvimento client-side.
    - Pede para iniciar a página
    - Servidor usa as APIs para compor os dados para serem renderizados
    - Recebe conteúdo HTML sem ter o JS renderizado
    - Pede o JS
    - Servidor devolve JS e começa o processo de hidratação (página compõe o JS dentro dela)
    - A partir do final da hidratação página começa a ter interatividade
    - Após, toda a interação "vira" uma SPA

  - `Frameworks`: conjuntos de ferramentas, bibliotecas e padrões de código que facilitam a criação de interfaces de usuário interativas e responsivas em aplicativos web.
    - Vantagens: código, agilidade, compatibilidade, responsividade e comunidades
    - Desvantagens: curva de aprendizado, restrições e sobrecarga
      - Angular: opinativo, muitas coisas nativas (como gerenciamento de estado)
      - React e Vue: não opinativos, bem flexíveis
      - Vue: gerenciamento de estado reativo, também usa virtual DOM
      - Next.js: baseada em React, visa trazer recursos para otimizar a arquitetura client-side, com renderização otimizada 
    - `Frameworks multiplataformas`: a partir dos aplicativos móveis, surgiram frameworks multiplataformas que permitem, com o mesmo código, publicar em Androir, iOS, desktop... cria camada de abstração que simplifica a complexidade das plataformas. Permitem:
      - Reutilização de código
      - Rapidez no desenvolvimwnto
      - Acesso a recursos nativos
      - Melhor performance da aplicação
        - React native: criar aplicativos nativos para iOS e Android usando JS e React. Permite acesso a recursos nativos usando Bridge e faz renderização por ela. Mesmo compartilhando código entre plataformas, necessita de código específico em alguns casos (if iOS ... if Android ...)
        - Flutter: interfaces de usuário com alto desempenho. Possui sua própria engine de renderização (Skia) que permite criação de interfaces super personalizadas. Utiliza linguagem Dart.
      - Arquivo Info pede permissão para acesso a recursos nativos.


- `Monolitos e Micro Serviços`:
  - `monolito -> monolito modular` = divisão em do serviço em subdomínios com criação de cross-function teams, cada um responsável por um subdomínio. Banco de dados compartilhado.
  - `monolito modular -> micro serviços` = algum subdomínio pode ser mais fragmentado? Ver gargalos e entender a possibilidade de utilizar monolito modular juntamente com micro serviços satélites.

- `Micro Frontend`:
  - Estilo arquitetural voltado ao frontend que trata em dividir as interfaces grandes em pedaços menores e mais gerenciáveis
  - Planejar a divisão de acordo com os conceitos comerciais do projeto

  - `APP Shell`: Estrutura de organização do app web que organiza o acesso a um API Gateway ou BFFs, abstraindo o conhecimento do usuário da aplicação e encapsulando o acesso a micro frontends. SPA monolítica que é enviada em partes, sob demanda, de acordo com o que o gateway sabe que é necessário enviar.
  - `API Gateway`: Meio de campo entre front e back, que limita o acesso, garante isolamento e é um intermediário entre as requisições. 
  - `BFF (backend for frontend)`: arquitetura padrão que consiste em ter diferentes APIs para diferentes dispositivos (solicitar retornos diferentes para diferentes dispositivos).


- `Arquitetura client-side - Requisitos Arquiteturais`:
  - `Divisão de responsabilidades`: lida com a separação clara das diferentes responsabilidades dentro do sistema - apresentação, lógica de negócio e interações com serviços internos e externos. Clean architecture é uma abordagem de divisão em camadas independentes, com divisão de responsabilidades, baseada no SOLID para implementar de forma a organizar estruturas de dados em classes e como elas devem ser interconectadas.
  - `Responsividade`: refere-se à capacidade de um site ou app se adaptar a diferentes tamanhos de tela e dispositivos. Media queries, ajuste do viewport (no head do html) (permitir zoom), layouts flexíveis e frameworks.
  - `Componentização`: lida com a busca de melhora para distribuição, sustentação, isolamento, compartilhamento e reuso do código. Seguir princípio de design DRY (Don't Repeat Yourself). CSS encapsulado com CSS Modules, ou Style Components (CSS no JS). Web Components (HTML, CSS e JS unidos em um só componente com uma funcionalidade encapsulada).
  - `Gerenciamento de estado`: lida com a complexidade do gerenciamento de estado. Estado representa uma parte de um componente JS -> interação do usuário muda a o estado da aplicação, podendo alterar também a interface do usuário.
  - `Performance`: lida com otimização do desempenho da aplicação. DevTools, Lighthouse e WebPageTest para estudo do desempenho. Itens relevantes:
    - Tamanho da página: HTML + CSS + JS + Imagens ...
    - TTFB (Time to First Byte): tempo desde o início da navegação até o primeiro byte de dados retornado ao cliente
    - Tempo de carregamento da página: tempo necessário pra página ser totalmente carregada no navegador
    - Métricas Core Web Vitals: FCP (First Contentful Paint - tempo até o primeiro conteúdo ser renderizado), LCP (Largest Contentful Paint - tempo até o maior bloco ser renderizado), TTI (Time to Interactive - carregamento da página para o início da possibilidade de interação)
    - `Acessibilidade`: trata de tornar o site ou app utilizável por pessoas com deficiência, incluindo deficiência visual, auditiva, motora ou cognitiva.
