# Técnicas Ágeis de Programação

- `Manifesto Ágil`: 2001 houve um encontro sobre metodologias ágeis. Criam uma base para as metogologias ágeis.
  - `Princípios`:
    - Satisfazer o cliente
    - Aceitar as mudanças de requisitos
    - Entregar software na menor escala de tempo possível
    - Equipe e cliente são o mesmo time
    - Indivíduos motivados e comprometidos
    - Comunicação efetiva
    - Software em funcionamento é a principal medida de progresso
    - Excelência técnica
    - Equipes organizadas 
    - Se tornar mais eficaz

- Importante entender a necessidade do cliente - feedbacks frequentes permitem aprendizagem rápida
- `Desenvolvimento ágil`: divisão do trabalho em ciclos de entrega com feedbacks do usuário. 
  - Dentro de cada ciclo, passamos por todas as fases do desenvolvimento daquela ferramenta, do planejamento à entrega
  - Fluxo de trabalho deve ficar mais simples com o passar do tempo

## Extreme programming

- `Conceito 3C`:
  - `Cartão`: contém informação limitada, opera como um lembrete. O que fazer? Valor? Risco?
  - `Conversação`: ajuda a amplificar o conhecimento e desenvolver exemplos sobre o que estamos aprendendo
  - `Confirmação`: comprovação dos atendimentos através da conversação, com validação do mundo real

- `Spike soluition`:
  - Aprender antes com exemplos sobre a solução para depois poder aplicar o conhecimento em um projeto real
  - Requer:
    - tempo de investigação
    - preparação para o fazer
    - remoção de risco técnico
  - `Modo descoberta`: entendendo o problema, ampliando aprendizado, não sabe como a tarefa termina
  - `Modo entrega`: já sabe o fim da tarefa, sabe quais cenários devem ser validados

- `Ritmo Sustentável`:
  - Diz respeito ao trabalho de qualidade
  - Trata de manter um ritmo sustentável de tempo de presença, tempo de foco
  - Ter tempo para aprender, descansar...
  - Permite melhorar a vida e o desempenho

- `Formação de times`:
  - Multidisciplina
  - Carreira T, Pi(2 especialidades + visão ampla do todo), W (navega conforme demanda do projeto)

- `Comando e controle`:
  - Como atuamos em relação a liberdade de atuação de uma equipe

- `Organizando equipes`:
  - Varia de acordo com o projeto/equipe
  - Entender como balancear o time e suas funções com os seus membros

- `Metáfora`:
  - Mudança/transposição
  - Figura de linguagem importante para a comunicação
  - Metáforas no desenvolvimento de software:
    - No silver bullet
    - Metáfora do bombeiro (apagar incêndios)
    - Smells
  - Amplia o poder de comunicação
  
- `O Trabalho da pessoa desenvolvedora`:
  - Design, programação, testes, manutenção, evolução
  - Gestão de configurações e do trabalho
  - Colaborar com outros profissionais

- `Padrões / Convenções`:
  - Todas as linguagens possuem padrões que devem ser seguidos
  - Seguir os padrões facilita leitura e manuteções do código
    - Nomenclatura
    - Estrutura de código
    - Terminologia
    - Formatação
    - Boas Práticas

- `Pair Programming e Mob Programming`:
  - Programação em pares:
    - Exercita aprendizado, mentoria, discussão de problemas...
    - Incentiva colaboração
    - Utilização de ecalas com rotação entre todos os participantes da equipe
    - É uma forma de fazer code review antecipadamente
  - Programação em multirão:
    - Pode incluir pessoas não desenvolvedoras, especialistas em alguma área que envolve o projeto

- `Pirâmide de Revisão de Código`:

![<Pirâmide de Revisão de Código de Gunnar Morling>](<piramide-revisao-codigos.jpeg>)

- `Bad Smells`:
  - Código ruim é composto por bad smells
    - Código muito complexo
    - Nomenclaturas
    - Código duplicado...
  - Pode ser um indicativo de um potencial problema de design, um sintoma
    - Já um bug se revela quando executamos o software
  - Refatoração é conectada a smells pela qualidade

- `Engenharia de Software`:
  - Disciplina madura e emergente
  - Baseado em processo e produto
    - processo --qualidade--> produto
  - Software que não evolui morre
  - `Complexidade`: essencial X acidental
    - Essencial: não conseguimos fugir, faz parte dos negócios
    - Acidental: inseridas por nós: ferramentas, práticas, framework adicionado sem necessidade...
  - `Leis de Lehman`: 

