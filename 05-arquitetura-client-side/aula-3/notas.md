# Arquitetura Client-side

## React

- `Toolkits` - ferramentas para configuração inicial:
    - `Create React App`: muito utilizado, porém não utiliza as ferramentas mais modernas
    - `Vite`: mais moderno e rápido
  - São ferramentas que fazem a consulta do que já tenho em cache local e, se necessário, a instalação das dependências da biblioteca React.

- npm: Gerenciador de pacotes

- Interface de usuário no React é uma composição de components
  - `Component` = HTML + CSS + JS  
    - Componentes são desenvolvidos a partir de funções! Class = código legado.
    - Componentes === máquinas de estados (virtual DOM)
    - React manipula o DOM! Devemos organizar o componente para deixar nas mãos do React DOM a manipulação do DOM real

- `Sintaxe JSX`: html + JS
  - Letra maiúscula para nomes de componentes -> JSX utiliza letras maiúsculas para diferenciar entre elementos HTML e componentes React

- `Funções`:
  - Parâmetros = {props} {} = escapa do JSX para aceitar código JS
  - Se estiver criando componente, nomear com letra maiúscula e retornar componente

- React não é framework, é biblioteca

- StrictMode faz verificação de falhas em tempo de desenvolvimento

- `Listas`: Para renderizar listas sempre deve setar uma key única. React usa as keys para controlar a rerenderização e reposicionamento dos itens da árvore do DOM.
  - map, filter, reduce
- `Eventos`: React gerencia os eventos internamente
  - observar as ações que são aceitas e escrever ações tratadoras dos eventos.
  - - `Bubbling`: conceito de eventos JS onde o evento ocorrido em um elemento se propaga para os elementos pai. Ex.: se clicar num botão que tem um evento de clique, ele será realizado, e se a div em que está inserido tiver um evento de clique, também será disparado.
- `Hooks`: funções com comportamentos especiais no ciclo de vida dos componentes gerenciados pelo React. Estão intimamente relacionados ao ciclo de vida de renderização dos componentes.
  - Hooks nativos
    - `useState`: mantém estado do componente. O estado deve ser alterado utilizando a função setEstado, porque funções que gerenciam estados devem ser puras (devolver novo estado, nunca alterar o anterior). Cria um novo objeto com o novo valor de estado.
      - [estado, setEstado] = useState(`estadoInicial`)
    - `useReducer`: atualizações de estado condicionadas ou complexas. É uma máquina de estados. Utiliza uma função redutora criada externamente para gerenciar o estado.
      - [estadoAtual, dispatch] = useReducer(`funçãoRedutoraCriadaAnteriormente, estadoInicial`)
        - dispatch({objeto de ação com suas propriedades}) = função que dispara uma ação sobre um estado atual, devolvendo um novo estado atual
    - `useEffect`: como componentes não devem ter efeito colateral, utilizamos useEffect para criar efeito colateral. Será executado após cada renderização de um componente dependendo de algo externo ao componente. Pode retornar uma ação de limpeza.
      - useEffect(() => {função de callback de efeito}, dependências)
    - `useReff`: cria um objeto de referência para associar a um jsx.
      - nomeDoObjetoReferencia = useRef()
      - <jsx ref = {nomeDoObjetoReferencia}/>
  - Hooks customizados
    - useNomeDoHook

- `Gerenciamento de estado`:
  - Estado:
    - Global da aplicação
    - Local do componente
    - Persistente (em dispositivos de armazenamentoi persistente - Redux, Recoil)
    - Temporário (em memória - React Hooks)

- `Formulários em React`:
  - Componentes controlados (useState)
  - Componentes sem controle (useRef)

### Create React App

- `package.json`: arquivo de configuração com todas as dependências do projeto
  - Scripts = Create React App

- `Diretório public`: arquivos estáticos (imagens, ícones, manifest.json(onde devem ser configuradas inicialmente PWAs), index.html)
- `Diretório src`: códigos JS (index.js (renderiza o app dentro da div root), App.js (componente visual))

### Vite

- `package.json`: arquivo de configuração com todas as dependências do projeto

- `Diretório public`: arquivos estáticos (imagens, ícones)
- `Diretório src`: códigos JS (main.jsx (renderiza o app dentro da div root), App.jsx (componente visual))

- `index.html`: no arquivo raiz
- `index.css`: estilos globais

- Client-side rendering
  

### Frameworks React

- NEXT.js
- Remixx
- Gatsby

- Fazem o gerenciamento de estados complexos, adicionam roteamento, gerenciamento de estilos, autenticação, server-side, client-side e universal rendering, storage, acesso a APIs rest, etc...

#### Next.js

- Framework Full-Stack para desenvolvimento de aplicações web com base em componentes React
- App Router: faz o roteamento das múltiplas páginas de uma SPA
  - /app - tudo que está dentro do diretório é controlado pelo App Router
  - Suporta roteamento aninhado, layouts compartilhados, estado de carregamento, tratamento de erros, etc
  - Roteamento é baseado na estrutura do sistema de arquivos!
    - Colocar uma pasta de uma página dentro de outra pasta de outra página cria o roteamento aninhado
    - Seguir convenções de nomenclatura, assim o Next.js renderiza as páginas automaticamente
      - layout: shared UI for a segment and its children
      - page: unique UI of a route and male routes publicly accessible
      - loading: loading UI for a segment and its children
      - not-found: not found UI for a segment and its children
      - error: error UI for a segment and its children
      - global-error: global error UI
      - route: server-side API endpoint
      - template: specialized re-rendered layout UI
      - default: fallback UI for Parallel Routes

      - /api /route.js: podemos criar rotas para APIs
  
      - <Link href='/página'>: componente que permite navegação entre rotas
      - useRouter: hook que faz navegação entre rotas

- Possui server components e client components:
  - Todo componente dentro do /app é server component: server side rendering. Default. Usado para tudo que fica próximo ao banco de dados.
  - 'use client' na primeira linha do componente vira um client component: client-side rendering. Usado para componentes que possuem eventos que dependem da ação do cliente.