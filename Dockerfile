# Utilisation d'une image de base Node.js
FROM node:18

# Répertoire de travail dans le conteneur
WORKDIR /app

# Copie du package.json et package-lock.json dans le répertoire de travail
COPY package*.json ./

# Installation des dépendances
RUN npm install

# Copie du reste des fichiers de l'application
COPY . .

# Commande pour démarrer l'application
CMD ["node", "index.js"]
