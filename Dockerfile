# Dockerfile

FROM node:8.9.4

ADD . /home/app

WORKDIR /home/app

RUN npm install

EXPOSE 8090

ENTRYPOINT ["npm", "start"]
