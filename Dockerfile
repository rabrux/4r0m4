FROM node:20-alpine AS builder

# install packages
RUN apk add --no-cache --virtual .dev make g++

# install libraries
WORKDIR /code
COPY ./package.json ./yarn.lock ./jsconfig.json /code/
RUN yarn install

# copy source code
COPY ./src /code/src
COPY ./public /code/public

# compile
RUN yarn build

# clean
RUN apk del .dev

# APP
FROM nginx:alpine

COPY --from=builder /code/build /usr/share/nginx/html
COPY ./nginx/conf.d /etc/nginx/conf.d
