# DevOps Avançado

- Cultura da entrega contínua, com valor, que combina desenvolvimento e operações. Faz uso das melhores metodologias, práticas e ferramentas da área da TI.
  - Integração Contínua
  - Distribuição / implementação continua
  - virtualização e containers
  - Infra como código
  - Gerenciamento de configuração
  - comunicação e colaboração

- Revisão de conceitos
  - Planejamento
    - normalmente usa Metados Ágeis
    - metas e objetivos
    - equipe multidisciplinar
    - metodo e ferramentas
  - Buid / construção
    - construção do artefato que deve ir para produção
    - integração
    - construção
    - versionamento
      - git -> code build -> docker
        - ecr -> ecs -> cluster / forgate
        - 

    - arquivo buildspec.ynl
      - especificações do build
      - comandos pera criar o build
      - pré build → faz conexão, commita e cria imaga
      - build -→ builda imagem
      - pós-build → envia imagem para algum lugar e gera arquivo json que será utilizado para gerar infraestrutura
        - imagem é baseada em um arquivo Dockerfile

- CI/CD
  - Integração contínua - automatizar o build, teste e deploy continuamente
  - CD = precisa que alguém clique num botão para iniciar deploy. quando nãu tem CI também
  - CI = integram codigo em repositória compartilhado várias vezes ao dia. cada commit é verificado automaticamente
  - CD → automatização no ambiente de produção
    - user → ECS → custer (code pipeline - automatização) → task / service

- container = empacota códigos, configuracões, bibliotecas, serviços dependentes....
  - imutável
  - normalmente criado com base em uma imagem → e podem virar rovas imagens → kubernets
  - ECS → disponibiliza os containers
  
- Servereess = modelo de desenvolvimento nativo em nuvem p/ criação e execução de apps sem e gerenciamento de servidores
  - arquitetura de infra pronta
  - AwS Fargate

- Pipeline
  - fluxo de cada stage → ações executados de forma serial ou paralela - se 1 falha pipeline inteira deve abortar
  - código fonte
  - build
  - teste
  - deploy
  - Trouble shooting → diagrama indicando possíveis problemas do produto, processo ou sistema operacional, suas causas e como procede quando ocorrem - logs
  - Pode ser disperado periodicamente ousempre que ocorre uma pausa
  - em ambiente de homologação e de produção