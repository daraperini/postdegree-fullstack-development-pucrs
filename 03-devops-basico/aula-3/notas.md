# DevOps Básico

- `Pipeline CI`: Para configurar uma pipeline inicial para um novo projeto, procurar um projeto grande e profissional que utilize as mesmas ferramentas do seu projeto. Usar como base o conjunto de configurações daquele projeto para criar sua pipeline, alterando o que for necessário e acrescentando features conforme identificar possíveis melhorias.

## Git e Github

- Tomar cuidado com os commits: 
  - Commitar uma mudança por vez para ter o histórico correto e, quando for colocar em produção, conseguir selecionar versões que não conflitem entre si;
  - Histórico está sempre disponível no git, quando baixamos o projeto fazendo git clone ele vem na versão atual mas, se quiser ver as anteriores, elas estão disponíveis. Usar gitignore para arquivos que não devem estar presentes nos commits para não ficar no histórico.

- Git é servidor e usuário ao mesmo tempo:
  - GitHub tem git Deamon e nossa máquina também!

- `Comandos git`:
  - `git clone`: traz um repositório inteiro para a sua máquina (com histórico)
  - `git add`: adiciona no local de transferência um arquivo que tenha tido alguma alteração
  - `git commit -m mensagemExplicandoOQueFez`: entrega modificações contidas no local de transferência. Podem ser feitos diversos commits sem ter enviado o último para o github
  - `git push`: comando que atravessa a rede e envia as modificações contidas no commit para o github
  - `git pull`: pega alterações do repositório no github e trás para a máquina local
  
- `GitHub`: 
  - `Fork`: copia o repositório inteiro para o seu perfil do github, fazendo com que seja possível fazer alterações no código sem mexer no código fonte
  - Aba `Issues`: lista que oferece a opção de descrever problemas a ser arrumados e tarefas a serem desenvolvidas enumeradas, incluindo rótulos para divisão de qual item da lista se refere a o que. É como um quadro de tarefas.


- `Jogo git`:
https://learngitbranching.js.org
  - `commit`:
    - Um commit em um repositório git registra uma fotografia (snapshot) de todos os arquivos no seu diretório. É como um grande copy&paste, mas ainda melhor! O Git tem por objetivo manter os commits tão leves quanto possível, de forma que ele não copia cegamente o diretório completo toda vez que você commita. Ele pode (quando possível) comprimir um commit como um conjunto de mudanças (ou um "delta") entre uma versão do seu repositório e a seguinte.
    - `git commit`

  - `branches`:
    - Ramos no Git também são incrivelmente leves. Eles são simplesmente referências a um commit específico -- e nada mais. É por isso que muitos entusiastas do Git entoam o mantra: ramifique cedo, ramifique sempre. Devido a não existir sobrecarga de armazenamento / memória associada à criação de ramos, é mais fácil dividir logicamente o seu trabalho do que ter ramos grandes e gordos.
    - São fáceis de mover e geralmente vão se referindo a diferentes commits conforme você vai trabalhando no código. São facilmente mutáveis, frequentemente temporários, e estão sempre mudando.
    - `git branch nomeDaBranch`
  
    - `checkout`:
      - Altera ramos do git
      - `git checkout nomeDaBranchQueQuerEntrar`

    - `merge`:
      - Forma de combinar o trabalho de dois ramos diferentes. Isso nos permitirá ramificar, desenvolver um novo recurso, e então combiná-lo de volta.
      - `git checkout nomeDaBranchQueQuerEntrar`
      - `git merge nomeDaBranchQueQuerUnirComABranchSelecionada`
    - `rebase`:
      - Outra forma de combinar trabalho entre ramos. O rebase essencialmente pega um conjunto de commits, "copia" os mesmos, e os despeja em outro lugar. A vantagem do rebase é que ele pode ser usado para construir uma sequência mais bonita e linear de commits. O registro de commits (história do repositório) ficará muito mais limpa se for utilizado apenas rebase em vez de merge. A branch rebased ainda existe em algum lugar, e a branch rebaseada é como uma "cópia" desta.
      - `git checkout nomeDaBranchQueQuerEntrar`
      - `git rebase nomeDaBranchQuerQueABranchSelecionadaPasseAPertencer`
      - `git checkout nomeDaBranchQueQueABranchPasseAPertencer`
      - `git rebase nomeDaBranchQueDeveSerRebasada`

    - `HEAD`:
      - É essencialmente o commit sobre o qual você está trabalhando no momento. O HEAD sempre aponta para o commit mais recentemente copiado sobre a árvore de trabalho (arquivos do projeto). A maioria dos comandos do git que realizam mudanças sobre a árvore de trabalho começarão mudando o HEAD.
      - Para alterar o HEAD de uma branch para um commit (detached HEAD):
      - `git checkout hash(Referencia)DoCommit`

    - `hashes`:
      - São as referências dos commits. Especificar commits pelo hash não é a sempre o mais conveniente, e é por isso que o Git suporta referências relativas.
      - `git log` para ver os hashes

    - `Referências Relativas`:
      - Com referências relativas, você pode começar a partir de um ponto fácil de lembrar (como o ramo bugFix ou o HEAD) e referenciar a partir dali.
      - Mover para cima um commit por vez com `^`
        - Diz para o git encontrar o pai do commit especificado
        - `main^`: pai do main
        - `main^^`: avô do main
          - `git checkout main^^`: seta o HEAD no commit avô do main
          - `git checkout HEAD^`: seta o HEAD no commit acima do seu local atual
        - Quando estamos navegando a partir de um commit de merge:
          - `git checkout commit^numeroDoPai`: navega para o pai de acordo com o número declarado
      - Mover para cima um número de vezes com `~<num>` 
        - `git checkout HEAD~4`: seta o HEAD 4 níveis acima do seu local atual

    - `Forçando deslocamento dos ramos`:
      - Para redefinir o commit para qual um ramo aponta usar `-f`
        - `git branch -f main HEAD~3`: move à força o ramo main 3 ancestrais acima do HEAD

    - `Revertendo mudanças no Git`:
      - Assim como o ato de commitar, reverter mudanças no Git também tem um componente de baixo nível (a preparação, ou staging, de arquivos ou trechos de arquivos individuais) e um componente de alto nível (como as mudanças são, de fato, revertidas).
      - `git reset referenciaDoLocalParaOndeDeveVoltarNoHistorico`: reverte mudanças movendo para trás no tempo (para um commit mais antigo) a referência do ramo. Move o ramo para trás como se o commit nunca tivesse existido. Não funciona com ramos remotos que outras pessoas estejam usando, apenas localmente.
      - `git revert referenciaDoCommitComAlteracoesQueDeveSerRemovido`: reverte mudanças e permite compartilhar essas mudanças com os outros. Cria um novo commit que NÃO POSSUI todas as alterações feitas no commit referenciado. Permite fazer push para compartilhamento.

    - `Movendo trabalhos conforme necessário`:
      - Formas como o desenvolvedor pode dizer "eu quero este trabalho aqui, e aquele ali".
      - `git cherry-pick <Commit1> <Commit2> <...>`: Trata-se de uma forma bastante direta de dizer que você gostaria de copiar uma série de commits abaixo do seu local atual (HEAD). Mantem os commits onde estão e cria uma cópia abaixo do seu local atual.
      - Rebase interativo: rever uma série de commits sobre os quais você está prestes a fazer um rebase. 
        - `git rebase -i localAPartirDoQualQuerRebasarCommitsAbaixo` O git abrirá uma interface para mostrar quais commits estão prestes a serem copiados abaixo do alvo do rebase.  Ele também mostra os hashes e as mensagens dos commits, o que é ótimo para ter noção do que é o que.
          - Permite: 
            - 1- Reordenar os commits mudando sua ordem na interface
            - 2- Omitir commits (deselecionar pick)
            - 3- Fazer squash (combinar) de commits.
        - `git rebase commitReferencia commitQueDeveVirAposOCommitReferencia`

    - `Tags no Git`:
      - Forma de marcar permanentemente pontos históricos do projeto como se fossem "milestones", para grandes releases ou grandes merges. O mais importante, no entanto, é que elas nunca se movem sozinhas quando novos commits são criados. Tags existem como âncoras na árvore de commits que estão atreladas a certos pontos. Não é possível fazer commit diretamente dentro da tag (quando damos `git checkout tag` ele entra em estado Detached HEAD).
      - `git tag nomeDaTag hashDoCommit`: cria tag
      - `git describe referenciaAUmCommit`: descreve onde você está em relação a âncora mais próxima. Saída do comando: `<tag>_<numCommits>_g<hash>` onde tag é a tag ancestral mais próxima no histórico, numCommits é o número de commits de distância da tag, e <hash> é o hash do commit sendo descrito.


