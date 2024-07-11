# Qualidade e Teste de Software

- Assegurar que o software cumpra suas especificações e atende às necessidades dos clientes

## Conceitos

- `Verificação`: 
  - da correção, com base nas especificações
  - busca por defeitos
  - consistência, clareza, segurança ...

- `Validação`:
  - com o clinte, no ambiente final ou em um ambiente replicado
  - busca por problemas
  - usabilidade, desemprenho, portabilidade ...

- `Técnicas`:
  - `Estáticas`:
    - não requerem que o sistema seja executado 
    - revisão de artefatos anteriores à codificação
  - `Dinâmicas`:
    - requerem trabalhar com uma representação executável do sistema
    - testes

- `Níveis de testes`:
  - requisitos (revisões)
    - projeto (revisões)
      - implementação (testes unitários / integração)
        - testes (teste de sistema)
          - manutenção

  - teste de unidade (componente)
    - teste de integração (componentes unidos)
      - teste de sistema (todos os componentes, funcionalidades do sistema)
        - teste de regressão (re-teste quando há mudanças ou inclusões no código)

- `Casos de testes`: subconjunto de entradas e saídas planejadas, para um ambiente controlado de execução. Devem ser independentes para poder rodar em qualquer ordem.
- `Roteiro de teste`: conjunto de casos de testes.

- `Técnicas fundamentais de teste`:
  - `Caixa preta`:
    - teste funcional
    - não consegue ver o que está por trás da funcionalidade do software
    - baseado na especificação formal
    - normalmente teste em nível de sistema
  - `Caixa branca`:
    - teste estrutural
    - teste do código fonte
    - validação do código interno
    - baseado na estrutura do programa
    - normalmente teste em nível de unidade e integração

  - `Teste funcional`:
    - independente da linguagem/paradigma
    - depende de uma boa especificação dos requisitos
    - pode não identificar funcionalidades ausentes
  - `Teste estrutural`:
    - baseado nos fluxos de controle, na complexidade ou no fluxo de dados 

## Níveis de Testes

- `Testes no nível de unidades`:
  - Pegar a menor parte divisível do código e gerar códigos de teste que abranjam cada parte

- `Testes no nível de integração`:
  - Embora unidades funcionem em separado, elas e suas interfaces devem ser testadas em conjunto devido a possíveis efeitos colaterais do comportamento sistêmico
  - Executar de forma incremental -> feedback mais rápido ao time
  - Códigos de apoio:
    - `Drivers`: guia a execução do componente a ser testado; faz o papel do componente responsável por inicializar o componente a ser testado
    - `Stubs`: simulam o comportamento de uma unidade para que um componente consiga testar suas funcionalidades com um exemplo de unidade da qual depende

  - `Casos especiais - Softwares Orientados a Objetos`:
    - comportamento dependente do estado: considerar estado e dependências
    - encapsulamento: pode ser necessário ferir o encapsulamento para testes, quando precisar de informações restritas
    - herança: efeito de novos métodos e métodos sobrescritos
    - polimorfismo e ligação dinâmica: 1 chamada pode estar ligada a diferentes métodos
    - classes abstratas: necessário utilizar ao menos 1 classe derivada

- `Testes de Sistema, Aceitação e Regressão`:
  - Lidam com o comportamento de um sistema como um todo

  - `Teste de Sistema`:
    - verifica contra uma especificação de requisitos
    - verifica correção e completude do produto
    - comportamento funcional
    - requisitos de qualidade (confiabilidade, usabilidade, desempenho e segurança)
    - teste realizado a cada release
    - FURPS

  - `Teste de Aceitação`:
    - verifica a adequação às necessidades do usuário
    - valida utilidade e satisfação com o produto

  - `Teste de Regressão`:
    - verifica novamente casos de testes aprovados em versões anteriores do sistema
    - protege contra alterações indesejadas