![<Tabela de Leis de Lehman>](<leis-de-lehman.jpg>)

  - `Manutenção`: proativa X reativa
    - Proativa: as que devemos ter consciência de trabalhar. Entender possíveis problemas que podem ocorrer, fazer refatoração...
    - Reativa: quando alguém faz a solicitação para o time
    - Pode ser uma manutenção corretiva ou de aprimoramento
    - Com o surgimento da metodologia ágil não existe mais separação entre Desenvolvimento e Manutenção
  - `Desenvolvimento de Documentação`:
    - Documentações incompletas, com pouca legibilidade e usabilidade, falta de atualização são problemáticas e não funcionam
    - Estruturar pensando no conteúdo, no tamanho, para quem estamos fazendo (audiência), usando diversos formatos
    - Usar exemplos
    - Utilizar comentários nos códigos (sem abusar, não esquecendo de manter o código legível)

## Técnicas Ágeis de Programação

- `Testes`:
  - de unidade, serviços, UI...
  - Cobertura de testes não garante acertividade
  - Vale a pena automatizar? Sempre que acrescentamos uma funcionalidade, precisamos testar todos os que já existiam anteriormente para garantir que eles continuam funcionando. Automatizar os testes valida o código já existente, facilitando e acelerando o trabalho de testagem.
    - Testes automatizados representam o design do código

- `Automação e Integração Contínua`:
  - Quanto mais tempo demorar para levar o código local para o cliente, pior
  - O objetivo é diminuir o tempo do feedback

- `Escrita de histórias`:
  - Quem queremos impactar? Quais atividades?
  - Que valor vamos agregar?
  - O que precisa ser feito?
  - Como sabemos se fizemos o que precisa ser feito?
    - Critérios de aceite. Como será testado?
    - O tamanho da história está adequado? Podemos quebrar em partes?
  - 5W2H: quem, o que, porque, onde, quando, como e quanto. Perguntas de apoio que ajudam a entender o que o cliente precisa.
  - Cenários e testes: precisamos transformar exemplos reais de clientes em cenários de testes
    - Dado que (estado do sistema)? Quando (ação no sistema)? Então (como ficou o sistema após a ação, qual é a sua reação)?
    - Testes devem ser independentes!
    - TDD: garante qualidade de código.
      - Monta cenário de teste sem o comportamento existir. Rodar o cenário, que falha.
      - Mexer no comportamento do código. Rodar o teste, que deve passar.
      - A partir do teste ter passado, podemos modificar a estrutura do código, mexer em nome de variável etc. Caso alguma mudança quebre o teste, rever.

- `Dívida Técnica`:
  - Metáfora que diz que quando precisamos tomar uma decisão a cerca do projeto, teremos uma dívida que deverá ser paga.
  - A cada nova featura / manutenção, inserimos coisas que podem ter efeitos colaterais no código => "sujeira" (dívida técnica)
    - Se não cuidarmos da sujeira, ela se acumula e para fazer a limpeza fica muito mais difícil
  - Dívida técnica baixa a moral e motivação do time, baixa a qualidade do código e enderaça uma baixa produtividade

- `Refatoração`:
  - Processo complexo
  - Está relacionada a uma mudança de estrutura interna do código com o comportamento se mantendo estável
  - Entender onde estão as oportunidades de refatoração
  - Os testes continuam passando após a refatoração

- `Análise de código`:
  - Habilidades necessárias:
    - Heurísticas de análise: princípios, técnicas
    - Compreender qualidade de software
    - Aplicar métricas de análise e estratégias de visualização e ferramentas de apoio
    - Estratégias
      - Análise Estática: Quando estamos trabalhando em cima do código fonte ou do binário. Para identificar métricas.
      - Análise Dinâmica: Utilizada para entender como os objetos se comunicam. O software precisa estar em funcionamento.
      - Análise Histórica: Análise do repositório: crescimento, commits, usuários...
      - Análise Comportamental: Análise da equipe, seu conhecimento...
  - Pilares da análise:
    - Coesão
    - Acoplamento
    - Tamanho 
    - Complexidade
  - Essência:
    - Estruturas pequenas
    - Nomes significativos
    - Formatação e uso de padrões
    - Organização das estruturas e algoritmos
    - Aplicação dos princípios do paradigma
    - Testes automatizados
  - Ter um objetivo para a análise e utilizar ferramentas que ajudem a encontrar o ponto que deseja
  - Pode começar de baixo para cima, de dentro para fora do código
  - As análises devem ser feitas sempre, de forma antecipada, antes de dar problema
  - Individualmente, em par ou em sessões de Code Review
