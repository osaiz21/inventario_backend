FROM node
RUN npm install -g serve
RUN npm install -g pm2
RUN npm install -g nodemon
WORKDIR /app_backend
COPY package.json .
EXPOSE 3000


