# imagem base é o node nessa versão. Não atualiza quando a versão latest muda e assim garantimos idempotencia.
FROM node:16.15.1
# cria e entra no diretório de trabalho
WORKDIR /app
# precisamos do arquivo package.json e o package-lock.json (por isso *) para ser possível instalar o node. Fazemos a cópia do package.json e rodamos o npm install para evitar que o projeto se rebuilde toda vez que tenha alteração no projeto que não envolva novas dependências.
COPY package*.json ./
# executa npm install
RUN npm install
# copia o resto da aplicação no diretório /app. Fazemos separado do package.json para só rebuildar essa parte quando tem alterações sem mudança nas dependências do projeto.
COPY . .
# define a porta que será usada pelo container
EXPOSE 8080 
# comando que promove a inicialização da aplicação. Só é executado quando o container é executado, não é executado durante a build do container.
CMD ["node", "server.js"] 