## MVN Repository

- Opção para gerência de configurações.
- Empacotador.
- Possui um banco de dados que permite que nós procuremos as dependências (bibliotecas) que precisamos para o projeto e nos entrega os metadados para incluir no arquivo de configurações.
- Escolher a versão de acordo com a data da versão -> ela tem que condizer com a data de criação do projeto (latest daquele momento).
- Tomar cuidado com as vulnerabilidades -> escolher uma versão sem vulnerabilidade (se necessário alterar a versão do projeto).

- mvn archetype permite criar um formato base para a criação de projetos
  - hierarquia de pastas
  - nome de pastas -> alterações podem vir a quebrar a execução do projeto

- O pom.xml é o core da configuração do projeto
  - gerenciamento de dependências internas
  - permite dizer o escopo de cada dependência. Ex.: setar <scope>test</scope> quer dizer que a dependência só será instalada até a etapa de teste, não no de produção
  - pom.xml vai sendo versionado junto com o projeto, crescendo de acordo com o crescimento do projeto
  

- `mvn package`: cria pacote


## AptGet - Ubuntu

- Gerenciador/Instalador de pacotes
- Possui lista de programas que consegue instalar em um site
- Indicamos o nome do programa, ele vai até o site procurar o endereço do fornecedor, pega o arquivo, executa um script e instala na máquina automaticamente (inclusive as dependências daquele programa)
- Criação de imagens Docker
- A principal contribuição do gerenciador é identificar e recomendar pacotes compatíveis de acordo com a instalação existente.


## SDKMAN

- Software Development Kit Manager
- Entra em execução no computador, verifica suas características, e verifica quais instalações estão disponíveis de acordo com seu sistema operacional, processador etc...
- Transfere, instala e configura o JDK (JAVA Development Kit)


## Spring

- Gera um arquivo de configuração gradle ou mvn e um projeto com estrutura de pastas de convenção 
- Permite criar um arquivo de configurações selecionando preferências pelo Spring initializr e acrescentando dependências


## Sonar

- Recurso para, ao invés de executar o programa, inspecionar o código.
  - O código atende a recomendações de convenções? Atende a recomendações de segurança?...
- Iniciar o projeto já com uma ferramenta de verificação de código -> implementá-lo após o início será quase impossível porque não terá como refazer tudo o que ele indicar
- Regras são alteradas o tempo todo, mas esse tipo de programa só mostra regras relacionadas ao seu projeto!
- Indica a linha do código e o tipo de interferência verificada.

