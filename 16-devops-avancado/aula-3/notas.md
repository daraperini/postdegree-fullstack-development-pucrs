# DevOps Avançado

- Prática de engenharia de software que possui a intuito de unificar o desenvolvimento de software (Dev) e a operação de software (Ops)

- Integração Contínua (CI)
  - projetos de software → desenvolvidos do forma modular e por múltiplos desenvolvedores
  - cada em implementa e testa suaparte
  - necessidade de testes de integração ao final de cada sprint
  - CI é a prática de automatizar a build e o teste de todos componentes continuamente, sem aguardar o final do ciclo
    - versionamento de código
    - automatização de build/ compilação
    - automação de testes

- Distribuição contínuia (CD):
  - extensão da integração continua para diminuir o "lead time" (tempo entre escrever 1 linha e o software estar disponível para o usuário final (produção))
  - Continuous delivery / continuous deployment

- Infraestrutura automatizada:
  - Automatização de tarefas de gerenciamento
  - Gerenciamento de configuração
  - Infraestrutura como código
    - Permite aplicar melhores praticas de desenvolvimento de aplicações na infraestrutura
    - versionamento, code review, testes automatizados
    - o que pode ser feito no software pode ser feito na infraestrutura
      - consistência
      - rastreabilidade
      - reutilização
      - colaboração
  - Princípios:
    - versionamente
    - imutabilida de → alterações → substituir recurso
    - infraestrutura declarativa
    - testes e validação
    - automação
  - Terraform:
    - ferramenta para construir, modifica e versionar infraestrutura de forma segura e eficiente

- Observabilidade :
  - capacidade de entender o estado interno de um sistema, analisando sinais externos produzidos pelo mesmo
  - para identificar, diagnosticar e resolver problemas rapidamente
  - métricas: latência, vazão, taxa de erros...
  - logs
  - rastreamento: acompanhar o caminho de   uma requisição

- Feedback contínuo:
  - coleta, análise e aplicação de infos para melhorar a qualidade e eficiência do desenvolvimento e das operações
  - reduz riscos e erros, permitindo ajustes rápidos
  - estabelecer cultura de abertura e transparência na comunicação
  - utilizar métricas e indicadores de desempenho para monitorar o progresso e idenficiar áreas de melhoria