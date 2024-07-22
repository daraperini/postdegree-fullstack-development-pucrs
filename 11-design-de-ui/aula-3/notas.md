# Design de UI

## Interface do Usuário

- Toda porção do sistema com a qual o usuário mantém contato físico (motor ou perceptivo) ou conceitual durante a interação
- Meio de acesso às funcionalidades do sistema
- Contatada através de hardware de entrada e saída usados durante a interação

- `Estilos de interações`:
  - Linguagem de comando
  - WIMPO ou GUI
  - Linguagem natural (pesquisa no google, alexa...)
  - Menus
  - Formulários
  - Manipulação direta (arrastar)
  - Natural (realidade aumentada / smartphones (toque))
  - Multimodal (várias juntas)
  - Wearable
  - Eletrônicos de consumo e eletrodomésticos
  - Robótica (telecirurgia)
  - Cerebral

## Design Visual e Arquitetura das Informações

- `Design de UI`: ajuda a reduzir os aspectos negativos da experiência do usuário. Projetar interfaces tendo o usuário em mente e não a função. Facilidade, eficiência e agradabilidade.

- `Etapas do Design de UI`:
  1. `Análise da situação atual`: qual é? como melhorar? quais elementos envolvidos e como se relacionam? quem são as pessoas, artefatos e processos envolvidos?
    1.  Foco: domínio, stakeholders e usuários, tempo, orçamento e mão-de-obra disponíveis
    2.  Construção do modelo de solução
  2. `Sintetizar a intervenção`: planejar e executar uma intervenção na situação atual. Soluçõ para o problema.
     1. Conhecimento adiquirido na análise atual, sobre intervenções bem e mal avaliadas em casos semelhantes e sobre as possibilidades e limitações das tecnologias disponíveis.
  3. `Avaliar a nova situação`: verificar5 o efeito da intervenção, comparando-a com a anterior.
     1. Pode ser durante a concepção e o desenvolvimento da intervenção, prevendo seus possíveis impactos; antes da introdução da intervenção, identificando consequências negativas ou problemas que possam ser evitados; ou após a intervenção, verificando seus impactos.

## Design de UI x Design de UX

- `UI`: tela, parte visual, arquitetura de informações
- `UX`: necessidades do produto, entender o que o usuário precisa, o que quer, como pretende utilizar

- Interface X Experiência
- Necessidade de Front-end X Necessidade do Produto

## Princípios e Diretrizes para o Design de UI

- Deve:
  - Determinar quais ações são possíveis a cada momento, fazendo uso de restrições
  - Tornar as coisas visíveis incluindo o modelo conceitual do sistema, as ações alternativas e os resultados das ações
  - Avaliar o estado corrente do sistema e seguir mapeamentos naturais entre as intenções e ações requeridas, entre ações e efeito resultante, e entre a informação que está visível e a interpretação do estado do sistema

- `Correspondência com as Expectativas dos Usuários`:
  - Usuário deve conseguir determinar os relacionamentos entre:
    - intenções e ações possíveis
    - ações e seus efeitos
    - o estado real do sistema e o que é percebido pela visão, audição ou tato
    - o estado percebido do sistema e as necessidades, intenções e expectativas do usuário
  - Seguir linha de raciocínio, fornecer fechamentos, feedbacks, usar metáforas

- `Simplicidade nas Estruturas das Tarefas`: 
  - Tarefas complexas devem ter formas de apoio aos usuários para que consigam aprender como realiza-las
  - Melhorar feedback e ajudar o usuário a se manter no controle da tarefa
  - Automatizar a tarefa ou parte dela
  - Modificar a natureza da tarefa se for necessário

- `Equilíbrio entre Controle e Liberdade do Usuário`:
  - Equilibrar limitações e restrições
  - Excesso de liberdade pode deixar o usuário perdido
  - Aos poucos, fornecer caminhos alternativos de interação
  - Permitir que o usuário explore a interface

- `Consistência e Padronização`:
  - Padronizar ações, resultados, layouts dos diálogos, visualizações de informação e comportamentos
  - Respeitar padrões e estilos definidos a nível de produto e plataforma

