FROM node:16-alpine

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install -g typescript ts-node && npm install

COPY . .

CMD ["npm", "start"]
