FROM node:18.17

COPY package.json /portfolio/
COPY src /portfolio/src
COPY public /portfolio/






WORKDIR /app

RUN npm install
CMD ["npm", "start"]

