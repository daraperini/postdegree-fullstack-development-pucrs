# Banco de Dados Relacional

- `Classe associativa`: tem propriedades de associação e a associação correspondete tem propriedades de classe. Liga um relacionamento com outro relacionamento.

- `Modelo conceitual`: independente de SGBD
- `Modelo lógico`: específico para um SGBD, escrito de acordo com a linguagem aceita no sistema.

- `Domínio`: nome da propriedade. Conjunto de todas as possibilidades de um dado x.
- `Relação`: objeto. Repredentação de um objeto da realidade formado por um conjunto de elementos e dados definidos, cada um deles sobre um domínio.

- `Tabela`: 
  - cabeçalho: conjunto de atributos
  - corpo: conjunto de tuplas. 1 linha = 1 instância de classe

- `Linguagem SQL (Structured Query Language)`: 
  - interpretada
  - suporta definição do esquema físico (tabelas, restrições, etc) e sua manipulação
  - 5 conjuntos de comandos
    - ddl -> criação e manutenção de objetos
    - dml -> inserções, atualizações e execlusões
  - default -> null

- `Manipulação de dados`:
  - create table
  - insert into
  - select - from - where
  - update - set 
  - delete from
  - order by
  - distinct (não repete valores iguais. Ex.: select distinct)
  - desc
  - like (tudo que) in (procura x em qualquer um dos valores de uma lista)
  - alter table (drop, add)
  - to-char
  - to-date

  - `Integridade`:
    - `De entidade`: 
      - chave primária PK
        - constraint nome primary key (coluna)
      - chave candidata AK
        - constraint nome unique (coluna)
    - `De domínio`: só alguns valores são aceitos no campo
      - constraint nome check (valor aceito)
    - `Referencial`: entre 2 colunas. Garante que os dados de uma coluna de uma tabela se referem aos dados de uma outra coluna de uma outra tabela. 
      - Foreign keys (FK)
        - constraint fk
          - foreing key (chave)
            - references nomeTabelaPai (chave)
    - Relacionamento n-n: necessário criar uma tabela intermediária com relação 1-n;
      - Tabela composta pelas FKs das 2 tabelas que se relacionam
  
  - `Join`: unir tabelas para oter um resultado de consulta que inclui dados de mais de uma tabela
    - inner join: filtra apenas dados que se relacionam entre as duas tabelas
    - outer join: retorna todos os dados relacionados entre as tabelas e também o restante dos dados da coluna principal
      - left
      - right
      - full
    - cross join: combina todas as linhas da primeir tabela com todas as linhas da segunda comparando como verdadeiro ou falso a sua relação
    - Encadear join: quando precisa ligar dados de tabelas que não possuem referências entre si, porém existe uma tabela no meio que possui referência para as 2 tabelas

  - `Funções`: sobre linhas ou sobre conjuntos de linhas
    - numéricas e de caracteres
    - `De agregação:` conjunto de linhas. Calculam valores totais e subtotais.
      - select funçãoAgregada from nomeTabela
      - count, sum, avg, max, min, stddev, variance
      - `Group by`: agregamento dos resultados de uma consulta que gera subtotais por grupos em novas colunas
        - select coluna, funçãoAgregada from nomeTabela group by coluna
        - `Having`: where do order by
      - `Subconsultas`: juntar o valor de duas consultas em um valor só.
        - select coluna from nomeTabela where filtro operadorRelacional (select coluna from nomeTable where filtro)
  
- `Indexação`:
  - cria uma tabela a parte que guarda uma `chave de consulta` e o endereço físico (`rowid`) do banco de dados onde a informação está
  - para PK é criado automaticamente
  - mais rapidez nas pesquisas
  - sempre que incluir novo registro atualiza todos os índices -> entender necessidade da criação do índice
    - create index nomeIndice on nomeTabela(coluna)
- `Sequence`:
  - chave sequencial para tabelas
    - create sequence nomeSequencia start with numero
    - select nomeSequence.nextval(.currval) from nomeTabela