- `Promovendo a Eficiência do Usuário`:
  - Eficiência do usuário em primeiro lugar, e não do computador
  - Manter usuário ocupado, permitir que ele trabalhe enquando processos ocorrem em background
  - Não interromper o usuário de forma desnecessária
  - Protejer o trabalho do usuário
  - Manter-se informado sobre o usuário e lembrar-se dele
  - Fornecer atalhos

- `Antecipação`:
  - Interface deve fornecer infos úteis e não apenas respostas
  - Prever o que o usuário quer e precisa
  - Usar valores default

- `Visibilidade e Reconhecimento`:
  - Tornar visível ao usuário o que ele pode fazer e como
  - As ações devem corresponder as intenções do usuário
  - Não fornecer opções que não façam sentido para o momento de interação
  - Fornecer indicações sobre o estado do sistema e feedbacks
  - Não exigir que o usuário memorize informações, comandos, pra que serve um elemento da interface
  - Em ações demoradas, mostrar progresso e permitir cancelamento
  - Interface deve permirit ao usuário localizar-se, identificar ações e obter ajuda 

- `Projeto para Erros`:
  - Assumir que qualquer erro potencial possa ser cometido
  - Ajudar a identificar erro, suas consequências e como revertê-lo
  - Tornar tarefas irreversíveis difíceis de serem executadas
  - Não colocar controle de ações perigosas ou raras próximo à controles de ações frequentes
  - Usar mensagens de erro com linguagem simples, precisas e devem sugerir soluções
  - Apoiar usuários no esclarecimento de dúvidas

- `Ofereça ajuda`:
  - Fornecer diversos estilos de ajuda
  - Deixar ícones de ajuda à vista
  - Faciliar a navegação e busca por conteúdos
  - Oferecer tutoriais passo a passo, orientando sobre como executar a tarefa, com número limitado de etapas

- `Poder de marcar a experiência`:
  - Beleza estética
  - Encantamento estético permanece mesmo com eventuais problemas
  - Exprorar imagens, animações, efeitos sonoros, fontes, espaçamentos e diagramação, cores e texturas, estilos de ícones
  - Personalização inteligente

- `Qualidade das apresentações`:
  - Entendimento de tela depende do significado, da elegibilidade e da distribuição das infos
  - Apresentar nomes de funções familiares aos usuários e códigos representativos (F-Feminino, M-Masculino)
  - Usar abreviações de fácil interpretação
  - Considerar tamanho de fontes, contraste, espaçamento entre linha, comprimento de linhas
  - Agrupar infos por distinção e localização:
    - em grupos de acordo com as ações que elas realizam
    - campos de formulários seguindo uma sequencia lógica
    - listas de dados coesas e ordenadas logicamente
    - separar e aproximar itens e agrupamentos conforme relações lógicas
  - Agrupar infos por distinção por formato:
    - evidenciar visualmente áreas com funções diferentes
    - evidenciar graficamente elementos de uma interface quetem diferentes funções

## Padrões de Design - Design Patterns

- Descrições de melhores práticas em um determinado domínio de design
- Deve descrever um problema pontual
- Não é uma solução pronta nem um passo-a-passo

- `Estrutura`:
  - Nome do padrão
  - O que é
  - Quando usar
  - Por quê
  - Como
  - Exemplos

## Guias de Estilo

- Registros de decisões de design que reunem os princípios e diretrizes que devem ser adotados no projeto
- Faz a comunicação entre a equipe de design e de desenvolvimento

- `Escopos`:
  - plataforma
  - corporativo
  - família de produtos

- `Definições`:
  - layout
  - tipografia
  - simbolismo
  - cores
  - visualização de infos
  - design de telas e elementos de interface

## Redação para UX

- `UX visa responder`:
  - qual produto
  - quando o usuário vai utilizá-lo
  - porque
  - como ele fará pra utilizar
  - como o produto será útil ao usuário
  - quem é o usuário

