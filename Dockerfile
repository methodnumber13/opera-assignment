FROM node:12.13.0-stretch

WORKDIR /app
COPY . .
RUN npm ci 
RUN npm run build:prod

EXPOSE 9009

CMD ["npm", "start"]
