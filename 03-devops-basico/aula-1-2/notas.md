## Ferramentas de versionamento de código

## GitHub

- Usando o GitHub pelas linhas de comando

`cd pastaParaGuardarRepositorio`
`git clone enderecoDoRepositorio` cria cópia do arquivo disponível no GitHub para trabalhar localmente
`git add .` adiciona no index todas as pastas/alterações do repositório criadas no editor de código
`git commit -m "Mensagem do commit"` adiciona no head o que estava no index -> apenas no repositório local
`git push` envia para o repositório do GitHub tudo que estava commitado

`git pull` atualiza arquivo local com todas as atualizações do arquivo remoto (do GitHub)

- Branches

`git checkout -b nomeDaBranch` navega para a branch -> pode commitar dentro da branch
`git branch` vê todas as branches do arquivo

- Merging

`git checkout main` se não estiver navegando na main, navegar para ela
`git merge nomeDaBranch` joga arquivos da branch secundária para a main
`git push` pusha para o GitHub, juntando os arquivos da branch secundária com a main


### ChaveSSH 

- Permite autenticação entre usuário e servidor. Cria chaves para manter a segurança dos dados.

`ssh-keygen -t rsa -b 2048` no console para criar nova lista de chaves -> uma pública e uma privada
`cd pastaSSH`
`cat nomeDaChaveCriada` para conseguir acessar a chave, copiá-la e usar onde for necessário


## Docker

### Principais comandos

`docker container run nomeDaImagem` cria novo container
`docker container run --name nomeDoContainer nomeDaImagem` cria novo container incluindo um nome dado pelo dev
`docker container run --rm --name nomeDoContainer nomeDaImagem` executa o container e ele se auto remove ao final da execução
`docker container run -it nomeDaImagem /ComandoQueQuerExecutar` entra em modo interativo - entra no container e habilita o terminal para executar instruções dentro do container - roda o container
`docker container ls` visualiza os containers que estão rodando localmente
`docker container ls -a` visualiza todos os containers existentes localmente

`docker container rm nomeDoContainer` exclui container
`docker container rm idDoContainer` exclui container

`exit` dentro do terminal do container: para a execução do container

`docker container run nginx` cria novo container rodando nginx, que roda continuamente e trava o uso do terminal
`docker container run -d nginx` retorna o ID do container, nginx está rodando no background mas não aparece explicitamente no console
`docker container exec -it idDoContainer /bin/bash` entra em modo interativo no container

- Port biding para visulizar a execução na máquina local: 
`docker container run -d -p portaQueSeraExecutadoLocalmente:portaDoContainer (ex: 8080:80 (80= porta padrão dos containers)) nomeDaImagem (ex: nginx)` -d para entrar em modo deamon (background) e -p para expecificar o port biding

`docker container run -d -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=mongouse -e MONGO_INITDB_ROOT_PASSWORD=mongopwd mongo` -e para passar variáveis de ambiente (são requeridos pelo mongoDB, ver documentação da imagem)

- nginx = aplicação que atua como servidor web ou proxy reverso

`docker container rm -f $(docker container ls -qa)` subcomando lista todos os ids e remove cada container

`apt update` atualiza a lista de repositórios para instalar novos pacotes
`apt install nomeNovoPacote` instala o pacote



`mkdir nomeDoDiretorio` criar diretório


### Criação de imagens Docker:
  - Utilizar Dockerfile
    - Criar diretório para armazenar o Dockerfile
    - No VScode, criar o arquivo Dockerfile
    - Para criação precisamos ter uma imagem base -> uma imagem é criada a partir de outra imagem commo base

 - Criando documento no VSCode:
   - `FROM`: especificar imagem base
   - `WORKDIR`: cria e entra no diretório de trabalho 
   - `COPY nomeDoArquivo paraOndeDeveSerCopiado(./)`: quando precisamos de um arquivo base para rodar algum RUN copiamos o arquivo para dentro da imagem
   - `RUN`: executa o comando necessário
     - apt update (atualiza a lista de repositórios)
     - apt install curl --yes (para instalar o curl no container)
   - `CMD ['runner', 'arquivoBaseAplicacao']`: determina a inicialização do projeto
   - `LABEL`: adicionar metadados na imagem
   - `EXPOSE`: define qual porta será utilizada pelo container
   - `ARG`: argumento que será usado no processo de construção
   - `ENV`: devine variáveis de ambiente
   - `ADD`: copia arquivos e diretórios, utiliza chamadas de arquivos remotos para baixar da web se necessário, consegue copiar arquivos compactados, e adiciona no arquivo da imagem
   - `COPY`: copia arquivos ou diretórios e adiciona ao arquivo de imagem
   - `ENTRYPOINT`: como o CMD, configura inicialização do app
   - `VOLUME`: configura volume do container



 - Executando o documento no terminal:
   - `docker build -t nomeDaImagem -f Dockerfile contexto` contexto = diretório que será enviado ao Docker Daemon para construir a imagem. -f Dockerfile não precisa ser especificado porque por padrão ele procura esse documento para buildar
     - nomeDaImagem:
       - namespace/nomeDoRepositorio:tag
   
