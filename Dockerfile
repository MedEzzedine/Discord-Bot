FROM node:16-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install
CMD ["npm", "install", "typescript", "ts-node"]
CMD ["npm", "start"]