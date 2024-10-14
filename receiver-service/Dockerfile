FROM node:18

WORKDIR /app
COPY ./src /app/src
COPY package*.json /app/
RUN npm install

EXPOSE 3000
CMD ["node", "src/index.js"]
