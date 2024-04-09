# imagem criada a partir da imagem base ubuntu com o objetivo de incluir o curl
FROM ubuntu 
RUN apt update && apt install curl --yes

# se dividirmos todos os comandos RUN em comandos separados podemos sofrer consequencias no update da lista de repositórios da imagem
# RUN apt install net-tools --yes
# RUN apt install vim --yes
# RUN apt install curl --yes