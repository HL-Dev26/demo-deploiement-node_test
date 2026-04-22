FROM node:20.20-alpine
#SE rendre dans le repertoire de travail
#RUN CD /app
WORKDIR /app

# copier le code de l'app dans le conteneur
COPY ./simpleApp/* ./

# se rendre dans le répertoire


# Lancer la commande npm install
RUN npm install

EXPOSE 3000

# Executer l'application en arriere plan
CMD ["node", "index.js"]