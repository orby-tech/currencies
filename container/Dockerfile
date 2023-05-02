from node:18-bullseye

run npm install -g npm@9.6.3

RUN git clone https://github.com/orby-tech/currencies.git

RUN cd currencies && git pull

RUN cd currencies/backend && npm install && npm run build

RUN cd currencies/backend

CMD cd currencies/backend && node dist/backend/src/main.js 