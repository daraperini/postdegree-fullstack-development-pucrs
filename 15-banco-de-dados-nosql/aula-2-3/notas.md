# Banco de Dados NoSQL

- `Consistência`: dados devem ser visualizados de forma igual por todos os requerentes
- `Durabilidade`: quanto tempo um dado deve estar disponível
- `Disponibilidade`: capacidade do dado estar disponível quando solicitado
- `Escalabilidade`: capacidade de servidor de aumentar sua capacidade
- `Fonte da verdade`: base durável, contendo versão confiável dos dados
- `Cluster`: agrupamento de unidades computacionais
- `Shard`: participação/pedaço dos dados de um banco
- `Throughput`: capacidade de transmissão de dados

- Porque NoSQL?
  - casos de uso cada vez mais complexos
  - clusters estão mais comuns (cloud)
  - maior quantidade de dados
  - maior throughput de leitura/escrita
  - flexibilidade na estrutura dos dados

- `Escalabilidade horizontal`:
  - `sharding`: fragmenta o servidor de BD em partes que são totalmente responsáveis pela leitura/escrita de seus dados. Se um shard cai, aquela fração de dados se torna indisponível
  - `replicação mestre/escravo`: nodo principal responsável pela escrita e replicação dos dados e nodos secundários responsáveis por processar as leituras. Pode gerar problemas de consistência ou disponibilidade. SPOF
  - `peer-to-peer`: todos os nodos dividem responsabilidade de gravar/ler todos os dados, além de replicar seus dados com os demais nodos. Também pode gerar problemas de consistência ou disponibilidade
  - Podem ser usados em conjunto

## Mongo DB

- esquema de daos flexível (schemaless)
- escalável (suporta starding/clusterização)
- bom throughput para leitura/escrita
- suporta operadores nativos para agregação de dados
- suporta ACID parcialmente
- documentação extensiva
- integração testada com principais linguagens
- linguagem baseada em JS
- orientado a documentos

- Documento = unidade básica
  - Linguagem BSON
  - identificador único
  - formatos/campos variados
  - agrupados em coleções equivalentes a tabelas no SQL
  - nativamente clusterizável
  - máximo 16MB
  - elementos suportam indexamento
  - suporta aninhamentos de documentos
  - suporta transações ACID
  
- Casos de uso:
  - análise de dados em tempo real
  - controle/armazenamento de infos de usuários
  - IOT
  - catálogo de produtos
  - armazenamento de dados de sessão

- Tradeoffs:
  - bão suporta transações ACID entre documentos/coleções
  - não suporta JOINS nativos entre coleções
  - limite de 100MB de utilização de memória em alguns estágios de agregação
  - armazenamento de cada documento tem um limite físico
  - utilização de memória para armazenamento é grande (mas custoso)

## Cassandra DB

- família das colunas
- excelente performance na escrita de dados
- cloud-native
- possível tunar quase todos os aspectos
- arquitetura masterless (todos os nodos individuais)
- altamente disponível e tolerante à falhas
- horizontalmente escalável
- suporta muitos dados
- linguagem CQL
- consistência eventual
- trabalha com PKs
- arquitetura em anel
- dados nativamente dividos em nodos

- Consistência eventual:
  - conflitos:
    - escrita-escrita
    - leitura-escrita
  - janelas de inconsistências
  - para evitar inconsistências:
    - transações atômicas: todos os dados atualizados ao mesmo tempo
    - abordagem pessimista: impede operações concorrentes através de locks -> locks impedem operações de mais de uma pessoa ao esmo tempo
    - abordagem otimista: resolve de forma automática inconsistências. Permite 2 alterações diferentes ao mesmo tempo

- Nomenclatura:
  - keyspace: similar ao database
  - table: objeto de banco similar a tabelas de SQL
  - Primary Key
  - Partition Key: derivada de elementos da PK que direciona os dados pro nodo correspondente
  - Clustering key: também derivada da PK, ordena os dados dentro de uma partição
  - Tombstones: dados não são inicialmente deletados, apenas marcados como removidos
    - afeta performance
    - soft deletes: quando deleções são frequentes (delete = true/false)
    - dados são eventualmente deletados
  
- Compactação de dados:
  - STCS: padrão. Para muita escrita
  - LCS: para muita leitura e escrita majoriatiamente de atualizações
  - DTCS: para dados "time-series"

- Dados escritos vão primeiramente para um `commit log` e numa SSTable e só depois são madados para o disco 
- Duplicação de dados é comum e esperado
  - Normalmente 1 tabela para 1 consulta

- Casos de uso:
  - e-commerce e gestão de inventário
  - eventos time-series
  - serviços de pagamento/financeiros
  - distribuição e armazenamento de conteúdo

- Tradeoffs:
  - não suporta operações ACID
  - duplicação de dados pode se tornar um problema
  - leituras mais lentas que escritas
  - não possui subqueries, agregações ou joins nativos
  - consistência não é o ponto forte, mesmo tunado
  - não serve para todos os casos

## Redis

- família chave-valor
- throughput de leitura/escrita excelentes
- esquemas de dados flexível
- linguagem simples
- integração com múltiplos clientes
- facilmente escalável
- suporta adição de módulos com funcionalidades estendidas tipo extensões
- todo valor salvo é atrelado à uma chave única
- arquitetura single-threaded (executa 1 thread por vez)
- valores podem ter formatos/estruturas diferentes
- dados mantidos em memória RAM
- valor tem tamanho máximo de 512MB
- não oferece paralelismo (tarefas feitas em simultâneo) porém tem suporte à concorrência (interrompe tarefa principal para resolver tarefas mais simples/rápidas)

- Modelos de persistência:
  - RDB: snapshot do BD de tempos em tempos. Quando usado como banco secundário
  - AOF: arquivo de log salva todos os comandos realiados, que são repetidos quando o banco é inicializado. Quando o banco é fonte da verdade
  - Sem persistência: quando BD é usado para caching

- `Redis Search`: módulo que permite buscas por elementos, paginação e agregação

- Casos de uso:
  - cache
  - armazenamento de informações de sessão
  - chats, sistemas de mensagem
  - placares de jogos
  - análise de dados em tempo real

- Tradeoffs:
  - single-threaded pode gerar gargalos
  - custo de armazenar dados em memória
  - natureza efêmera -> pode gerar downtime -> se algo acontece perde tudo e tem que refazer tudo
  - armazenamento de cada valor tem limite físico
  - funcionalidades completas dos módulos extras só na versão paga
  - sem módulos só é eficiente acessar dados pela chave

## Neo4J

- família dos bancos orientados a grafos
- suporta transações ACID
- base de dado flexível
- comunicação REST
- muito performático em conexões/relacionamentos entre dados
- consultas muito eficientes

- Nomenclatura:
  - nós: unidade básica
  - labels: agrupamento de nós
  - relacionamentos: conexão entre nós
  - aspects: infos de cada nodo

- baseado em algoritmos tradicionais -> escolhem os melhores caminhos
- linguagem Cypher baseada em SQL
- feito em Java

- Casos de uso:
  - redes sociais
  - detecção de fraude
  - recomendações de conteúdo
  - controle e gestão de identidade
  - análise de risco
  - mapas e coordenação de rotas

- Tradeoffs
  - casos de uso específicos, não para uso geral
  - falta de suporte a operações de agregação
  - comunidade pequena
  - não apropriado para escritas massivas (problemas de memória)

## Modelagem de dados

- Levar em conta:
  - padrões de acesso
  - formato dos dados
  - consistência dos dados
  - frequência de acesso
  - mais escrita ou mais leitura?
  - durabilidade dos dados
