# Qualidade e Teste de Software

- `Qualidade`:
  - Sensação de que o produto atende as necessidades do usuário
  - Grau de conformidade de um sistema com seus requisitos

- `Custo`:
  - Custo não só financeiro, mas de imagem da empresa, confiança etc...
  - O custo do defeito é dado pelo tempo em que está presente:
    - Se for encontrado durante o desenvolvimento, o custo é menor
    - Se for encontrado pelo usuário, já buildado e entregue, o custo é maior 

- `Priorização`:
  - Testes devem ser priorizados de acordo com as especificações do software ou da sprint.

## Testes Unitários

- `Unidade para testes`: menor parte divisível do código
  - Sem dependências externas
  - Caminhos:
    - `Decisition to decisition`: se - então. Verificar condições válidas e inválidas para esse o caso se - então.
    - `Declaração e uso de variáveis`: manipular variáveis para verificar se os métodos estão funcionando corretamente
  - `Stubs`: esqueletos criados para isolar as unidades. Sempre respondem a um valor conhecido quando a classe ou método depende de algum agente externo.
  - Estímulos gerados devem ser rastreáveis e repetitivos

- `Estratégias de teste unitário`:
  - TDD
  - BDD: Behavior Driven Development
    - Entender a demanda da unidade para criar testes. Entender o que ela deve fazer.
    - Testar criando "promessas" ou requisitos funcionais / não funcionais que cumpram o que uma dada pessoa precisa que a unidade faça.
  
- `Integração de testes unitários`:
  - Localmente
  - Pipeline
    - 1x ao dia, testando todo código ao final do dia
      - Mais custoso
    - A cada PR
      - Cria filas

## Testes de Integração

- `Testes de integração`: união de pequenas partes de testes.
  - Espera-se que, unindo um novo trecho de teste ao teste de integração, o teste anterior continue retornando a mesma resposta.

- `Estratégias de integração de componentes`:
  - `Top-down`: Inicia os testes pelas camadas mais superiores da solução.
  - `Bottom-up`: Inicia testando métodos e classes, aos poucos, mantendo partes isoladas.
  - `Sanduíche`: Misto das duas abordagens. Partes mais críticas são testadas individualmente e partes mais estáveis são testadas em alto nível pela integração.

## Testes de Interface de Usuário

- `Testes de interface com usuário`:
  - Testes para Front-end
    - Alinhamento
    - Tipografia
    - Ancoragem
    - Padronização de cores
    - Vocabulário
  - Interface deve manter a consistência visual

- `Front end ` X `Interface Gráfica`:
  - Front-end:
    - validação de campo
    - tipos de arquivos
    - instalação
    - propriedades
  - Interface Gráfica:
    - número de passos para completar ações
    - padronização do vocabulário, levando em conta localização
    - padronização do espaçamento
    - padronização da paleta de cores

- `Plano de testes`: pode ser um mapa mental
  - Devem ser testadas entradas e saídas
  - Testar casozs válidos inválidos conforme descrito nas expecificações do software
  - Abaixo um exemplo de mapa mental de plano de testes:

![<Mapa mental de plano de testes>](<plano-de-testes-1.png>)
![<Mapa mental de plano de testes>](<plano-de-testes-2.png>)
![<Mapa mental de plano de testes>](<plano-de-testes-3.png>)
![<Mapa mental de plano de testes>](<plano-de-testes-4.png>)
![<Mapa mental de plano de testes>](<plano-de-testes-5.png>)

- `Acessibilidade`:
  - Garante o acesso universal à solução
    - Alto contraste
    - Diferentes resoluções de tela
    - Diferentes modos de tela
    - Navegação por teclado
  - Gerido pela W3C

- `Cobertura de testes`:
  - Devem cobrir diferentes temas (light e dark)
  - Devem cobrir diferentes browsers
  - Pra cada versão os testes devem ser repetidos
    - Automação auxilia nessa parte!

## Testes de Performance

- `Performance`: número de usuários x tempo (tempo de fila + tempo de processamento)
  - Deve ser feito sempre e tão cedo quanto possível
  - Critérios não são bem definidos anteriormente ao teste, tem muitas dependências:
    - Quantidade média de usuários
    - Limites de escalonamento
    - Quais são as definições de SLAs
  - Testes de performance são feitos a partir do entendimento do ambiente
  - São utilizados para entender o cenário atual e propor melhorias - geralmente de infra

- Ex.: 
  - testar 10 usuários acessando por 5 minutos
  - testar 100 usuários acessando por 20 minutos
  - testar 200 usuários acessando por 1 hora
- O tempo de resposta deve ser avaliado e deve-se entender o tempo de resposta médio aceitável e, a partir disso, decidir quantas máquinas são necessárias para manter essa média aceitável

