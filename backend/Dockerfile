FROM node:14-alpin
WORKDIR /usr/src/app
RUN npm install -g nodemon
RUN npm install
EXPOSE 8080
CMD [ "nodemon", "server.js" ]
