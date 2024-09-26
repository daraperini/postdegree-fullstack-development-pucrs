# Banco de Dados NoSQL

## Banco de dados

- Deve garantir persistência de dados
- É uma coleçãpo de elementos de dados representando objetos de uma realidade
- Dados também devem estar armazenados em hardwares
- SGBDs garantem segurança de dadis e gerenciam diversos bancos de dados ao mesmo tempo
  - autenticação e autorização
- Relacional: estrutura de dados = tabelas

## Modelagem de dados

- Desenho dos requisitos e da estrutura do banco de dados
  - `Conceitual` - o que?
  - `Lógica` - como?
  - `Física` - implementação
- Modelos de dados: descrevem a estrutura de um BD
  - `Conceituais` :
    - entidade-relacionamento
    - orientado a objetos
  - `Lógicos`:
    - relacional
    - pós ou não-relacionais, noSQL ou Schemaless
  - `Físicos`:
    - suportados pelos SGBDs

- `Modelo conceitual`:
  - entidades/classes: representação de objetos de realidade
    - atributos: características das entidades
  - `relacionamentos ou associações`:
    - 1/n:
      - não-identificadores
      - identificadores: combina identificação dos 2 elementos para criar a identificação da relação
      - agregação: existência independente de outra entidade pai
      - composição: pertence a um outro atributo/entidade
    - n/n:
      - 1 instância pode estar relacionada a várias instâncias de outra entidade e vice-versa
  - `entidades/classes associativas`: 
    - normalmente n/n
    - representa relacionamentos entre instâncias de 1 relacionamento com outras entidades
  - `relacionamentos unários`: envolvem apenas 1 entidade/classe
  - `hierarquias de generalização/especialização`: reune em entidade/classes mais genéricas os atributos e os relacionamentos comuns a várias entidades/classes
    - total/parcial
    - exclusiva/não exclusiva

- `Modelo relacional`:
  - tabelas
    - colunas
      - tipos de dados + null/not null
  - tabelas que representam entidades do modelo conceitual
  - `Normalização de dados`: modelo relacional criado pela aplicação de Formas Normais. Evita redundâncias.
  
- `SGBDs não relacionais`:
  - Consistency
  - Availability: info disponível, sem dar erro
  - Partition tolerancy: continua operando mesmo que algum nó não esteja disponível
  - `Teorema CAP`:
    - não é possível ter os 3 ao mesmo tempo
  - `ACID`:
    - Atomic
    - Consistent
    - Isolated
    - Durable
  - `BASE`:
    - Basically available
    - Soft state
    - Eventually consistent