# Use an official Node.js runtime as a base image
FROM node:18-alpine as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Gatsby site
RUN npm run build

# Use a smaller, production-ready image
FROM nginx:alpine

# Copy the built Gatsby site to the NGINX web root
COPY --from=build /app/public /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
