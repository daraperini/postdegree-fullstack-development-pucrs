## Datacenters e Nuvem

### Datacenters

- Espaço dedicado para abrigar componentes de infraestrutura de TI (servidores, equipamentos) para realizar o processamento e armazenamento de dados.
- Pode ser desenvolvido pela empresa para usar dentro da empresa ou pode ser terceirizada.
- Serviço de nuvem roda consumindo serviços de datacenters terceirizados.

- Arquitetura hyperscale: arquitetura com capacidade de escalar adequadamente à medida que o aumento da demanda é adicionada
  - Datacertes hypescale são gigantes (google, amazon, microsoft)

### Computação em nuvem

- Entrega sob demanda de serviços computacionais por meio da nuvem
- Transforma estruturas de datacenter em serviços e comercializa os serviços

- Vantagens: 
  - Troca despesas de capital por despesas variáveis
  - Economia de escala do provedor (que pode ser repassada ao usuário)
  - Parar de especular sobre a capacidade da operação
  - Aumento da velocidade e agilidade
  - Parar de gastar dinheiro para executar e operar datacenters
  - Torna-se global em minutos


- Arquitetura de software: componentes de software, suas propriedades externas e relações com outros softwares. Construída a partir de um conjunto de decisões técnicas e de negócios.
- Arquitetura de nuvem: qual arquitetura de nuvem dará suporte à arquitetura de software?

`Arquitetura de nuvem`:
    - `Multitenancy`: Modelo de Sotware como Serviço (Saas) demanda arquitetura e tecnologia desenhadas para operar em nuvem. Venda do serviço para diversos inquilinos não podem interferir entre os serviçoes.
    - `Inquilio isolado`: Não há compartilhamento de dados entre inquilinos. Cada um tem seu próprio stack de tecnologia, similar ao modelo tradicional de hosting.
    - `Multi-inquilino via hardware compartilhado`: virtualização traz segurança e isolamento às aplicações, permitindo que rodem em um mesmo servidor sem interferir umas nas outras. Continua oferecendo um stack de tecnologia para cada inquilino, mas com hardware compartilhado.
    - `Multi-inquilino via containers`: vários inquilinos compartilham uma mesma instância de um container, mas cada um está associado a uma instância diferente, garantindo isolamento.
    - `Multi-inquilino via stack de software compartilhado`: vários inquilinos compartilham todo o stack de software, até o banco de dados.

- Para definir uma arquitetura de nuvem é necessário estipular:
  - Requisitos de negócio (o que o negócio espera ser? Do que precisará para funcionar?)
  - Arquitetura de referência (referência para criar uma arquitetura de nuvem: o que preciso que o serviço de nuvem me ofereça para meu sistema funcionar em nuvem?)
  - Requisitos técnicos


- `Tipos de infraestrutura de provedores de nuvem`:
  - `SAAS`: Software como serviço (disponibiliza todo o serviço)
  - `PAAS`: Plataforma como serviço (disponibiliza serviço de hardware e software)
  - `IAAS`: Infraestrutura como serviço (disponibiliza serviço de hardware)

- `Aspectos essenciaios da Arquitetura de Nuvem`:
  - `Otimização de custos` (menor custo entregando todos os requisitos e utilizando tudo que está sendo comprado)
    - Gerenciamento financeiro
    - Adotar modelo de consumo
    - Medir eficiência geral
    - Parar de gastar em tarefas pesadas genéricas
    - Analisar e atribui gastos
  
  - `Excelência operacional` (precisa conseguir apoiar os objetivos da empresa e entregar com eficiência o necessário para a carga de trabalho)
    - Executar operações como código
    - Fazer alterações frequentes, pequenas e reversíveis
    - Refinar procedimentos de operações com frequência
    - Antecipar falhas
    - Aprender com as falhas e propagar o conhecimento para a empresa

  - `Eficiência de performance` (usar recursos de forma eficiente para atender requisitos e manter a eficiência)
    - Democratizar tecnologias avançadas
    - Ter alcance global em poucos minutos para diminuir latência
    - Usar arquiteturas sem servidor (containers)
    - Experimentação
    - Levar as particulidades em consideração

  - `Confiabilidade` (garantir o funcionamento correto e constante da aplicação)
    - Recuperar falhas automaticamente
    - Permite testar procedimentos de recuperação
    - Permite e scalar horizontalmente
    - Parar de adivinhar a capacidade
    - Gerenciar alterações na automação
 
  - `Segurança` (garantir a segurança dos dados, sistemas e ativos)
    - Implementar base sólida de identidade
    - Habilitar a capacidade de monitoramento
    - Aplicar segurança em todas as camadas
    - Automatizar as melhores práticas de segurança
    - Proteger dados em trânsito e em repouso
    - Manter as pessoas afastadas dos dados
    - Preparar para eventos de segurança