- `Microtextos - Redação de UX`:
  - Texto de tamanho reduzido de origem publicitária
  - Deve transmitir personalidade
  - Palavras ou frases na interface que são diretamente relacionadas às ações que o usuário realiza
    - motivação antes da ação
    - instruções que acompanham a ação
    - feedback após a ação
  - Promove alguma ação facilitando o engajamento do usuário na interface
  - Ajuda a transmitir segurança, a aconduzir o usuário aos próximos passos, remover ambiguidades
  - Ajuda o usuário a se acalmar quando há um erro
  - Voz e tom de uma marca

- `Quadro de voz da marca`:
  - Conjunto de regras para a tomada de decições
  - Alinha o conteúdo às necessidades da organização e seus usuários
  - Ajuda a identificar o que pode ser aprimorado e alinhar o conteúdo entre redatores de UX
  - `voz`: escolha consistente e reconhecível de palaras ao longo de toda uma experiência
  - `tom`: variabilidade nessa voz de uma parte da experiência para outra

- `Princípios do produto`: o que a experiência está tentando ser para seus usuários
  - Nesse caso a voz precisa transmitir esses princípios através de palavras
  - Redator de UX não decide os princípios

### Padrões de texto de UI

- `Títulos`:
  - Finalidade: explicar imediatamente o contexto e a ação a ser tomada. Normalmente são os primeiros e únicos textos lidos pelo usuário.
- `Botões, links e outros comandos`:
  - Finalidade: permitir ao usuário avançar na tarefa ou executar uma ação. Botões permitem interação do usuário com a aplicação, melhor utilizados quando são compostos de 1 ou 2 palavras. São os textos mais importantes na experiência. Imoprtante textos ocultos para acessibilidade. Quando em conjunto com o título são muito mais eficientes.
- `Descrições`:
  - Finalidade: ajudar a seguir adiante na experiência sabendo o que esperar, estabelecer a marca e reduzir a responsabilidade. Não deve ser interativa, se possuir link deve seguir os padrões dos botões. É um trexo de texto informativo que usa linguagem simples. Podem estar ocultas e disponíveis apenas para leitores de telas.
- `Estados Vazios`:
  - Finalidade: criar expectativas e entusiasmo enquanto indica que o espaço vazio é intencional. Pode ser simples como uma única linha, ou complexo como um título, uma descrição ou um botão. Ex.: tela inicial da netflix
- `Rótulos`:
  - Finalidade: minimizar os esforços necessários para compreensão da experiência. Indicam seções, categorias, status, progresso, quantidades ou unidades. Subtítulos, padrão de datas...
- `Controles`:
  - Finalidade: informar ao usuário sobre a extensão e o estado de possíveis customizações. Nome deve descrever o que controla e o estado o estado atual. Ex.: switch de modo noturno
- `Campos de entrada de texto`:
  - Finalidade: ajudar os usuários a fornecer informações precisas. Rótulos, dicas e campos previamente preenchios para entrada de dados. Placeholder!
- `Texto de transição`:
  - Finalidade: confirmar que uma ação está em andamento. Se necessário, adicionar entusiasmo. Ex.: "carregando", "enviando"... Entusiasmo: The last of us tem dicas de controle durante o carregamento.
- `Mensagens de confirmação`:
  - Finalidade: garantir aos usuários que o progresso ou os resultados esperados estão concluídos. Pode aparecer de forma passiva (enquanto o usuário está fazendo outra coisa) ou pode ser exibida em sequência, como uma pausa ou etapa momentânea.
- `Notificações`:
  - Finalidade: informar ou lembrar o usuário de se envolver com a experiência. Interrompem o usuário para fazer ele prestar atenção em outra parte da experiência. Devem comuniar seu valor e intenção rapidamente.
- `Erros`:
  - Finalidade: ajudar o usuário a chegar onde quer e, se necessário, indicar que há um problema para alcançar seu objetivo da maneira como planejou. Primeira forma de correção da interrupção no ciclo errado. Foco em auxiliar o usuário. Instruções breves, deixar claro quando não pode seguir em frente, pedir desculpa quando não consegue seguir se couber na interface. Fornecer detalhes do motivo do erro.
