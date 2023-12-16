FROM node:20

# Working Dir
WORKDIR /usr/src/app

# Copy package.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

#build
RUN npm run build

# Expose port
EXPOSE 3000

# Run app
CMD [ "node", "dist/index.js" ]