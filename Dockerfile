# Use Node.js for build
FROM node:16-alpine AS build

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Install dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

# Copy source code
COPY . .

# Build app
RUN pnpm run build

# Production image 
FROM nginx:alpine

# Copy build output
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
