# Use official Node.js image as base image
FROM node:latest as build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json .
COPY pnpm-lock.yaml .

# Install dependencies
RUN pnpm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the application
RUN pnpm run build

# Use nginx as base image for serving the static files
FROM nginx:alpine

# Copy built files from the build stage to nginx's html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
