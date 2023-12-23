FROM node:20.7.0

# Working Dir
WORKDIR /usr/src/app

# Copy package.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .
#COPY env .env

#build
RUN npm run build
RUN npx prisma generate
RUN npx prisma db pull

# Expose port
EXPOSE 3000

# Run app
CMD [ "node", "dist/index.js" ]