- `Baseline`: ponto de quebra, ponto ótimo. Usado para comparar com os resultados dos testes.
- `Testes de SLA`: testar performance durante um longo período de tempo para garantir a disponibilidade do software. Avaliar períodos de falha.

## Garantia e Processos de Qualidade

- `Conceitos`:
  - `Estratégia de teste`: documento que define de forma ampla a abordagem a ser executada e os níveis de qualidade 
  - `Plano de teste`: documento que diz como será testado, pré-requisitos, resultados esperados... 
  - `Casos de teste`: conjunto de passos e resultados esperados para uma habilidade
  - `Pré-requisitos`: estado necessário para início do teste 
  - `Passos do teste`: conjunto de ações detalhadas para o teste 
  - `Resultados esperados`: determina qual é a ação esperada após o passo de acordo com a especificação do software
  - `Relatório de testes`: documento contendo os resultados em formato Passou / Falhou para métricas

- `Divisão em camadas`: dividir entre devs e pessoas da qualidade os processos de qualidade, cobrindo funcionais e não-funcionais
- `Repetitibilidade`: ambiente de testes deve ser sempre o mesmo. Utilizar VMs.
- `Relatórios de teste`: devem conter percentual de testes que passaram e falharam e número de defeitos por caso de teste.
- `Priorização`: priorizar defeitos de acordo com impacto ao usuário e frequência de ocorrência.
- `Métricas para controle de qualidade`: número de defeitos por prioridade (por versão) e por Sistema/Browser/requisito
- `ROI - Return Of Investment`: cálculo que indica os gastos com qualidade e qual poderia ter sido o prejuízo sem eles. Gastos com desenvolvedores, pessoal de qualidade, número de defeitos achados e etapas em que foram achados.
  
- `Estratégia de Qualidade de Software`: 
  - Entender o propósito da solução
  - Estabelecer o que será feito em cada etapa do desenvolvimento (concepção, design, implementação)
  - Se for processo ágil, muda a cada Sprint

## Projetos Ágeis

- QA deve atuar de maneira direta
- Rastreio de defeitos e reteste expecífico desses defeitos

## Perfis

- `Testador x SDET`:
  - `SDET`: 
    - software development engineer in test
    - Profissional com conhecimento em desenvolvimento de software e de testes
    - Não é necessariamente especializado em testes
    - Pode auxiliar nos processos dependendo da demanda
    - Trabalha com desenvolvimento para testes

## KPIs

- Key Performance Indicator: indicadores de performance
- Leva em conta:
  - Satisfação do cliente
  - Processo interno de qualidade
  - Satisfação do funcionário
  - Índice de performance financeira
- São escolhidas de acordo com as necessidades específica do software
- Quanto mais métricas, mais difícil fica de avaliar

- `Nível de Testes unitários`:
  - Correlação entre quantidade de linhas de código adicionadas/modificadas por um período de tempo
  - Número de defeitos a cada 1000 linhas de código (KLoC)
  - % de cobertura do código
- `Nível de Testes de integração`:
  - Defeitos por componentes
  - Componentes mais alterados x defeitos achados (verifica efetividade dos testes)
- `Nível de Sistema`:
  - Quantidade de defeitos achados por tempo (por prioridade) - probabilidade de frequência x impacto ao usuário
  - Quantidade de defeitos resolvidos por tempo
  - Idade dos defeitos por prioridade

## Testes A/B

- Comparam 2 versões da solução (uma modificação, uma nova feature...) que será utilizada pelo usuário para identificar qual versão é mais atrativa para o cliente.
  - Alguns usuários recebem a versão A, outros a versão B
  - Risco controlado 
- Avaliar:
  - tráfego gerado
  - quantos usuários completaram a ação
  - quantos usuários completaram a ação dentro do tempo esperado
  - qual foi o potencial para engajamento

1. Estabelecer Baseline
2. Determinar um objeto baseado na Baseline (o que quer modificar?)
3. Desenvolver uma hipótese que irá alavancar a performance do objeto
4. Identificar alvos para teste
5. Criar versões A (nova versão 1 || versão corrente) e B (nova versão 2 || nova versão)
6. Utilizar ferramentas de automação de testes (versões A e B sempre precisam estar funcionando corretamente)
7. Executar e validar os resultados do teste com uso de ferramentas analíticas que permitem "acompanhar" a movimentação do usuário dentro do site
8. Aplicar o conhecimento na melhoria da experiência

- `Ferramentas de análise`:
  - Permitem avaliar testes A/B de acordo com:
    - Tráfego: visualização das páginas, visitantes únicos
    - Engajamento: tempo decorrido, número de página por visita, fuga
    - Conversões: número de clicks, registros, cadastros
    - Tendência de performance ao longo do tempo
