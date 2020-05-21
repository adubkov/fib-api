FROM node:12-alpine
ADD ./main.js home/node/
CMD node home/node/main.js
EXPOSE 2468
