FROM node:12-alpine
#RUN apk-add ca-certificates
ADD ./main.js home/node/
CMD node home/node/main.js
EXPOSE 2468
