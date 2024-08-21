# Banco de Dados Relacional

- `Banco de dados`:
  - representam um cenário do mundo real, com mudanças refletindo as mudanças da vida real
  - coleção de dados coerentes que sejam correlacionáveis
  - são projetados, desenvolvidos e populados com uma finalidade expecífica
  - principalmente utilizados para análise de dados

- `Sistema de Gerenciamento de Banco de Dados (SGBD)`:
  - sistema que permite criar e administrar um banco de dados
  - facilita definição, construção, manipulação e compartilhamento de dados e metadados entre usuários e aplicações
  - Oracle, MySQL, SQL server...
  - Metadados = dado sobre outro dado
    - metadados descritivos = descreve objetos. Ex.: nome de uma coluna na tabela -> descreve o que tem dentro daquela coluna

- `Sistema de Banco de Dados`:  
  - união do banco de dados com o SGBD
  - controle de dados e metadados

- `Minimundo e levantamento de requisitos`:
  - minimundo = trazer o mundo real para dentro de um banco de dados
  - entender o minimundo antes de iniciar um projeto de manco de dados, entender as necessidades do cliente
  - engenharia de requisitos -> levantamento de requisitos

- `Tipos de dados`:
  - tipo de dados pode ser explícito e contextual
  - INT
  - DECIMAL / FLOAT / REAL
  - CHAR
  - VARCHAR
  - DATE
  - DATETIME

- `Modelos de dados:`
  - principal caracterísitca de um banco de dados
  - modelo que oferece correlação, coerência e abstração
    - abstração ligada ao conhecimento que se deseja obter sobre os dados, sob diferentes perspectivas
  - composto por tabelas relacionadas entre si
  - relacionamentos têm regras para garantir a integridade dos dados
  - regras do minimundo devem estar incorporadas no modelo de dados

- `Cordinalidade`: grau de relação entre duas entidades que possuem o mesmo dado
- `Entidade`: física ou conceitual. Tabela.
- `Atributos`: descrevem as entidades. Colunas.

- `Modelo de dados conceitual`:
  - desenho do conceito do minimundo
  - Modelo Entidade-Relacionamento (MER)
  - representa conceitos e processos que devem ser inseridos no sistema de banco de dados

![<Modelo Entidade-Relacionamento (MER)>](<modelo-conceitual-exercicio.png>)

- `Constrains (restrições)`:
  - importantes para refletir a realidade
  - muito recomendado o uso para restrição conforme minimundo
  - Not Null, Unique...
  - `Chaves de relacionamento`: atributos que relacionam 2 entidades
    - `chave primária (PK)`: restrição de integridade da entidade. Identificação única da entidade
    - `chave estrangeira (FK)`: relação de integridade relacional. Ligação de relacionamento entre duas entidades em que o valor da chave pode ser repetido e pode receber valor nulo.

- `Index (índice)`:
  - não é restrição
  - objetiva agilizar a recuperação de registros durante as consultas a dados

- `Modelo lógico`:
  - evolução do modelo conceitual
  - mais próximo ao desenvolvimento
  - inclui constrains, tiopos de dados, chaves...
  - construído com base no diagrama entidade-relacionamento
  - tabela com uma coluna para cada entidade

![<Modelo Lógico>](<modelo-logico.png>)
