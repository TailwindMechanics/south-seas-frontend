# Build stage
FROM node:16-alpine AS build

# Install pnpm
RUN npm install -g pnpm

# Pass Koyeb env vars as build args  
ARG VITE_SUPABASE_URL
ARG VITE_SUPABASE_KEY

WORKDIR /app

# Install dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

# Copy source code
COPY . .

# Assign env vars
ENV VITE_SUPABASE_URL=$VITE_SUPABASE_URL  
ENV VITE_SUPABASE_KEY=$VITE_SUPABASE_KEY

# Build app
RUN pnpm run build

# Production image  
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html  

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
