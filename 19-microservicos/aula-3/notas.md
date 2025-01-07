# Microsserviços

## Comunicação assíncrona via filas

- Filas de mensagem:
  - Assíncrona
  - Cada mensagem produzida por um produtor é entregue a um único consumidor
  - Adequado para distribuiçãoi de carga

- Tópico de mensagens:
  - Cada mensagem produzida por um produtor é entregue a todos os consumidores 
  - Multicast

- Message broker:
  - sistema especializado em recepção e envio de mensagens
  - desconhece detalhes sobre os produtores e consumidores
  - capaz de persistir mensagens
  - importante utilizar replicação/redundância

  - Tipos de envio:
    - 'no máximo uma vez' - só envia uma vez e se não chegar paciência
    - 'ao menos uma vez' - garante que entrega a mensagem pelo menos 1 vez até a mensagem ser processada
    - 'exatamente uma vez' - garante que só entrega 1 vez a mensagem. se resposta do usuário não chegar, não reenvia

- Mensagens para:
  - Notificar eventos de domínio: notificar o cliente sobre a criação da conta
  - Atualizar caches de daos de outros serviços: semelhante a eventos de domínio, mas com dados
  - Processamento paralelo
  - Problemas com transações de BD
  - 