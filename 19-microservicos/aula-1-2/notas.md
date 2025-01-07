# Microsserviços

- SOA - Arquitetura orientada a serviço:
  - Não é:
    - tecnologia
    - produto
    - WebService
    - Software
    - framework
    - metodologia
    - solução de negócio
  - É:
    - abordagem arquitetural corporativa que permite criação de serviços de negócio interoperáveis que podem ser facilmente reutilizados e compartilhados entre apps e empresas

- Reusabilidade
- Serviços bem definidos
- Componentização
- Baixo acoplamento
- Provê plataforma, tecnologia e linguagens independentes

- 4 pilares: 
  - Processos
  - Boas práticas
  - Plataforma
  - Pessoas

- Benefícios:
  - desaclopamento
  - reutilização de serviços
  - infraestrutura de plataforma

## Monolito X Microsserviços

- Arquitetura monolítica:
  - tudo fica dentro da mesma aplicação
  - todas as funções do negócio estão implementadas em um único processo

- Microsserviço:
  - granuladidade
  - decisões podem ser postergadas
  - permite mudanças e evolução
  - resiliência - sistema global continua sempre ativo
  - reatividade
  - governância
  
## Microsserviços

- Características:
  - conjunto de pequenos auitônomos que trabalham juntos
  - modulos que se comunicam através de API Restfull (HTTP / Json)
  - out-of-process: possibilidade de execução fora de processos
  - acessados por chamadas remotas
  - independente de linguagem de programação
  - baixo acoplamento
  - escalabilidade horizontal e vertical
  - agilidade
  - equipe pequena e focada
  - entregas rápidas
  - altamente testável
  - combinação de tecnologias

- Práticas recomendadas:
  - modelar em torno do domínio da empresa
  - descentralizar tudo - não compartilhar bibliotecas entre times, duplicar se necessário
  - cada microsserviço deve possuir seu banco de dados isolado e deve acessar apenas esse bd
  - APIs devem estar bem projetadas
  - evitar acoplamento entre serviços
  - autenticação e terminação SSL - deixar para o gateway
  - conhecimento de domínio deve ficar fora do gateway
  - acoplamento deve ser flexível
  - isolar falhas - se algo parar de funcional, trabalhar na falha dentro do próprio microsserviço

### The twelve factor for App

  1. Base de código 
    - somente 1 por aplicação
    - vários deploys
    - desenvolvedor possui cópia local do repositório
  2. Dependências
    - declarar e isolar explicitamente as dependências
    - ter gerenciador de dependências configurado
  3. Configurações
    - tudo que é provável variar entre deploys (homologação, produção, desenvolvimento...)
  4. Serviços de apoio
    - tratar como recurso anexado
    - bd, mensageria, cache
  5. Contrua, lance, execute
    - feedback rápido
  6. Processos
    - não introduzir estado nos serviços - Stateless
  7. Vínculo de porta
    - cada serviço em uma porta
  8. Concorrência
    - cada pedaço deve ser executado em uma instância da máquina mais poderosa disponível
  9. Descartabilidade
    - processos devem consumir menos tempo
  10. Paridade entre desenvolvimento e produção
    - ambiente de desenvolvimento, homologação e produção precisa ser igual
    - conteinerização
  11. Logs
    - tratar logs como fluxos de eventos
    - logar em tudo que é importante, de forma simples
  12. Processos administrativos
    - executar como processos pontuais

### Aplicações Cloud Native

  - Microsserviços são aplicações cloud native
  - Containerizada, gerenciada dinamicamente, orientada a microsserviços, on-demand
  - Envolve devops, entrega contínua e microsserviços
  - Economia na forma de trabalhar, melhorar capacidade de responder rapidamente às mudanças, reduzir imprevisibilidade
  - Modularidade
  - Capacidade de observação
  - Implementabilidade
  - Testabilidade
  - Descartabilidade
  - Substituível
  - escalável
  - tolerante a falhas
  - decomposto em serviços
  - envia o máximo do trabalho para a plataforma
  - automatizado

### Particionamento de serviços

- Domain Drive Design:
  - abordagem de desenvolvimento de software com foco no domínio e na lógica do domínio com o objetivo de criar um Domain Model
  - descrever o domínio do negócio
  - linguagem onipresente, arquitetura em camadas e padrões
  - modelo evolutivo - a cada sprint o modelo cresce de acordo com o crescimento do modelo de negócio
  - refatoração de acordo com crescimento e mudança do modelo de negócio
  - camadas: 
    - infraestrutura
    - domínio
    - aplicação
    - interface do usuário

- Event Storming:
  - técnica de design rápido que une DDD com padrões de desenvolvimento
  - ciclos:
    - mapeamento de eventos
      - expressar regras de domínio, separação de interesses entre classes dentro do mesmo domínio
    - identificar comandos
      - primeiros estágios do design do sistema
    - associar aggregates
      - cluster de objetos de domínio que podem ser tratados como uma única unidade
      - elemento básico da trasnferência de armazenamento de dados
      - parte do sistema que recebe comandos e gera eventos
      - contrato para executar o domínio
    - delimitar fronteiras do modelo
      - divisões de contextos do modelo
    - identificar domínios de negócio

### Comunicação entre Serviços

- Síncrona - HTTP
  - espera resposta
  - tratamento de erros

- Assíncrona
  - não espera resposta
  - balanceador de carga pode ser uma fila
  - erros -> pode tratar reenvio
  - depende de broker para fazer contato
  - orientada a eventos 
    - event notification
    - event-carried state trasnfer
    - event sourcing

  - orquestração: processo sincronizado de comunicação que segue uma lógica na sequencia de eventos
    - precisa aguardar a resposta de cada passo para seguir pro próximo
  - coreografia: fluxo de longa duração
  
  - saga: passos vão sendo completados e se um falha desfaz os anteriores
    - baseada em orquestração ou coreografia