- `Categorias de erros`:
  - `Ruído`: menos intrusiva, recomenda uma correção antes de seguir adiante. Texto breve, esclarece ou lembra algo ao usuário. Não interrompe a ação do usuário.
  - `Obstáculo`: quando a experiência não pode ser corrigida assim que o erro ocorre. Normalmente um popup que pode ser fechado e permite que o usuário siga a ação mesmo com o erro.
  - `Barreira`: quando o usuário não pode seguir a ação. Deixa claro que ele não pode continuar.

## Sobre Pessoas

- Visão periférica é mais usada que a visão central para absorver a essência do que está sendo apresentado
  - Na parte periférica, comunique o propósito da interface
  - Não usar coisas piscantes na visão periférica

- Pessoas leem telas baseadas em suas experiências e expectativas passadas
  - Pessoas tem mapeamentos mentais do que elas querem ver e onde elas querem ver
  - Informações mais importantes devem estar no primeiro terço da tela ou no centro
  - Levar em conta linguas que leem da direita para a esquerda

- Pessoas acreditam que objetos próximos se "pertencem"
  - Usuário assume que um texto próximo de uma foto tem a ver com a foto
  - Antes de usar linhas ou caixas para separar itens ou agrupá-los, tentar usar espaçamentos

- Ler em uma tela é mais difícil do que ler em um papel
  - A imagem não é estável
  - O tamanho e contraste da fonte deve estar adequado
  - Texto deve ser quebrado em blocos
  - Parágrafos pequenos, imagens...

- Pessoas leem mais rápido quando a linha é extensa, mas preferem linhas mais curtas
  - Se queremos que o usuário tenha velocidade de leitura, usar linhas compridas
  - Linhas curtas tornam a interface mais agradável
  - Linha longa: 100 caracteres por linha
  - Linhas curtas: 45 a 72 caracteres por linha

- Pessoas precisam usar uma informação para absorver outra
  - Para mover info da memória de curto prazo para a de longo prazo existem 2 caminhos: repetição ou associação com uma info já conhecida
  - Se o usuário conseguir associar a info nova a uma já conhecida, é mais fácil para ele guardar a nova info

- Pessoas aprendem melhor com exemplos
  - Mostrar como ele deve executar uma tarefa
  - Usa vídeos, fazer tutorial no primeiro uso...

- Cultura afeta como o usuário irá pensar
  - Leste: relacionamentos
  - Oeste: individualidade
  - Levar em consideração qual publico utilizará a interface

- Pessoas não são multitarefa
  - Não forçar o usuário a executar múltiplas tarefas
  - Se for necessário, assumir que acontecerão muitos erros e que devem haver maneiras de ensiná-lo e ajudá-lo a contornar os erros

- Pessoas são motivadas por recompensas intrínsecas mais do que por extrínseca
  - Recompensas extrínsecas (física, palpável) como dinheiro não são a melhor forma de recompensar um usuário
  - Se for extrínseca, é mais motivadora quando for inesperada
  - Se a interface permite que usuários se conectem uns aos outros, eles se sentirão mais motivados a usá-la

- Pessoas são "programadas" para gostarem de surpresas
  - Coisas novas capturam a atenção
  - Oferecer algo inesperado retém a atenção e gera prazer
  - Fornecer algo nvo e diferente na interface é uma boa maneira de engajar o usuário. Importante levar em conta as diretrizes do design de UI 

- Pessoas estressadas cometem erros
  - Se a tarefa for entediante, aumentar o nível de excitação com sons, cores, movimentos...
  - Se a tarefa for difícil, eliminar distrações
  - Quando está sob stress o usuário não vê as coisas na tela, tende a repetir as mesmas ações mesmo que elas não estejam funcionando


## Usabilidade, Comunicabilidade e Acessibilidade

- `Acessibilidade`: fornecer na interface itens que podem ser utilizados por todas as pessoas.
  - W3C - normas técnicas

- `Comunicabilidade`: efetivamente comunicar ao usuário a intenção do designer. Utilizar a interface como um refletor das intenções do designer.

