FROM node:20.7.0

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
RUN npx prisma generate

# Expose port
EXPOSE 3000

# Run app
CMD [ "node", "dist/index.js" ]