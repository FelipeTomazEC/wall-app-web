FROM node:14-alpine
ARG SERVICE_PORT=3001
ENV PORT=${SERVICE_PORT}
ARG BACKEND_URL
ENV REACT_APP_BACKEND_URL=${BACKEND_URL}
WORKDIR /usr/app
COPY package.json ./package.json
COPY yarn.lock ./yarn.lock
RUN yarn
COPY . .
RUN yarn build
RUN yarn global add serve
EXPOSE $SERVICE_PORT
ENTRYPOINT [ "serve", "build" ]