FROM node:14 as build-stage
WORKDIR /usr/src/app
COPY package*.json ./
COPY yarn.lock ./
RUN yarn
COPY . .
RUN yarn build


FROM nginx
COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html
# COPY nginx.conf /etc/nginx/conf.d/default.conf