FROM node:14-alpine
WORKDIR /app
COPY package* ./
RUN npm install
COPY . ./
EXPOSE 3030
CMD ["npm", "start"]