FROM node:16-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install && npm install typescript ts-node

CMD ["npm", "start"]

RUN echo 'Bot successfully deployed'