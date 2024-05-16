# Arquitetura Server-side

- Construção de serviços, lógicas e informações.


- `MVC - Model View Controller`: separar em 3 grupos: dados (model), apresentação (view) e lógica de negócios (controller).
  - Model = operações e gerenciamento de dados / banco de dados
  - View = apresentação e interface de dados visíveis aos usuários
  - Controller = cérebro. Possui as regras e lógicas de negócios, processamento, funcionalidades...

- `Programação assíncrona`: paradigma de programação. Permite que uma aplicação execute tarefas em paralelo, em vez de sequencialmente. Ao invés de esperar que uma tarefa seja concluída antes de iniciar outra, elas podem ser executadas simultaneamente ou em segundo plano.
  - Node: por padrão é assíncrono. Vai resolvendo a aplicação enquanto outras coisas ainda não foram resolvidas.

- `Programação reativa`: paradigma de programação. Se concentra na criação de sistemas e aplicativos que respondem automaticamente a mudanças de estado e eventos. Útil para desenvolver aplicativos em tempo real, como aplicativos da web que exigem atualizações em tempo real com base em ações do usuário ou em eventos de sistema.

- `Node.js`: framework server-side baseado em JavaScript. Interpretador JS do lado do servidor. Facilmente escalável; usa modelo de I/O (acesso ao hd) direcionada a evento não bloqueante (que não bloqueia a informação para outra pessoa pegar enquanto node está utilizando), sendo mais leve e eficiente; ideal para aplicações em tempo real com troca intensa de dados através de dispositivos distribuídos (celulares).
  - `Node Package Manager - NPM`: ferramenta do Node.js para o gerenciamento de pacotes. Auxilia na intalação e desinstalação de pacotes, gerenciamento de versões e de dependências dos projetos.
  - `Express`: framework para aplicativo da web do Node.js que implementa serviço HTTP de forma mínima e flexível 
  - `Browser - cliente` request <=> JSON <=> HTTP verbs <=> HTTP <=> response `Node.js - servidor`