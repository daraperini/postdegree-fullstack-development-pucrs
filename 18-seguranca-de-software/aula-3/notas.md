# Segurança de software

## Segurança

- Defesa e ataque: entender como ataques funcionam para saber defender
- Metas:
  - Privacidade
  - Autenticação
  - Integridade
  - Não-repúdio

## Criptografia

- Como funciona:
  - cifrar: mensagem em texto cifrado
    - tem que parecer texto aleatório
    - não pode parecer um texto cifrado
  - decifrar: transformar texto cifrado em texto normal

### Criptografia simétrica:
  - cifra e decifra com a mesma chave
  - cifras de bloco: cifrar bloco de bytes inteiro (mistura todo o bloco e gera uma chave)
    - faz isso várias vezes, alterando a chave inicial por muitas rodadas
    - confusão e difusão
    - AES
    - o segredo está na chave, não no algoritmo
    - para decifrar, faz o mesmo processo ao contrário

- 1 rodada:
  1. substituição de bytes
  2. deslocamento de linha
  3. mistura das colunas
  4. soma com a chave da rodada

- Escalonamento de chave = gerar 1 chave para cada rodada
- Parâmetros para criação de cifra:
  - cifra (AES), modo de operação (como usar a cifra de blocos (CBC, CFB, CTR)) e padding(preecher para chegar a 16 bites)

### Criptografia assimétrica
- depende de matemática: aritmédica modular (resto da divisão Zn n-1)
- 2 chaves

- Troca de chave - Protocolo Diffie-hoffman:
  -  usuário 1 tem:
     -  p e g -> conhecido por todos
     -  a -> conhecido apenas pelo usuário
     -  A -> gerado pelo usuário e enviado para o servidor
        -  A = gª
  - usuário 1 recebe:
    - B

  - usuário 2 tem:
    -   p e g -> conhecido por todos
    -  b -> conhecido apenas pelo usuário
    -  B -> gerado pelo usuário e enviado para o servidor
       -  B = gb
  - usuário 2 recebe:
    - A

  - Usuário 1 faz: Bª = (gb)ª = gab
  - Usuário 2 faz: Ab = (ga)b = gab