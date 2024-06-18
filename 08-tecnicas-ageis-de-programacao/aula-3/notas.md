# Técnicas Ágeis de Programação

## Extreme Programming

- Metodologia ágil, leve
- Para equipes pequenas e médias (2 a 12 pessoas)
- Aceita mudanças nos requisitos
- Ciclos de melhoria contínua
 
- `Valores`:
  - Simplicidade
  - Comunicação
  - Coragem
  - Feedback
  
- Custo de mudança aumenta menos durante o crescimento do projeto em comparação com outros métodos
  
- `Boas práticas`:
  - Planning game: definir escopo das releases
  - Releases pequenas: versões frequentes e correção de rota mais seguida quando necessário
  - Metaforas: utilizar histórias simples para todos entenderem
  - Design simples: sem redundância, sem complexidade desnecessária
  - Test First Design
  - Refatoração: melhoria de código constante
  - Reuniões diárias: determina o que fez, o que deve ser feito até o próximo checkpoint, feedback de impedimentos...
  - Integração contínua: integrar o sistema várias vezes ao dia, a cada tarefa finalizada
  - Pair programming: com alternância entre piloto e copiloto
  - Rodízio de pessoas
  - Propriedade do código é coletiva
  - Padrões de código
  - Semana de 40h
  - Cliente on-site: cliente presente no projeto, fazendo parte ativamente
  - Testes de aceitação: verificar se é realmente aquilo que o software deve fazer para satisfazer o cliente

- `Papéis`:
  - `Big Boss / XP Manager`:
    - Agenda reuniões
    - Escreve atas, mantêm registros
    - Mantem o XP Tracker informado dos acontecimentos das reuniões
    - Evita que influências externas influenciem no andamento do projeto
  - `Cliente`:
    - Gold owner: Pessoa que paga pelo sistema (dono da empresa)
    - Goal donor: cliente presente, que conhece o sistema, que está junto na construção da história, define prioridades, valida testes de aceitação
  - `XP Coach / XP Tracker`: coordenação
    - Coach: Responsável pela negociação com o cliente
    - Tracker: Coleta métricas, mantém todos informados, rastreia informações e compartilha com a equipe
    - Podem ser a mesma pessoa
  - `Driver / Partner`: programador
    - Estima prazos de User Stories
    - Implementa código de produção
    - Trabalha em par
    - Faz refactoring
    - Corrige bugs
    - Não deve criar novas funcionalidades (deve ser decidido com os clientes) nem escrever testes de aceitação

- `Ciclo de vida do XP`:
  - Planejar iteração:
    - Detalhar histórias (criar tarefas)
    - Descrever prioridades
    - Estimar tarefas
      - por comparação, por intuição, Spike Solutions...
    - Comprar / distribuir histórias
  - Construir testes de aceitação
  - Programar
    - Fazer teste unitário
    - Implementar
  - Stand-up meetings
  - Executar testes de aceitação
  - Disponibilizar iteração

### Testes Unitários

- Ferramenta que garante que, a cada componente desenvolvido, ele está correto (passa por um conjunto de testes de verificação)
- Reduzem a incidência de erros simples e no momento da integração
- Testa individualmente cada componentes

- componentes individuais -> `teste unitário`
  - grupo de componentes -> `teste de integração`
    - sistema como um todo -> `teste de sistema`
      - sistema como um todo + requisitos do usuário -> `teste de aceitação`
- Não necessáriamente em cascata, devemos entender quando deve ser testado

- `Entradas para o teste unitário`:
  - Especificação do componente: saber o que aquele módulo fará, o que recebe de parâmetro e o que deve devolver, como ele será organizado... Construir a partir do que se espera que o componente faça
  - Não construir a partir do código fonte: se ele tiver algum erro, o teste pode aceitar
  - Planejar os casos de teste antes de iniciar os testes
- `Artefatos gerados pelo teste unitário`:
  - `Classes Drivers`: conjunto de casos de teste utilizados para testar uma classe alvo. Procuram exercitar os métodos da classe alvo buscando identificar falhas. Uma oara cada classe do sistema
    - Identificação rápida de bugs simples, garante conjunto de requisitos mínimos da classe alvo, detecção de efeitos colaterais
    - Teste unitário é baseado na construção dos drivers
  - `Mockups`: simulam o comportamento de classes necessárias ao funcionamento da classe alvo e que ainda não foram desenvolvidas ou de uma classe dependente que não queremos acoplar à classe alvo no momento do teste. Utiliza-se o mockup para executar o driver utilizando-o como exemplo de uma classe alvo

- Utilização de ferramentas auxilia na testagem unitária -> se faz desnecessário desenvolver um código que reproduza os testes da forma como queremos, na ordem que queremos etc. IDEs possuem ferramentas implementadas para isso. A própria ferramenta decide a ordem de execução do código. O mecanismo devolve um relatório mostrando todos os testes que passaram ou não e porque não passaram.
- `XUNIT`: framework que facilita a implementação de casos de teste. 

- `Recomendações`:
  - Projetar casos de teste independentes uns dos outros, que funcionem independente da ordem de execução
  - Não testar apenas o positivo, testar também que não faz o que não deve fazer
  - Criar um driver para cada classe (normalmente)
  - Inclua um nome que identifique claramente cada teste e sua função
  - Depurar os códigos de teste -> código de teste também é sujeito a bugs, testes podem falhar por problemas no código teste e não apenas na classe alvo 

- `Limites`:
  - Teste não é unitário se:
    - Conversa com o banco de dados
    - Comunica-se através da rede
    - Interage com o sistema de arquivos
    - Não pode ser executado ao mesmo tempo que os demais testes unitários
    - Necessita de ajustes na configuração de ambiente para poder ser executado
  - Quando respeitamos os limites temos testes:
    - que executam rapidamente
    - com alto grau de acoplamento apenas com a classe que testa
    - sem acoplamento com a camada de persistência ou de interface
    - que resistem melhor a manutenção do código

- `Processo de desenvolvimento do teste unitário`:
  - Definir o esqueleto da classe alvo
  - Definir o conjunto de casos de teste
  - Implementar a classe driver
  - Completar a codificação da clase alvo
  - Executar os testes
  - Corrigir os bugs, se houverem
  - Complementar os testes

- `Estratégias de geração de casos de teste`:
  - `Técnicas de testes funcionais`:
    - Especificações do contrato: gerar casos de teste com valores válidos para verificar se o módulo se comporta como especificado
    - Valores limites
    - Classes de equivalência: dividir o domínio de entrada em subconjuntos de maneira que o comportamento de um dos membros do conjunto seja representativo do comportamento de todos os membros do conjunto
    - Diagramas de estado: gerar casos de teste que garantam cobertuda de estados e transições
    - Condições de erro
    - Valores inválidos
  - `Técnicas de testes estruturais`:
    - Usa como entrada o código fonte
    - Usado para refinar os casos de teste
      - Verificar se passa todos os comandos
      - Se exercita cada uma das opções de cada condição
      - Se cada laço itera pelo menos x vezes

### Refatoração

- Alterar o código sem alterar sua funcionalidade
- Melhora algum aspecto não funcional
  - simplicidade
  - flexibilidade
  - clareza
  - desempenho
- Conjunto de testes deve continuar passando
  - Refatorações podem adicionar erros

- `Smells`:
  - Código duplicado
  - Método muito longo
  - Classe muito grande
  - Intimidade inapropriada
  - Muitos comentários
  - Muitos parâmetros
