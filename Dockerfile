FROM node:8.9.0

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY node_modules package.json package-lock.json ./

# Bundle app source
COPY . .

EXPOSE 8080

CMD [ "npm", "run", "start" ]