A partir disso temos uma nova imagem que, nesse caso, possui o curl instalado e sempre que um docker container for criado a partir dessa imagem, ele já terá o curl.

### Subindo imagem para o Docker Hub:
  - `docker push nomeDaImagem`
  
  - Boa prática: subir com tag `latest` para indicar a última versão:
    - `docker tag nomeDaImagemComPrimeiraTag nomeDaImagemComTagAdicionada` para adicionar tag a uma imagem
    - Pushar novamente a imagem utilizando a nova tag: ele não vai fazer upload novamente, só vai enviar a tag nova para identificação da latest


## Pipeline CI

- Para criar usando Github Actions:
  - github
  - acessa repositório
  - actions
  - seleciona alguma das recomendadas ou cria a sua própria

  - a pipeline CI deve conter:
    - `name: CI`
    - `on:` especificar triggers (ex.: `push: branches:[branch]`, `pull_request: branches:[branch]`)
    - `jobs:` possuem `steps` que são executados sequencialmente, assim como os jobs são executados sequencialmente
      - dentro do jobs especificar o runner declarando `runs-on: runner`


### Workflow para o projeto `conversao-temperatura-2-main`:

<!-- nomeando o workflow -->
  name: CI

<!-- definindo quando o workflow deve ser ativado -->
  on:
    push:
      branches: [main]

<!-- definindo as etapas do workflow -->
  jobs: 
    CI:
  <!-- definindo onde o workflow vai rodar -->
      runs-on: ubuntu-latest

  <!-- definindo os passos do workflow -->
      steps:
      - uses: actions/checkout@v4

  <!-- garantindo a instalação do Nodejs no runner para poder compilar a aplicação (projeto foi desenvolvido em Nodejs versão 16.15.1) -->
      - name: Setup do Node.js
        uses: actions/setup-node@v4.0.2
        with:
          node-version: 16.15.1

  <!-- instalando a ferramenta de testes e os pacotes para poder rodar os testes -->
      - name: Instalação do Mocha e dos pacotes para teste
        run: |
          cd src;
          npm install -g mocha;
          npm install
          
  <!-- executando os testes -->
      - name: Execução do teste
        run: mocha src/test/convert.js


  <!-- fazendo login com o Docker Hub para ter permissão de acesso a imagem utilizando secrets para não expor username e password-->
      - name: Autenticação no Docker Hub
        uses: docker/login-action@v3.1.0
        with:
          username: ${{secrets.DOCKERHUB_USERNAME}}
          password: ${{secrets.DOCKERHUB_PASSWORD}}

  <!-- construindo e pushando a imagem docker. github.run_number pega o número da execução da pipeline e utiliza como tag -->
      - name: Construção da imagem Docker
        uses: docker/build-push-action@v5.3.0
        with:
          context: ./src
          file: ./src/Dockerfile
          push: true
          tags: |
            fabricioveronez/aula-conversao-temperatura:${{github.run_number}}
            fabricioveronez/aula-conversao-temperatura:latest



<!-- Indentação deve estar correta pro código funcionar devido a extensão .yml do doc! -->



<!-- ADICIONAR SECRETS EM UM PROJETO:

  No GitHub:
    - Settings
    - Secrets
    - Actions
    - New repository secret
      - Name: dar um nome ao secret ex.: DOCKERHUB_USERNAME
      - value: valor do secret

 -->

 ### Rodar pipeline a partir de alteração local do código

 - Criar imagem usando `docker container run -d -p portaQueSeraExecutadoLocalmente:portaDoContainer nomeDaImagem`
 - Realizar alguma alteração no código e pushar pro github;
 - Pipeline roda no github a partir do trigger do push;